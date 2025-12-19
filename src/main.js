import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';
import './main.css';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { useAuthStore } from '@/stores/auth/auth';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);

onAuthStateChanged(auth, user => {
  const authStore = useAuthStore();
  authStore.setUser(user);
});

app.mount('#app');