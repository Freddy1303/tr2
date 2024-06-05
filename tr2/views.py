from django.contrib.auth import authenticate, login
from django.http import JsonResponse
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

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Inicio de sesión exitoso'})
        else:
            return JsonResponse({'error': 'Credenciales incorrectas'}, status=400)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)
