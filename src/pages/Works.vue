<template>
  <section id="works">
    <h4 class="title text-secondary">/works</h4>
    <p class="text-center text-secondary text-xl">Some selected projects</p>
    <div class="grid grid-rows-1 space-y-4 md:mx-32">
      <card v-for="(work, i) in works" :key="i" :title="work.stacks">
        <template v-slot:header-info>
          <a :href="work.url.live" class="font-medium"> {{ work.project }}</a>
        </template>
        <div class="text-darkText">
          <p class="pb-10">
            {{ work.description }}
          </p>
          <a
            :href="work.url.sourceCode"
            target="_blank"
            class="text-xs font-mono"
          >
            view source code <font-awesome-icon icon="external-link-alt" />
          </a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import card from "../components/shared/card.vue";

import { works } from "../static/highlights";
export default {
  name: "Works",
  components: { card },
  data() {
    return {
      works,
    };
  },
  title: "Work - Joshua Osagie",
};
</script>

<style scoped>
.card {
  @apply
  lg:transform
  lg:hover:scale-110
  lg:transition-transform
  lg:duration-300
  bg-primary
  rounded-md;
}
</style>