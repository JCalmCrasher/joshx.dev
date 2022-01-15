<template>
  <section id="shelf">
    <h4 class="title">/shelf</h4>
    <div class="grid grid-rows-1 space-y-4 lg:mx-32 md:mx-20">
      <card
        v-for="(shelf, i) in SHELVES"
        :key="i"
        :title="[shelf.datePublished]"
      >
        <template v-slot:header-info>
          <a :href="shelf.url" class="font-bold" title="Pubished on Hashnode">
            <h4>{{ shelf.title }}</h4></a
          >
        </template>
        <div class="text-darkText">
          <p class="pb-10 max-w-6xl w-full">
            {{ shelf.shortDescription }}
          </p>
          <a :href="shelf.url" target="_blank" class="text-xs font-mono">
            hashnode <font-awesome-icon icon="external-link-alt" />
          </a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import card from "../components/shared/card.vue";

import SHELVES from "../static/shelf";

export default {
  name: "Shelf",
  components: { card },
  data() {
    return {
      SHELVES,
    };
  },
};
</script>

<style scoped>.card {
  @apply transform
  duration-300
  bg-secondary
  cursor-pointer
  rounded-md;
}
</style>