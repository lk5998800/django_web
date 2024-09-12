# forms.py
from django import forms



class RegisterForm(forms.Form):
    gender = (
        ('male', "男"),
        ('female', "女"),
    )
    telephone = forms.CharField(label="手机号码", max_length=128,
                               widget=forms.TextInput(attrs={'class': 'form-control'}))

    username = forms.CharField(label="用户名", max_length=256,
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    captcha = forms.CharField(label="验证码", max_length=256,
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    password1 = forms.EmailField(label="   ",
                             widget=forms.EmailInput(attrs={'class': 'form-control'}))

    password2 = forms.ChoiceField(label='性别', choices=gender)

    # captcha = CaptchaField(label='验证码')


class UserForm(forms.Form):
    username = forms.CharField(label="用户名", max_length=128)
    password = forms.CharField(label="密码", max_length=256, widget=forms.PasswordInput)