<template>
  <div class="card" :class="bgColor">
    <div class="flex justify-between space-y-1">
      <h1>{{ title }}</h1>
      <div class="font-mono font-extrabold text-info">{{ logo }}</div>
    </div>
    <p class="mb-3">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    bgColor: { type: String },
    title: { type: String, required: true },
    logo: { type: String },
    body: { type: String, required: true },
  },
};
</script>

<style scoped>
.card h1:first-of-type {
  @apply text-lg;
}

.card p:first-of-type {
  @apply text-darkText;
}
</style>