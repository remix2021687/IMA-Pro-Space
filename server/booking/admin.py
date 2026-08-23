from django.contrib import admin
from booking.models import Service, Room

admin.site.register([Service, Room])
