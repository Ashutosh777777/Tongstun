from django.db import models

# Create your models here.
import uuid
from django.db import models
from django.conf import settings
from scenarios.models import Scenario


class Session(models.Model):
    STATUS_PENDING = 'pending'
    STATUS_ACTIVE = 'active'
    STATUS_COMPLETED = 'completed'
    STATUS_ABANDONED = 'abandoned'
    STATUS_CHOICES = [
        (STATUS_PENDING, 'Pending'),
        (STATUS_ACTIVE, 'Active'),
        (STATUS_COMPLETED, 'Completed'),
        (STATUS_ABANDONED, 'Abandoned'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sessions'
    )
    scenario = models.ForeignKey(
        Scenario, on_delete=models.SET_NULL, null=True, related_name='sessions'
    )
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default=STATUS_PENDING
    )
    started_at = models.DateTimeField(null=True, blank=True)
    ended_at = models.DateTimeField(null=True, blank=True)
    duration_seconds = models.PositiveIntegerField(null=True, blank=True)

    # WebSocket / streaming metadata
    websocket_channel = models.CharField(max_length=255, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Session {self.id} — {self.user} — {self.scenario}"

    def mark_completed(self):
        from django.utils import timezone
        self.status = self.STATUS_COMPLETED
        self.ended_at = timezone.now()
        if self.started_at:
            delta = self.ended_at - self.started_at
            self.duration_seconds = int(delta.total_seconds())
        self.save()


class Transcript(models.Model):
    SPEAKER_USER = 'user'
    SPEAKER_AI = 'ai'
    SPEAKER_CHOICES = [
        (SPEAKER_USER, 'User'),
        (SPEAKER_AI, 'AI'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    session = models.ForeignKey(
        Session, on_delete=models.CASCADE, related_name='transcripts'
    )
    speaker = models.CharField(max_length=10, choices=SPEAKER_CHOICES)
    content = models.TextField()
    confidence_score = models.FloatField(
        null=True, blank=True,
        help_text="STT confidence score (0.0–1.0), null for AI turns"
    )
    audio_start_ms = models.PositiveIntegerField(
        null=True, blank=True, help_text="Offset from session start in milliseconds"
    )
    audio_duration_ms = models.PositiveIntegerField(null=True, blank=True)
    sequence_order = models.PositiveIntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['sequence_order', 'timestamp']

    def __str__(self):
        preview = self.content[:60]
        return f"[{self.speaker}] {preview}"
class FeedbackReport(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    session = models.OneToOneField(
        Session, on_delete=models.CASCADE, related_name='feedback_report'
    )

    # Scores: 0.0–10.0
    articulation_score = models.FloatField(null=True, blank=True)
    grammar_score = models.FloatField(null=True, blank=True)
    confidence_score = models.FloatField(null=True, blank=True)
    pace_score = models.FloatField(null=True, blank=True)
    filler_word_score = models.FloatField(null=True, blank=True)
    overall_score = models.FloatField(null=True, blank=True)

    # Detailed breakdown (JSON)
    filler_words_detail = models.JSONField(
        default=dict, blank=True,
        help_text='e.g. {"um": 4, "uh": 2, "like": 7}'
    )
    grammar_issues = models.JSONField(
        default=list, blank=True,
        help_text='List of {text, suggestion, severity} dicts'
    )
    suggestions = models.JSONField(
        default=list, blank=True,
        help_text='List of improvement suggestion strings'
    )
    summary = models.TextField(blank=True, help_text="LLM-generated overall summary")

    generated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "feedback report"

    def __str__(self):
        return f"Feedback for session {self.session_id}"