<template>
  <section class="section" id="shelf">
    <h4 class="uppercase">shelf</h4>
    <div class="card-wrapper">
      <card
        v-for="(work, i) in works"
        :key="i"
        :title="work.stacks"
      >
        <template v-slot:header-info>
          <a :href="work.url.live" class="font-bold"> {{ work.project }}</a>
        </template>
        <div class="text-darkText ">
          <p class="pb-10">
            {{ work.description }}
          </p>
          <a :href="work.url.sourceCode" target="_blank" class="text-xs font-mono">
            view source code <font-awesome-icon icon="external-link-alt" />
          </a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import card from "./components/shared/card.vue";

import { works } from "./static/highlights";
export default {
  name: "Shelf",
  components: { card },
  data() {
    return {
      works,
    };
  },
};
</script>

<style scoped>
#shelf {
  @apply bg-primary px-10 md:py-40 py-10 space-y-4;
}

.card{
  @apply transform hover:scale-110 transition-transform duration-300 bg-secondary cursor-pointer;
}
</style>