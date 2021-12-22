<template>
  <div class="card" :class="extraClasses">
    <div class="flex justify-between space-y-1">
      <div class="flex flex-col space-y-1">
        <h4 class="text-sm font-extrabold tracking-widest">{{ title }}</h4>
        <!-- <span class="text-sm font-extrabold">{{ title }}</span> -->
        <slot name="header-info"></slot>
      </div>
      <div class="font-mono font-extrabold text-info">{{ logo }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    // TODO: use enum for extraClasses
    extraClasses: { type: String },
    title: { required: true },
    logo: { type: String },
  },
};
</script>

<style scoped>
.card {
  @apply p-6;
}
.card h1:first-of-type {
  @apply text-lg;
}

.card p:first-of-type {
  @apply text-darkText;
}

:slotted(p) {
  @apply text-sm leading-6;
}
</style>