<template>
  <header role="navigation">
    <Logo class="md:mx-10 mx-4" />
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
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // unmounted() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  // handleScroll() {
  //   console.log("calling handleScroll");
  // },
};
</script>

<style scoped>
header {
  @apply
  flex
  w-full
  justify-between
  overflow-hidden
  py-10
  fixed
  bg-secondary z-40;
}
</style>