import { createStore } from 'vuex';
import menu from './modules/menu';
import posts from './modules/posts';

export default createStore({
  modules: {
    menu,
    posts
  },
});