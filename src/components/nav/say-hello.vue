<template>
  <div class="hello">
    <h1 class="uppercase">{{ text }}</h1>
    <a :href="'mailto:' + email" aria-label="Email Joshua" title="Say Hi to Joshua">{{ email }}</a>
  </div>
</template>

<script>
export default {
  name: "SayHello",
  props: {
    text: { type: String, required: true },
    email: { type: String, default: "joshx.dev@gmail.com" },
  },
};
</script>

<style>
.hello > h1 {
  letter-spacing: 0.8em;
  @apply lg:text-base md:text-xs font-light;
}
.hello > h1 + a {
  @apply lg:text-sm md:text-xs text-sm md:tracking-wider tracking-widest;
}
</style>