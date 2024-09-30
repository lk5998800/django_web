# forms.py
from django import forms


class RegisterForm(forms.Form):

    telephone = forms.CharField(label="手机号码", max_length=128,
                               widget=forms.TextInput(attrs={'class': 'form-control'}))

    username = forms.CharField(label="用户名", max_length=256,
                                widget=forms.TextInput(attrs={'class': 'form-control'}))

    img_captcha = forms.CharField(label="验证码", max_length=4, widget=forms.TextInput(attrs={'class': 'form-control'}))

    password1 = forms.CharField(label="密码",
                             widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    password2 = forms.CharField(label="确认密码",
                             widget=forms.PasswordInput(attrs={'class': 'form-control'}))


class UserForm(forms.Form):
    username = forms.CharField(label="用户名", max_length=128)
    password = forms.CharField(label="密码", max_length=256, widget=forms.PasswordInput)