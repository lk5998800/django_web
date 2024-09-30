import random
import string

from captcha.image import ImageCaptcha
from django.contrib.auth.models import User
from django.http import HttpResponse

from .forms import RegisterForm, UserForm


# Create your views here.


# SMS sending function
def send_sms(telephone, sms_code):
    # Use third-party API to send SMS verification code here
    # For example, Aliyun, Tencent Cloud SMS services, etc.
    pass


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)


        if form.is_valid():
            # SMS verification code and image captcha passed
            # Create user and save
            username = form.cleaned_data['username']
            password1 = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']
            input_captcha = form.cleaned_data['img_captcha'].lower()
            session_captcha = request.session.get('img_captcha').lower()
            if input_captcha != session_captcha:
                messages.error(request, "captcha is invalid")
                return render(request, 'auth_system/register.html', locals())
            if password1 != password2:  # Check if the two passwords match
                messages.error(request, "The two passwords entered are different!")
                return render(request, 'auth_system/register.html', locals())
            else:
                if User.objects.filter(username=username).exists():
                    messages.error(request, "User already exists, please choose a different username!")
                    return render(request, 'auth_system/register.html', {'form': form})


                # When everything is OK, create a new user

                new_user = User.objects.create_user(username=username, password=password1)
                new_user.save()

            # Automatically log in the newly registered user
            user_login(request)
            return redirect('service')  # Redirect to homepage
        else:
            messages.info(request, 'Invalid input format')
            return render(request, 'auth_system/register.html', {'form': form})

    else:
        form = RegisterForm()

        # If it is a GET request, generate and send an SMS verification code
        if 'telephone' in request.GET:
            phone_number = request.GET['telephone']
            sms_code = str(random.randint(100000, 999999))  # Generate a 6-digit random verification code
            request.session['sms_captcha'] = sms_code  # Store the verification code in the session
            send_sms(phone_number, sms_code)  # Call the SMS sending function
            messages.info(request, 'The SMS verification code has been sent to your phone.')

    return render(request, 'auth_system/register.html', {'form': form})


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
    image = ImageCaptcha()
    captcha_text = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
    data = image.generate(captcha_text)
    request.session['img_captcha'] = captcha_text  # Store the captcha text in the session
    response = HttpResponse(data, content_type='image/png')
    return response


# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# Login view
def user_login(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome back, {username}!')
                return redirect('service')  # Redirect to homepage after login
            else:
                messages.error(request, 'Incorrect username or password')
        else:
            messages.error(request, 'Invalid form, please try again')
    else:
        form = UserForm()

    return render(request, 'auth_system/login.html', {'form': form})


# Logout view
def user_logout(request):
    logout(request)
    messages.success(request, 'You have successfully logged out')
    return redirect('auth_system:login')  # Redirect to login page after logout
