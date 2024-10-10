from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Service, ServiceRequest
from .serializers import ServiceSerializer, ServiceRequestSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.action == 'list':
            return Service.objects.all()
        return Service.objects.filter(provider=self.request.user)

    def perform_create(self, serializer):
        serializer.save(provider=self.request.user)

    @action(detail=False, methods=['get'])
    def my_services(self, request):
        services = Service.objects.filter(provider=request.user)
        serializer = self.get_serializer(services, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def request_service(self, request, pk=None):
        service = self.get_object()
        if service.provider == request.user:
            return Response({"detail": "You can't request your own service."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        service_request = ServiceRequest.objects.create(
            service=service,
            client=request.user,
            status='PENDING'
        )
        serializer = ServiceRequestSerializer(service_request)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def debug(self, request):
        print("User:", request.user)
        print("Auth:", request.auth)
        print("Headers:", request.headers)
        return Response({"message": "Check server console for debug info"})

class ServiceRequestViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ServiceRequest.objects.filter(client=user) | ServiceRequest.objects.filter(service__provider=user)

    def perform_create(self, serializer):
        service = serializer.validated_data['service']
        if service.provider == self.request.user:
            raise serializers.ValidationError("You can't request your own service.")
        serializer.save(client=self.request.user, status='PENDING')

    @action(detail=True, methods=['post'])
    def accept(self, request, pk=None):
        service_request = self.get_object()
        if service_request.service.provider != request.user:
            return Response({"detail": "You don't have permission to accept this request."}, 
                            status=status.HTTP_403_FORBIDDEN)
        service_request.status = 'ACCEPTED'
        service_request.save()
        serializer = self.get_serializer(service_request)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        service_request = self.get_object()
        if service_request.service.provider != request.user:
            return Response({"detail": "You don't have permission to reject this request."}, 
                            status=status.HTTP_403_FORBIDDEN)
        service_request.status = 'REJECTED'
        service_request.save()
        serializer = self.get_serializer(service_request)
        return Response(serializer.data)