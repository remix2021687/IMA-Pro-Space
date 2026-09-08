from rest_framework.viewsets import ReadOnlyModelViewSet
from b2b.models import B2BTypes, ReadySelectedB2B
from api.B2B.serializer import B2BTypeSerializer, B2BReadySelectedSerializer

class B2BTypesViewSet(ReadOnlyModelViewSet):
    queryset = B2BTypes.objects.all()
    serializer_class = B2BTypeSerializer

class B2BReadySelectedViewSet(ReadOnlyModelViewSet):
    queryset = ReadySelectedB2B.objects.all()
    serializer_class = B2BReadySelectedSerializer
