from django.urls import path
from django.contrib.auth import views as auth_views
from . import views


app_name = 'accounts'

urlpatterns = [


    # 注册页面
    path('register/', views.register, name='register'),

    # 登录页面，使用Django内置的LoginView
    path('login/', views.user_login, name='login'),

    path('img_captcha/', views.img_captcha, name='img_captcha'),  # 验证码的 URL 路由
    # 退出登录页面
    path('logout/', auth_views.LogoutView.as_view(template_name='accounts/logout.html'), name='logout'),
]
