from django.db import models

# Create your models here.
import uuid
from django.db import models
from django.utils.text import slugify


class ScenarioCategory(models.Model):
    CASUAL = 'casual'
    FORMAL = 'formal'
    FLIRTY = 'flirty'
    FRIENDLY = 'friendly'
    ARGUMENT = 'argument'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, blank=True, help_text="Icon name or emoji")
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "scenario categories"
        ordering = ['display_order', 'name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Scenario(models.Model):
    DIFFICULTY_EASY = 'easy'
    DIFFICULTY_MEDIUM = 'medium'
    DIFFICULTY_HARD = 'hard'
    DIFFICULTY_CHOICES = [
        (DIFFICULTY_EASY, 'Easy'),
        (DIFFICULTY_MEDIUM, 'Medium'),
        (DIFFICULTY_HARD, 'Hard'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(
        ScenarioCategory, on_delete=models.CASCADE, related_name='scenarios'
    )
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    description = models.TextField()
    difficulty = models.CharField(
        max_length=10, choices=DIFFICULTY_CHOICES, default=DIFFICULTY_MEDIUM
    )
    # Three.js / environment config stored as JSON string (swap to JSONField if Postgres)
    environment_config = models.JSONField(
        default=dict,
        blank=True,
        help_text="Three.js scene config: lighting, camera, objects, etc."
    )
    ambient_audio = models.CharField(
        max_length=255, blank=True,
        help_text="Path or URL to ambient audio file for this scenario"
    )
    system_prompt = models.TextField(
        blank=True,
        help_text="LLM system prompt that sets the scene and character for this scenario"
    )
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'title']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.category.name} → {self.title}"