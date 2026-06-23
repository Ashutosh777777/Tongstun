from django.contrib import admin

# # Register your models here.
# from django.contrib import admin
# from .models import ScenarioCategory, Scenario


# @admin.register(ScenarioCategory)
# class ScenarioCategoryAdmin(admin.ModelAdmin):
#     list_display = ['name', 'slug', 'display_order', 'is_active']
#     list_editable = ['display_order', 'is_active']
#     prepopulated_fields = {'slug': ('name',)}
#     search_fields = ['name']


# @admin.register(Scenario)
# class ScenarioAdmin(admin.ModelAdmin):
#     list_display = ['title', 'category', 'difficulty', 'is_active']
#     list_filter = ['category', 'difficulty', 'is_active']
#     list_editable = ['is_active']
#     prepopulated_fields = {'slug': ('title',)}
#     search_fields = ['title', 'description']

from django.contrib import admin
from .models import ScenarioCategory, Scenario


@admin.register(ScenarioCategory)
class ScenarioCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'display_order', 'is_active']
    list_editable = ['display_order', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']


@admin.register(Scenario)
class ScenarioAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'difficulty', 'is_active']
    list_filter = ['category', 'difficulty', 'is_active']
    list_editable = ['is_active']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title', 'description']