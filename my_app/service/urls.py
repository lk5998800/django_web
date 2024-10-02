from django.urls import path
from .views import MainPageView

urlpatterns = [
    path('', MainPageView.as_view(), name='api-homepage'),  # 将 '/' 路径映射到 main_page 视图
]
