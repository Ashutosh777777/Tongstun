from django.urls import path
from .views import ScenarioCategoryListView, ScenariosByCategoryView

urlpatterns = [
    path('categories/', ScenarioCategoryListView.as_view(), name='category-list'),
    path('categories/<slug:slug>/', ScenariosByCategoryView.as_view(), name='category-detail'),
]   