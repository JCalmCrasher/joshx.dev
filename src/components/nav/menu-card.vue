<template>
  <nav
    class="card"
    aria-label="Contact menu"
    v-click-away="onClickAway"
    v-if="menuCollapse"
  >
    <the-menu :menus="mainMenus" class="flex-col space-y-5 md:mt-12 mt-36" />
    <say-hello class="px-16" :text="'SAY HELLO'" />
    <the-social-menu :menus="socialMenus" class="justify-between" />
  </nav>
</template>

<script>
import { mixin as VueClickAway } from "vue3-click-away";
import { mapGetters } from "vuex";
import store from "../../store";
// utils
import { mainMenus, socialMenus } from "../../utils/menu";
import SayHello from "./say-hello.vue";

import TheMenu from "./the-menu.vue";
import TheSocialMenu from "./the-social-menu.vue";
export default {
  mixins: [VueClickAway],
  name: "MenuCard",
  components: { TheMenu, TheSocialMenu, SayHello },
  data() {
    return {
      mainMenus,
      socialMenus,
    };
  },
  methods: {
    onClickAway() {
      store.dispatch("menu/hideMenu");
    },
  },
  computed: {
    ...mapGetters({
      menuCollapse: "menu/menuCollapsed",
    }),
  },
};
</script>

<style scoped>
.card {
  @apply bg-secondary
  z-10 py-10
  flex
  flex-col
  fixed
  md:w-auto w-full
  md:h-auto h-full
  lg:top-9 md:top-9 top-0
  md:left-auto left-0
  lg:right-20 md:right-10 right-0
  md:space-y-12 space-y-44
  shadow-md rounded;
}
</style>