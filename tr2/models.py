from django.db import models

# Create your models here.

class Cliente(models.Model):   
    dni = models.CharField(max_length=8)
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=9)
    estado = models.CharField(max_length=25)

    def __str__(self):
        return self.nombre

