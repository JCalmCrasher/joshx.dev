<template>
  <div class="hello">
    <h1>SAY HELLO</h1>
    <a href="mailto:joshua.osagie01@gmail.com" aria-label="Email Joshua">joshua.osagie01@gmail.com</a>
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
  letter-spacing: 0.8rem;
}
.hello a {
  @apply text-sm tracking-widest;
}
</style>