import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import './App.css';
import store from './store/index';

const app = createApp(App);
app.use(store);
app.mount('#app');
