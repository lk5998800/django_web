<template>
  <div id="app">
    <!-- 导航栏，右上角放置登录和注册链接 -->
    <nav>
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/register">注册</router-link></li>
      </ul>
    </nav>

    <!-- 动态路由页面 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 导航栏样式 */
nav {
  position: absolute;
  top: 10px;
  right: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #2c3e50;
}

nav ul li a:hover {
  color: #42b983;
}
</style>
