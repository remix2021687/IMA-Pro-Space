from  rest_framework import serializers
from b2b.models import B2BTypes, ReadySelectedB2B

class B2BTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = B2BTypes
        fields = ('id', 'name', 'notes')

class B2BTypeOnlyNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = B2BTypes
        fields = ("name",)

class B2BReadySelectedSerializer(serializers.ModelSerializer):
    b2b_type = B2BTypeOnlyNameSerializer(many=True)

    class Meta:
        model = ReadySelectedB2B
        fields = ('id', 'name', "b2b_type")