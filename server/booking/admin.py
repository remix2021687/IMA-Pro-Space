from django.contrib import admin
from booking.models import Service, Room, ServiceContent, ServiceEquipment

admin.site.register([Service, Room, ServiceContent, ServiceEquipment])
