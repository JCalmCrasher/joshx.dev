<template>
  <header role="navigation">
    <Logo />
    <menu-toggle />
  </header>
</template>

<script>
// utils
import { mainMenus, socialMenus } from "../../utils/menu";

// components
import Logo from "./logo.vue";
import MenuToggle from "./menu-toggle.vue";
export default {
  components: { Logo, MenuToggle },
  name: "TheHeader",
  data() {
    return {
      isMenuShown: false,
      mainMenus,
      socialMenus,
    };
  },
  methods: {},
};
</script>

<style scoped>
header {
  @apply flex w-full justify-between;
}
</style>