# mama_fua/urls.py

from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter
from user_management.views import UserViewSet, UserProfileViewSet
from serrvice_providers.views import ServiceViewSet, ServiceRequestViewSet
# from payments.views import PaymentViewSet
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.authtoken.views import obtain_auth_token

schema_view = get_schema_view(
   openapi.Info(
      title="Mama Fua API",
      default_version='v1',
      description="API documentation for Mama Fua Project",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', UserProfileViewSet)
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'service-requests', ServiceRequestViewSet, basename='service-request')
# router.register(r'payments', PaymentViewSet, basename='payment')

urlpatterns = [
    path('', RedirectView.as_view(url='/api/', permanent=False)),  # Redirect root to API root
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]