# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=256)
    password1 = serializers.CharField(max_length=256, write_only=True)
    password2 = serializers.CharField(max_length=256, write_only=True)
    img_captcha = serializers.CharField(max_length=4, write_only=True)
    telephone = serializers.CharField(max_length=128)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("两次输入的密码不一致")
        # 验证验证码
        request = self.context.get('request')
        session_captcha = request.session.get('img_captcha', '').lower()
        input_captcha = data['img_captcha'].lower()
        if input_captcha != session_captcha:
            raise serializers.ValidationError("验证码错误")
        if User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError("用户名已存在")
        return data

    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password1']
        user = User.objects.create_user(username=username, password=password)
        # 可以在此添加其他字段，如 telephone
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=256)
    password = serializers.CharField(max_length=256, write_only=True)
