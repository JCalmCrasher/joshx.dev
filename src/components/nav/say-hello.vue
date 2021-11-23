<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <a :href="'mailto:' + email" aria-label="Email Joshua">{{ email }}</a>
  </div>
</template>

<script>
export default {
  name: "SayHello",
  props: {
    text: { type: String, required: true },
    email: { type: String, default: "joshua.osagie01@gmail.com" },
  },
};
</script>

<style scoped>
.hello > h1 {
  letter-spacing: 0.8em;
  @apply lg:text-base md:text-xs font-medium;
}
.hello > h1 + a {
  @apply font-medium lg:text-sm md:text-xs text-sm md:tracking-wider tracking-widest;
}
</style>