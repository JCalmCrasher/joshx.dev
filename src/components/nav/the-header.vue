<template>
  <header>
    <Logo />
    <the-menu />
    <div>social links</div>
  </header>
</template>

<script>
import Logo from "./logo.vue";
import TheMenu from "./the-menu.vue";
export default {
  components: { Logo, TheMenu },
  name: "TheHeader",
};
</script>

<style scoped>
header {
  @apply flex justify-between;
}
</style>