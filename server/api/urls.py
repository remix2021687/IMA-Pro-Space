from django.contrib import admin
from django.urls import path, include
from  rest_framework.routers import DefaultRouter

from api.alteg.resourceview import RoomWithService, ServiceViewSet
from api.B2B.resourceview import B2BTypesViewSet
# from .alteg.resourceview import AltegWebhook

router = DefaultRouter()
router.register(r'rooms', RoomWithService, basename='rooms')
router.register(r'services', ServiceViewSet, basename="services")
router.register(r"b2b-types", B2BTypesViewSet, basename="b2b-types")
urlpatterns = [
	# path('webhooks/altegio/', AltegWebhook.as_view(), name='alteg_webhook'),
    path('admin/', admin.site.urls),
	path('', include(router.urls)),
]