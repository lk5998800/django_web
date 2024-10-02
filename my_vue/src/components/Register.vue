<!-- src/components/Register.vue -->
<template>
  <div class="register">
    <h2>用户注册</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label>用户名：</label>
        <input v-model="form.username" required />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="form.password1" required />
      </div>
      <div>
        <label>确认密码：</label>
        <input type="password" v-model="form.password2" required />
      </div>
      <div>
        <label>手机号：</label>
        <input v-model="form.telephone" required />
      </div>
      <div>
        <label>验证码：</label>
        <input v-model="form.img_captcha" required />
        <img :src="captchaUrl" @click="refreshCaptcha" alt="验证码" />
      </div>
      <button type="submit">注册</button>
    </form>
    <div v-if="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      form: {
        username: '',
        password1: '',
        password2: '',
        telephone: '',
        img_captcha: '',
      },
      captchaUrl: '',
      message: '',
    }
  },
  created() {
    this.refreshCaptcha()
  },
  methods: {
    refreshCaptcha() {
      // 添加时间戳，防止缓存
      this.captchaUrl = `${this.$axios.defaults.baseURL}/api/img_captcha/?t=${Date.now()}`
    },
    onSubmit() {
      this.$axios.post('/api/register/', this.form)
        .then(response => {
          this.message = response.data.message || '注册成功'
          // 注册成功后跳转到登录页面
          this.$router.push('/login')
        })
        .catch(error => {
          if (error.response && error.response.data) {
            // 处理验证错误信息
            const errors = error.response.data
            this.message = Object.values(errors).join('; ')
          } else {
            this.message = '注册失败，请重试'
          }
          this.refreshCaptcha()  // 刷新验证码
        })
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
.register {
  max-width: 400px;
  margin: 0 auto;
}
.register form div {
  margin-bottom: 10px;
}
.register img {
  cursor: pointer;
}
</style>
