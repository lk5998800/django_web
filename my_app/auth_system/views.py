# views.py

# 导入必要的模块
import random
import string

from captcha.image import ImageCaptcha
from django.contrib.auth.models import User
from django.http import HttpResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import IsAuthenticated


# 短信发送函数（保持不变）
def send_sms(telephone, sms_code):
    # 此处使用第三方 API 发送短信验证码
    pass

# 注册视图
class RegisterView(APIView):
    @swagger_auto_schema(request_body=RegisterSerializer)
    def post(self, request):
        serializer = RegisterSerializer(data=request.data, context={'request': request})
        session_id = request.session.session_key
        print("当前 session ID:", session_id)
        print(request.session['img_captcha'])
        if serializer.is_valid():
            serializer.save()
            # 注册成功后自动登录用户
            user = authenticate(username=serializer.validated_data['username'],
                                password=serializer.validated_data['password1'])
            if user is not None:
                login(request, user)
            return Response({'message': '注册成功'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 获取验证码视图
class ImageCaptchaView(APIView):
    def get(self, request):
        image = ImageCaptcha()
        captcha_text = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
        data = image.generate(captcha_text)
        request.session['img_captcha'] = captcha_text
        request.session.save()
        session_id = request.session.session_key
        print("当前 session ID:", session_id)
        print(request.session['img_captcha'])
        return HttpResponse(data, content_type='image/png')

# 登录视图
class LoginView(APIView):
    @swagger_auto_schema(request_body=LoginSerializer)
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get('username')
            password = serializer.validated_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return Response({'message': '登录成功'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': '用户名或密码错误'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 登出视图
class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': '已成功登出'}, status=status.HTTP_200_OK)

# 用户信息视图（获取、更新、删除）
class UserDetailView(APIView):
    def get(self, request, username):
        user = get_user_by_username(username)
        if user:
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': '用户不存在'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, username):
        user = get_user_by_username(username)
        if user:
            new_email = request.data.get('email')
            user.email = new_email
            user.save()
            return Response({'message': '邮箱更新成功'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': '用户不存在'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, username):
        user = get_user_by_username(username)
        if user:
            user.delete()
            return Response({'message': '用户已删除'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': '用户不存在'}, status=status.HTTP_404_NOT_FOUND)

# 辅助函数
def get_user_by_username(username):
    try:
        user = User.objects.get(username=username)
        return user
    except User.DoesNotExist:
        return None

class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

