# views.py
from rest_framework import viewsets
from .serializer import ClienteSerializer, TrabajadorSerializer, CargoSerializer, UsuarioSerializer
from .models import Cliente, Trabajador, Cargo, Usuario


from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            refresh_token = RefreshToken.for_user(user)
            token = str(refresh_token.access_token)
            return Response({'token': token})
        return Response({'error': 'Invalid credentials'}, status=401)
        

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

class CargoView(viewsets.ModelViewSet):
    serializer_class = CargoSerializer
    queryset = Cargo.objects.all()

class TrabajadorView(viewsets.ModelViewSet):
    serializer_class = TrabajadorSerializer
    queryset = Trabajador.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()  
      

