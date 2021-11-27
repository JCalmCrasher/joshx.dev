<template>
  <h1 class="font-mono lg:space-y-1">
    <span class="font-extralight">{{ hiMessage }}</span>
    <h1 class="font-normal">{{ name }}</h1>
  </h1>
</template>

<script>
export default {
  name: "Hi",
  props: {
    hiMessage: { type: String, required: true },
    name: { type: String, required: true },
  },
};
</script>

<style scoped>
h1 {
  @apply lg:text-5xl
  text-2xl
  font-extrabold;
}
</style>