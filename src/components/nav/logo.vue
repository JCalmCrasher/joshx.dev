<template>
  <a
    href="/"
    aria-label="Logo, go to homepage."
    tabindex="1"
  >
    <h1 class="md:text-white logo" :class="menuCollapse ? 'text-primary' : 'text-white'" aria-label="Joshua Osagie">
      <span>Joshua </span>
      <span>Osagie</span>
    </h1>
  </a>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Logo",
  computed: {
    ...mapGetters({
      menuCollapse: "menu/menuCollapsed",
    }),
  },
};
</script>

<style>
h1.logo {
  @apply flex text-xl z-20 relative;
}
h1.logo > span:first-of-type {
  @apply font-medium;
}

h1.logo > span:nth-of-type(2) {
  @apply font-extralight;
}
</style>