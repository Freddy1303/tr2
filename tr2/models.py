from django.db import models

# Create your models here.

class Cliente(models.Model):   
    dni = models.CharField(max_length=8)
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    telefono = models.IntegerField(max_length=9)
    estado = models.BooleanField(default=True)
