from django.contrib import admin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from modeltranslation.admin import TranslationAdmin

from booking.models import Service, Room, ServiceContent, ServiceEquipment

# admin.site.register([Service, Room, ServiceContent, ServiceEquipment])


@admin.register(Room)
class RoomAdmin(ModelAdmin, TranslationAdmin):
    list_display = ("name", "visible_name", "is_published")
    list_filter = ('visible_name', 'is_published',)
    search_fields = ('visible_name',)

    fieldsets = (
        ("Information", {
            "fields": (
                "is_published",
            )
        }),
        ("Localization", {
            "fields": ("visible_name", "description")
        })
    )

    @display(description="Name")
    def room_name(self, obj):
        return obj.visible_name

    @display(description="Status", boolean=True)
    def is_published(self, obj):
        return obj.is_published