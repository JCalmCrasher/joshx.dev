<template>
  <span class="badge" :aria-label="badge.label" :class="extraClasses">{{
    badge.label
  }}</span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    badge: { type: Object, required: true },
    extraClasses: { type: String, default: "bg-secondary text-black" },
  },
};
</script>

<style>
.badge {
  @apply text-sm px-2 py-1 rounded font-bold font-mono;
}
</style>