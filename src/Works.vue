<template>
  <section class="section p-10" id="works">
    <h4 class="uppercase">works</h4>
    <div class="grid grid-cols-3 gap-4">
      <card
        v-for="(card, i) in [1, 1, 1, 1, 1, 1]"
        :key="i"
        title="number-js-formatter"
        :bgColor="'bg-primary'"
      />
    </div>
  </section>
</template>

<script>
import card from "./components/shared/card.vue";
export default {
  components: { card },
  name: "Works",
};
</script>

<style scoped>
#works {
  @apply bg-secondary;
}
</style>