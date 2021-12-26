<template>
  <section class="section" id="works">
    <h4 class="uppercase">works</h4>
    <div id="work-stack">
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
  name: "Works",
  components: { card },
  data() {
    return {
      works,
    };
  },
};
</script>

<style scoped>
#works {
  @apply bg-secondary px-10 md:py-40 py-10 space-y-4;
}

#work-stack {
  @apply grid lg:grid-cols-3 md:grid-rows-1 gap-4 grid-rows-1;
}

#work-stack > .card{
  @apply transform hover:scale-110 transition-transform duration-300 bg-primary cursor-pointer;
}
</style>