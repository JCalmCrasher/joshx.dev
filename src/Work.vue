<template>
  <section id="work" class="section py-4 ">
    <h1>Works</h1>
    <card />
  </section>
</template>

<script>
import Card from "./components/shared/card.vue";
export default {
  name: "Work",
  components: { Card },
};
</script>

<style scoped>
.card {
  @apply flex flex-col md:hidden bg-secondary p-3;
}
</style>