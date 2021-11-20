<template>
  <a href="/" aria-label="Logo, go to homepage.">
    <h1 class="logo" aria-label="Joshua Osagie">
      <span>Joshua </span>
      <span>Osagie</span>
    </h1>
  </a>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
h1.logo {
  @apply flex text-base z-20 relative;
}
h1.logo > span:first-of-type {
  @apply font-black;
}

h1.logo > span:nth-of-type(2) {
  @apply font-extralight;
}
</style>