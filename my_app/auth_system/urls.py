# urls.py
from django.urls import path
from .views import RegisterView, ImageCaptchaView, LoginView, LogoutView, UserDetailView, CurrentUserView

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='api-register'),
    path('api/login/', LoginView.as_view(), name='api-login'),
    path('api/logout/', LogoutView.as_view(), name='api-logout'),
    path('api/img_captcha/', ImageCaptchaView.as_view(), name='api-img-captcha'),
    path('api/user/<str:username>/', UserDetailView.as_view(), name='api-user-detail'),
    path('api/current_user/', CurrentUserView.as_view(), name='api-current-user'),

    # 其他路由
]
