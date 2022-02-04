<template>
  <nav id="overlay" aria-label="Contact menu" v-if="menuCollapse">
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

<style scoped>
#overlay {
  font-weight: 300 !important;
  @apply bg-white text-secondary
  z-10 py-8 md:px-8 px-16
  flex
  flex-col
  fixed
  lg:w-72 
  md:w-64 w-full
  md:h-auto h-full
  lg:top-3 md:top-3 top-0
  md:left-auto left-0
  lg:right-16 md:right-8 right-0
  md:space-y-12 space-y-28
  shadow-md rounded;
}
</style>
