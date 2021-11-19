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
  font-size: 1rem;
  @apply flex;
}
h1.logo > span:first-of-type {
  font-weight: 900;
}

h1.logo > span:nth-of-type(2) {
  font-weight: 200;
}
</style>