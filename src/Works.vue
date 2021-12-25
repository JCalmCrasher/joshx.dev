<template>
  <section class="section" id="works">
    <h4 class="uppercase">works</h4>
    <div id="work-stack">
      <card
        v-for="(work, i) in works"
        :key="i"
        :title="work.stacks"
        :extraClasses="'bg-primary cursor-pointer'"
      >
        <template v-slot:header-info>
          <a :href="work.url.live" class="font-bold"> {{ work.project }}</a>
        </template>
        <div class="text-darkText">
          <p class="pb-4">
            {{ work.description }}
          </p>
          <a :href="work.url.sourceCode" target="_blank" class="text-xs"
            >source code</a
          >
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
  @apply bg-secondary p-10 space-y-4;
}

#work-stack{
  @apply grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-rows-1;
}
</style>