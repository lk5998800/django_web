# urls.py
from django.urls import path
from .views import RegisterView, ImageCaptchaView, LoginView, LogoutView, UserDetailView, CurrentUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='api-register'),
    path('login/', LoginView.as_view(), name='api-login'),
    path('logout/', LogoutView.as_view(), name='api-logout'),
    path('img_captcha/', ImageCaptchaView.as_view(), name='api-img-captcha'),
    path('user/<str:username>/', UserDetailView.as_view(), name='api-user-detail'),
    path('current_user/', CurrentUserView.as_view(), name='api-current-user'),

    # 其他路由
]
