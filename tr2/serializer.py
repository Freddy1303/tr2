from rest_framework import serializers
from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        #fields = ('id','dni','nomber','direccion','telefono','estado')
        fields = '__all__'

        