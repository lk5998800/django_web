from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='service'),  # 将 '/' 路径映射到 main_page 视图
]
