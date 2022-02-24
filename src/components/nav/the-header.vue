<template>
  <header role="navigation">
    <logo-icon class="md:mx-10 mx-4" />
    <menu-toggle />
  </header>
</template>

<script>
// components
import LogoIcon from "./logo.vue";
import MenuToggle from "./menu-toggle.vue";

export default {
  name: "TheHeader",
  components: { LogoIcon, MenuToggle },
};
</script>

<style scoped>
header {
  @apply
  flex
  w-full
  justify-between
  /* overflow-hidden */
  py-5
  md:fixed relative
  bg-secondary z-40;
}
</style>