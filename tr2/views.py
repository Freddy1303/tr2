from rest_framework import viewsets
from .serializer import ClienteSerializer, TrabajadorSerializer, CargoSerializer
from .models import Cliente, Trabajador, Cargo

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

class CargoView(viewsets.ModelViewSet):
    serializer_class = CargoSerializer
    queryset = Cargo.objects.all()

class TrabajadorView(viewsets.ModelViewSet):
    serializer_class = TrabajadorSerializer
    queryset = Trabajador.objects.all()
