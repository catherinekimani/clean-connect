from rest_framework import serializers
from .models import Service, ServiceRequest

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'provider', 'service_name', 'description', 'price', 'status')

class ServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceRequest
        fields = ('id', 'client', 'service', 'status', 'created_at', 'updated_at')