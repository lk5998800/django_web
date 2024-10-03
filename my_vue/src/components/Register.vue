<template>
  <div class="register">
    <div class="register-container">
      <h2>User Registration</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group" :class="{ 'error': message.username }">
          <input v-model="form.username" placeholder="Username" required />
          <div v-if="message.username" class="error-message">
            <i class="error-icon">!</i>
            <span>{{ message.username }}</span>
          </div>
        </div>
        <div class="form-group" :class="{ 'error': message.password1 }">
          <input type="password" v-model="form.password1" placeholder="Password" required />
          <div v-if="message.password1" class="error-message">
            <i class="error-icon">!</i>
            <span>{{ message.password1 }}</span>
          </div>
        </div>
        <div class="form-group" :class="{ 'error': message.password2 }">
          <input type="password" v-model="form.password2" placeholder="Confirm Password" required />
          <div v-if="message.password2" class="error-message">
            <i class="error-icon">!</i>
            <span>{{ message.password2 }}</span>
          </div>
        </div>
        <div class="form-group" :class="{ 'error': message.telephone }">
          <input v-model="form.telephone" placeholder="Phone Number" required />
          <div v-if="message.telephone" class="error-message">
            <i class="error-icon">!</i>
            <span>{{ message.telephone }}</span>
          </div>
        </div>
        <div class="form-group captcha-container" :class="{ 'error': message.img_captcha }">
          <input v-model="form.img_captcha" placeholder="Captcha" required />
          <img :src="captchaUrl" @click="refreshCaptcha" alt="Captcha" />
          <div v-if="message.img_captcha" class="error-message">
            <i class="error-icon">!</i>
            <span>{{ message.img_captcha }}</span>
          </div>
        </div>
        <button type="submit" class="submit-btn">Register</button>
      </form>
      <div v-if="message.general" class="error-message">
        <i class="error-icon">!</i>
        <span>{{ message.general }}</span>
      </div>
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
      message: {
        username: '',
        password1: '',
        password2: '',
        telephone: '',
        img_captcha: '',
        general: '',
      },
    }
  },
  created() {
    this.refreshCaptcha(); // Refresh the captcha when the component is created
  },
  methods: {
    refreshCaptcha() {
      this.captchaUrl = `http://localhost:8000/api/auth_system/img_captcha/?t=${Date.now()}`;
    },
    onSubmit() {
      // Submit the form data
      this.$axios.post('http://localhost:8000/api/auth_system/register/', this.form)
        .then(response => {
          // If registration is successful, show success message
          this.message.general = response.data.message || 'Registration successful';
          this.$router.push('/login');
        })
        .catch(error => {
          if (error.response && error.response.data) {
            const errors = error.response.data;
            this.message.username = errors.username ? "Username already exists." : '';
            this.message.password1 = errors.password1 ? "Passwords must match and meet complexity requirements." : '';
            this.message.img_captcha = errors.img_captcha ? "Captcha is incorrect." : '';
            this.message.general = errors.non_field_errors ? errors.non_field_errors.join(', ') : '';
          } else {
            this.message.general = 'Registration failed, please try again';
          }
          this.refreshCaptcha();  // Refresh captcha after failed submission
        });
    }
  }
}
</script>

<style scoped>
/* Center the page layout */
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
}

/* Align the registration box to the center, with a white background */
.register-container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Ensure all content is centered */
}

h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Input field styles, centered and appropriate width */
.form-group {
  margin-bottom: 20px;
  position: relative;
}

.form-group.error input {
  border-color: #ff4d4f;
}

input {
  width: 90%;  /* Make input fields full width */
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #f5f5f5;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #4a90e2;
}

/* Error message styles */
.error-message {
  display: flex;
  align-items: center;
  color: #ff4d4f;
  font-size: 0.85rem;
  margin-top: 5px;
  justify-content: center; /* Center error messages */
}

.error-icon {
  background-color: #ff4d4f;
  color: #fff;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  margin-right: 5px;
}

/* Captcha */
.captcha-container {
  display: flex;
  align-items: center;
  justify-content: center; /* Center captcha */
}

.captcha-container img {
  margin-left: 10px;
  cursor: pointer;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

/* Button styles, centered */
.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #357abd;
}

/* Center the error messages */
.error-message.general {
  color: #ff4d4f;
  text-align: center;
  margin-top: 10px;
}
</style>
