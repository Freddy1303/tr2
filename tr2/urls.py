# urls.py
from django.urls import path, include
from rest_framework import routers
from tr2 import views

router = routers.DefaultRouter()
router.register('clientes', views.ClienteView, 'clientes')
router.register('trabajadores', views.TrabajadorView, 'trabajadores')
router.register('cargos', views.CargoView, 'cargos')
router.register('usuarios', views.UsuarioView, 'usuarios')


urlpatterns = [

    path("api/v1/", include(router.urls)),
]
