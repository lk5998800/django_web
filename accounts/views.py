import random

from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .forms import RegisterForm, UserForm
from django.http import HttpResponse
from captcha.image import ImageCaptcha


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
            email = form.cleaned_data['email']
            sex = form.cleaned_data['sex']
            if password1 != password2:  # Check if the two passwords match
                message = "The two passwords entered are different!"
                return render(request, 'user19/register.html', locals())
            else:
                same_name_user = User.objects.filter(name=username)
                if same_name_user:  # Username must be unique
                    message = 'User already exists, please choose a different username!'
                    return render(request, 'user19/register.html', locals())
                same_email_user = User.objects.filter(email=email)
                if same_email_user:  # Email must be unique
                    message = 'This email address has already been registered, please use a different email!'
                    return render(request, 'user19/register.html', locals())

                # When everything is OK, create a new user

                new_user = User.objects.create()
                new_user.name = username
                new_user.password = password1
                new_user.email = email
                new_user.sex = sex
                new_user.save()

            # Automatically log in the newly registered user
            user_login(request)
            return redirect('main')  # Redirect to homepage
        else:
            messages.info(request, 'Invalid input format')
            return render(request, 'accounts/register.html', {'form': form})

    else:
        form = RegisterForm()

        # If it is a GET request, generate and send an SMS verification code
        if 'telephone' in request.GET:
            phone_number = request.GET['telephone']
            sms_code = str(random.randint(100000, 999999))  # Generate a 6-digit random verification code
            request.session['sms_captcha'] = sms_code  # Store the verification code in the session
            send_sms(phone_number, sms_code)  # Call the SMS sending function
            messages.info(request, 'The SMS verification code has been sent to your phone.')

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
    image = ImageCaptcha()  # Use the ImageCaptcha class to generate a captcha
    data = image.generate('1234')  # You can generate a random captcha string here
    response = HttpResponse(data, content_type='image/png')
    return response


# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# Login view
def user_login(request):
    if request.method == 'POST':
        form = UserForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome back, {username}!')
                return redirect('main')  # Redirect to homepage after login
            else:
                messages.error(request, 'Incorrect username or password')
        else:
            messages.error(request, 'Invalid form, please try again')
    else:
        form = UserForm()

    return render(request, 'accounts/login.html', {'form': form})


# Logout view
def user_logout(request):
    logout(request)
    messages.success(request, 'You have successfully logged out')
    return redirect('accounts:login')  # Redirect to login page after logout
