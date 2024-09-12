import random

from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .forms import RegisterForm, UserForm
from django.http import HttpResponse
from captcha.image import ImageCaptcha


# 短信发送函数
def send_sms(telephone, sms_code):
    # 在这里使用第三方API发送短信验证码
    # 比如阿里云、腾讯云短信服务等
    pass


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            # 短信验证码和图形验证码验证通过
            # 创建用户并保存
            username = form.cleaned_data['username']
            password1 = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']
            email = form.cleaned_data['email']
            sex = form.cleaned_data['sex']
            if password1 != password2:  # 判断两次密码是否相同
                message = "两次输入的密码不同！"
                return render(request, 'user19/register.html', locals())
            else:
                same_name_user = User.objects.filter(name=username)
                if same_name_user:  # 用户名唯一
                    message = '用户已经存在，请重新选择用户名！'
                    return render(request, 'user19/register.html', locals())
                same_email_user = User.objects.filter(email=email)
                if same_email_user:  # 邮箱地址唯一
                    message = '该邮箱地址已被注册，请使用别的邮箱！'
                    return render(request, 'user19/register.html', locals())

                # 当一切都OK的情况下，创建新用户

                new_user = User.objects.create()
                new_user.name = username
                new_user.password = password1
                new_user.email = email
                new_user.sex = sex
                new_user.save()

            # 自动登录新注册的用户
            user_login(request)
            return redirect('main')  # 重定向到主页
        else:
            messages.info(request, '输入格式错误')
            return render(request, 'accounts/register.html', {'form': form})

    else:
        form = RegisterForm()

        # 如果是 GET 请求，生成并发送短信验证码
        if 'telephone' in request.GET:
            phone_number = request.GET['telephone']
            sms_code = str(random.randint(100000, 999999))  # 生成 6 位随机验证码
            request.session['sms_captcha'] = sms_code  # 将验证码存储在 session 中
            send_sms(phone_number, sms_code)  # 调用发送短信的函数
            messages.info(request, '短信验证码已发送到您的手机。')

    return render(request, 'accounts/register.html', {'form': form})


def get_user_by_username(username):
    try:
        user = User.objects.get(username=username)
        return user
    except User.DoesNotExist:
        return None


def update_user_email(username, new_email):
    user = User.objects.get(username=username)
    user.email = new_email
    user.save()
    return user


def delete_user(username):
    user = User.objects.get(username=username)
    user.delete()


def img_captcha(request):
    image = ImageCaptcha()  # 使用 ImageCaptcha 类生成验证码
    data = image.generate('1234')  # 这里你可以生成一个随机的验证码字符串
    response = HttpResponse(data, content_type='image/png')
    return response


# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# 登录视图
def user_login(request):
    if request.method == 'POST':
        form = UserForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'欢迎回来, {username}!')
                return redirect('main')  # 登录后重定向到主页
            else:
                messages.error(request, '用户名或密码不正确')
        else:
            messages.error(request, '表单无效，请重新尝试')
    else:
        form = UserForm()

    return render(request, 'accounts/login.html', {'form': form})


# 注销视图
def user_logout(request):
    logout(request)
    messages.success(request, '您已成功注销')
    return redirect('accounts:login')  # 注销后重定向到登录页面
