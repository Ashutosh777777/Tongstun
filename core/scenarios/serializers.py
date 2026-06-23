from rest_framework import serializers
from .models import ScenarioCategory, Scenario


class ScenarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scenario
        fields = [
            'id', 'title', 'slug', 'description',
            'difficulty', 'environment_config',
            'ambient_audio', 'system_prompt', 'is_active'
        ]


class ScenarioCategorySerializer(serializers.ModelSerializer):
    scenarios = ScenarioSerializer(many=True, read_only=True)

    class Meta:
        model = ScenarioCategory
        fields = [
            'id', 'name', 'slug', 'description',
            'icon', 'display_order', 'scenarios'
        ]