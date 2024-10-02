// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/Home.vue'
import RegisterComponent from '../components/Register.vue'
import LoginComponent from '../components/Login.vue'

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/login', component: LoginComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
