# config/urls.py
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="API 文档",
        default_version='v1',
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('api/service', include('service.urls')),  # 处理 API 路径
    path('api/auth_system', include('auth_system.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),# 处理 Vue.js 路由
]
