from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import ScenarioCategory, Scenario
from .serializers import ScenarioCategorySerializer, ScenarioSerializer


class ScenarioCategoryListView(ListAPIView):
    queryset = ScenarioCategory.objects.filter(is_active=True).order_by('display_order')
    serializer_class = ScenarioCategorySerializer


class ScenariosByCategoryView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = ScenarioCategory.objects.filter(is_active=True)
    serializer_class = ScenarioCategorySerializer