# service_providers/models.py

from django.db import models
from user_management.models import CustomUser

class Service(models.Model):
    provider = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    service_name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[
        ('active', 'Active'),
        ('inactive', 'Inactive')
    ], default='active')

    def __str__(self):
        return f"{self.service_name} by {self.provider.username}"

class ServiceRequest(models.Model):
    client = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='service_requests')
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed')
    ], default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Request for {self.service.service_name} by {self.client.username}"