from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tr2 import views

#api version
router = routers.DefaultRouter()
router.register('tr2', views.ClienteView, 'Clientes')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title = "Cliente API"))
]
