<template>
  <span class="badge" :aria-label="badge.label" :class="extraClasses">{{
    badge.label
  }}</span>
</template>

<script>
export default {
  name: "BadgeArea",
  props: {
    badge: { type: Object, required: true },
    extraClasses: { type: String, default: "bg-secondary text-black" },
  },
};
</script>

<style>
.badge {
  @apply text-sm px-2 py-1 rounded font-mono;
}
</style>