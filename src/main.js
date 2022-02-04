// Vue
import { createApp } from 'vue';
import App from './App.vue';

// css
import './assets/tailwind.css';
import './App.css';

// store
import store from './store/index';

// router
import router from './router';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faExternalLinkAlt);
// ---------------------------------------------------------------

// init app
const app = createApp(App);
app.config.globalProperties.$filters = {
  capitalize(value) {
    return value.toUpperCase();
  }
};

app.use(store);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
