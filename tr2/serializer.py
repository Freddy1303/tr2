# serializer.py
from rest_framework import serializers
from .models import Cliente, Trabajador, Cargo, Usuario

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class CargoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargo
        fields = '__all__'

class TrabajadorSerializer(serializers.ModelSerializer):
    cargo = serializers.PrimaryKeyRelatedField(queryset=Cargo.objects.all())
    cargo_nombre = serializers.ReadOnlyField(source='cargo.nombre') 
    
    class Meta:
        model = Trabajador
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
