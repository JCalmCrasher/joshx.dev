<template>
  <header role="navigation px-10">
    <Logo />
    <menu-toggle />
  </header>
</template>

<script>
// components
import Logo from "./logo.vue";
import MenuToggle from "./menu-toggle.vue";
export default {
  name: "TheHeader",
  components: { Logo, MenuToggle },
};
</script>

<style scoped>
header {
  @apply flex w-full justify-between;
}
</style>