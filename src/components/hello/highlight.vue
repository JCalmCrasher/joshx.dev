<template>
  <div class="flex md:flex-row flex-col md:space-x-2">
    <h1>{{ number }}</h1>
    <span>{{ highlight }}</span>
  </div>
</template>

<script>
export default {
  name: "Highlight",
  props: {
    number: { type: String, required: true },
    highlight: { type: String, required: true }
  },
};
</script>

<style scoped>
h1 {
  @apply text-6xl font-bold;
}

span {
  @apply w-10 text-darkText md:text-sm text-xs font-normal mt-4;
}
</style>