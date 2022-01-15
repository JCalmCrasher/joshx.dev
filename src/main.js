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

// custom cursor
// import Tetikus from '@namchee/tetikus';
// import '@namchee/tetikus/dist/tetikus.css';

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
// app.use(Tetikus);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
