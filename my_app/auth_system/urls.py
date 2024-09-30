from django.contrib.auth import views as auth_views
from django.urls import path

from . import views

app_name = 'auth_system'

urlpatterns = [

    # Registration page
    path('register/', views.register, name='register'),

    # Login page, using Django's built-in LoginView
    path('login/', views.user_login, name='login'),

    # URL route for captcha
    path('img_captcha/', views.img_captcha, name='img_captcha'),

    # Logout page
    path('logout/', auth_views.LogoutView.as_view(template_name='auth_system/logout.html'), name='logout'),
]
