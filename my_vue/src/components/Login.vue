<!-- src/components/Login.vue -->
<template>
  <div class="login">
    <h2>User Login</h2>
    <form @submit.prevent="onSubmit" class="login-form">
      <div class="form-group">
        <label>Username:</label>
        <input v-model="form.username" required class="input-field" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="form.password" required class="input-field" />
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
    <div v-if="message" class="message-box">
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
      message: '', // For displaying login error or success messages
    }
  },
  methods: {
    onSubmit() {
      // Call the /api/token/ endpoint to get the JWT token
      this.$axios.post('http://localhost:8000/api/token/', this.form)
        .then(response => {
          // Get access and refresh tokens
          const accessToken = response.data.access;
          const refreshToken = response.data.refresh;

          // Store the tokens in localStorage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          // Display success message
          this.message = 'Login successful';

          // Redirect to home page or another page
          this.$router.push('/');
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            // If 401 Unauthorized is returned, show incorrect password message
            this.message = 'Incorrect username or password';
          } else if (error.response && error.response.data) {
            // Handle other errors
            this.message = error.response.data.detail || 'Login failed';
          } else {
            this.message = 'Login failed, please try again';
          }
        });
    }
  }
}
</script>

<style scoped>
/* Page layout */
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: left;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

/* Form layout */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align to the left */
}

.form-group {
  display: flex;
  align-items: center; /* Align label and input */
  justify-content: flex-start; /* Align elements in a row */
  margin-bottom: 15px;
  width: 100%; /* Make input width match the form */
}

label {
  font-size: 1rem;
  color: #333;
  margin-right: 5px; /* Reduce the space between label and input */
  width: 70px; /* Set a fixed width for label to ensure alignment */
}

.input-field {
  flex-grow: 1; /* Make the input fill the remaining space */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.input-field:focus {
  border-color: #4a90e2;
  outline: none;
}

/* Button styles */
.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #357abd;
}

/* Error or success message */
.message-box {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #ff4d4f;
}
</style>
