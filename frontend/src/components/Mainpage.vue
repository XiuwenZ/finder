<template>
  <div class="main-page-container">
    <h1>Welcome to Our Website</h1>
    <p>Join amazing events around your area.</p>
    <div class="btn-group" role="group">
      <button class="btn btn-primary" @click="goToLogin">Login</button>
      <button class="btn btn-success" @click="goToSignup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mainpage',
  methods: {
    goToLogin() {
      // Programmatically navigate to the login page
      this.$router.push('/login');
    },
    goToSignup() {
      // Programmatically navigate to the signup page
      this.$router.push('/signup');
    },
  },
};
</script>

<style scoped>
/* Scoped styles specific to this component */
.main-page-container {
  text-align: center;
  margin-top: 50px;
}

.btn-group {
  margin-top: 20px;
}
</style>
