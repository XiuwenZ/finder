import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Mainpage from '../components/Mainpage.vue'; // Correct the import path

const routes = [
    { path: '/', redirect: '/main-page' }, // Redirect to the JoinUs page by default
    { path: '/main-page', component: Mainpage},
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
