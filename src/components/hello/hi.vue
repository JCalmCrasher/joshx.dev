<template>
  <div class="font-mono lg:space-y-1">
    <h1 class="font-bold text-info lg:text-5xl md:text-4xl text-5xl">
      <span v-html="name"> </span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Hi",
  props: {
    name: { type: String, required: true },
  },
};
</script>
