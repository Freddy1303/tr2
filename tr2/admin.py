from django.contrib import admin
from .models import Cliente, Trabajador, Cargo, Usuario

admin.site.register(Cliente)
admin.site.register(Trabajador)
admin.site.register(Cargo)
admin.site.register(Usuario)

