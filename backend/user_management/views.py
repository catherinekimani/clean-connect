from rest_framework import viewsets, permissions
from .models import CustomUser, UserProfile
from .serializers import UserSerializer, UserProfileSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = [permissions.AllowAny]

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, username=email, password=password)

            if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                return Response({
                    'message': 'Login successful!',
                    'token': token.key,
                    'user': {
                        'id': user.id,
                        'email': user.email,
                        'username': user.username,
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid email or password.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserProfile.objects.all()

    def get_queryset(self):
        user = self.request.user
        if not user.is_authenticated:
            return UserProfile.objects.none()
        return UserProfile.objects.filter(user=user)