from typing import Any

from  rest_framework import serializers
from b2b.models import B2BTypes, ReadySelectedB2B, B2BRequests

class B2BTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = B2BTypes
        fields = ('id', 'name', 'notes')

class B2BTypeOnlyNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = B2BTypes
        fields = ("name",)

class B2BRequestSerializer(serializers.ModelSerializer):
    date = serializers.DateField(
        format="%d.%m.%Y",
        input_formats=["%d.%m.%Y", "iso-8601"],
    )
    b2b_type = serializers.SlugRelatedField(
        many=True,
        slug_field='name',
        queryset=B2BTypes.objects.all(),
        allow_empty=False
    )

    class Meta:
        model = B2BRequests
        fields = ("id", "full_name", "email", "phone", "date", "b2b_type", "notes")
        extra_kwargs = {
            'email': {'validators': []}
        }

    def validate_email(self, value):
        if B2BRequests.objects.filter(email=value).exists():
            raise serializers.ValidationError(detail={
                "code": "EMAIL_EXISTS",
            })

        return value

class B2BReadySelectedSerializer(serializers.ModelSerializer):
    b2b_type = B2BTypeOnlyNameSerializer(many=True)

    class Meta:
        model = ReadySelectedB2B
        fields = ('id', 'name', "b2b_type")