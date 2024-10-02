<!-- src/components/Login.vue -->
<template>
  <div class="login">
    <h2>用户登录</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label>用户名：</label>
        <input v-model="form.username" required />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="form.password" required />
      </div>
      <button type="submit">登录</button>
    </form>
    <div v-if="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      message: '',
    }
  },
  methods: {
    onSubmit() {
      this.$axios.post('/api/login/', this.form)
        .then(response => {
          this.message = response.data.message || '登录成功'
          // 登录成功后，可以保存用户信息或跳转到主页
          this.$router.push('/')
        })
        .catch(error => {
          if (error.response && error.response.data) {
            this.message = error.response.data.error || '登录失败'
          } else {
            this.message = '登录失败，请重试'
          }
        })
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
.login {
  max-width: 400px;
  margin: 0 auto;
}
.login form div {
  margin-bottom: 10px;
}
</style>
