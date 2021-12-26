<template>
  <h1 class="font-mono lg:space-y-1">
    <span class="font-extralight">{{ hiMessage }}</span>
    <h1 class="font-bold text-info text-5xl">{{ name }}<span class="w-2 h-2 bg-white rounded-full inline-block"></span></h1>
  </h1>
</template>

<script>
export default {
  name: "Hi",
  props: {
    hiMessage: { type: String },
    name: { type: String, required: true },
  },
};
</script>