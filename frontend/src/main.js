import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router from the router file you will create

const app = createApp(App);

app.use(router); // Use the router instance

app.mount('#app'); // Mount the app to the div with id 'app'
