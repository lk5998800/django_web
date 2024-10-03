import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).mount('#app');

// Global configuration for axios to include credentials (such as cookies) with every request
axios.defaults.withCredentials = true;

// Set the base URL for all axios requests (Django backend API)
axios.defaults.baseURL = 'http://localhost:8000';  // Django backend address

// Get the CSRF token from the cookie
const csrfToken = getCookie('csrftoken');

// Set the CSRF token in the headers for all axios requests
axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

// Ensure axios requests include cookies (for Django session management)
axios.defaults.withCredentials = true;

// Function to retrieve a specific cookie by name
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');  // Retrieve token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Attach token as Bearer token
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
