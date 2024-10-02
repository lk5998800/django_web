<!-- src/components/Home.vue -->
<template>
  <div class="home">
    <h1>欢迎来到主页</h1>
    <div v-if="user">
      <p>您好，{{ user.username }}</p>
      <button @click="logout">登出</button>
    </div>
    <div v-else>
      <p>您尚未登录。</p>
      <router-link to="/login">登录</router-link> |
      <router-link to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 获取当前用户信息
    getUserInfo() {
      this.$axios.get('/api/current_user/')
        .then(response => {
          this.user = response.data
        })
        .catch(() => {
          // 请求失败时设置user为null
          this.user = null
          console.error('获取用户信息失败')  // 添加错误日志
        })
    },
    // 登出逻辑
    logout() {
      this.$axios.post('/api/logout/')
        .then(() => {
          this.user = null
          this.$router.push('/login')
        })
        .catch(() => {
          console.error('登出失败')  // 添加错误日志
        })
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
.home {
  text-align: center;
}
</style>
