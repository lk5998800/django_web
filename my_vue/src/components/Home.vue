<template>
  <div class="home">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-links">
        <router-link v-if="!user" to="/login">Login</router-link>
        <router-link v-if="!user" to="/register">Register</router-link>
        <button v-if="user" @click="logout" class="nav-btn">Logout</button>
      </div>
    </nav>

    <main class="main-content">
      <h1>Welcome to the Home Page</h1>
      <div v-if="user">
        <p>Hello, {{ user.username }}</p>
      </div>
      <div v-else>
        <p>You are not logged in.</p>
      </div>
    </main>
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
    // Fetch current user information
    getUserInfo() {
      this.$axios.get('http://localhost:8000/api/auth_system/current_user/')
        .then(response => {
          this.user = response.data
        })
        .catch(() => {
          // Set user to null if request fails
          this.user = null
          console.error('Failed to fetch user information')  // Log error
        })
    },
    // Logout logic
    logout() {
      this.$axios.post('http://localhost:8000/api/auth_system/logout/')
        .then(() => {
          this.user = null
          this.$router.push('/login')
        })
        .catch(() => {
          console.error('Failed to logout')  // Log error
        })
    }
  }
}
</script>

<style scoped>
/* Global layout styles */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh; /* Ensure page content covers full height */
}

/* Navbar styles */
.navbar {
  width: 100%;
  background-color: #4a90e2;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align links vertically in the middle */
  padding: 10px 20px; /* Adjust padding to ensure content fits */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  position: fixed; /* Fix navbar to top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure navbar stays on top */
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-btn {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.nav-btn:hover {
  background-color: #e33c3d;
}

.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Main content styles */
.main-content {
  margin-top: 80px; /* Add margin to prevent overlap with fixed navbar */
  padding: 20px;
  width: 100%;
  max-width: 800px;
}
</style>
