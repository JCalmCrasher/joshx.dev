<template>
  <nav class="overlay" aria-label="Contact menu" v-if="menuCollapse">
    <the-menu :menus="mainMenus" />
    <say-hello :text="'hello'" />
    <the-social-menu :menus="socialMenus" class="justify-between" />
  </nav>
</template>

<script>
// import vClickOutside from "click-outside-vue3";
// v-click-outside="onClickOutside"
// vuex
// import store from "../../store";
import { mapGetters } from "vuex";

// utils
import { mainMenus, socialMenus } from "../../static/menu";
import SayHello from "./say-hello.vue";
import TheMenu from "./the-menu.vue";
import TheSocialMenu from "./the-social-menu.vue";

export default {
  // directives: {
  //   clickOutside: vClickOutside.directive,
  // },
  name: "MenuCard",
  components: { TheMenu, TheSocialMenu, SayHello },
  data() {
    return {
      mainMenus,
      socialMenus,
    };
  },
  methods: {
    // onClickOutside() {
    //   store.dispatch("menu/hideMenu");
    // },
  },
  computed: {
    ...mapGetters({
      menuCollapse: "menu/menuCollapsed",
    }),
  },
};
</script>