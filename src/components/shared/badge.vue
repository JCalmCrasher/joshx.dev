<template>
  <span class="badge" :aria-label="badge.label" :class="[color, bgColor]">{{
    badge.label
  }}</span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    badge: { type: Object, required: true },
    color: { type: String, default: "text-black" },
    bgColor: { type: String, default: "bg-info" },
  },
};
</script>

<style>
.badge {
  @apply text-sm px-2 py-1 rounded font-extrabold;
}
</style>