<template>
  <span id="occupation-badge" :aria-label="occupation.occupation">{{
    occupation.occupation
  }}</span>
</template>

<script>
export default {
  name: "OccupationBadge",
  props: { occupation: { type: String, required: true } },
};
</script>

<style>
#occupation-badge {
  @apply bg-info text-black text-xs px-2 py-1 rounded font-semibold;
}
</style>