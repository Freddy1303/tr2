# views.py
from rest_framework import viewsets
from .serializer import ClienteSerializer, TrabajadorSerializer, CargoSerializer, UsuarioSerializer
from .models import Cliente, Trabajador, Cargo, Usuario


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
      

