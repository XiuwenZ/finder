<template>
  <div class="auth-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <router-link to="/login">Already have an account? Log in</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      // Handle signup logic here
      console.log("Signup with:", this.name, this.email, this.password);
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 300px;
  margin: auto;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  background-color: #42b883;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #347474;
}

router-link {
  display: block;
  margin-top: 1rem;
  color: #42b883;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
