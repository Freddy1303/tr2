from rest_framework import serializers
from .models import Cliente, Trabajador, Cargo

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class CargoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargo
        fields = '__all__'

class TrabajadorSerializer(serializers.ModelSerializer):
    cargo_nombre = serializers.CharField(source='cargo.nombre')  # Serialize only the cargo name
    class Meta:
        model = Trabajador
        fields = '__all__'

