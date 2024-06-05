from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Cliente(models.Model):   
    dni = models.CharField(max_length=8)
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=9)
    estado = models.CharField(max_length=25)

    def __str__(self):
        return self.nombre

class Cargo(models.Model):
    nombre = models.CharField(max_length=25)

    def __str__(self):
        return self.nombre

class Trabajador(models.Model):
    dni = models.CharField(max_length=8)
    nombre = models.CharField(max_length=255)
    edad = models.IntegerField()
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=9)
    cargo = models.ForeignKey(Cargo, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    usuario = models.CharField(max_length=150, unique=True)
    contraseña = models.CharField(max_length=128)

    def __str__(self):
        return self.usuario