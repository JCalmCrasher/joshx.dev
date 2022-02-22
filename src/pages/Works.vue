<template>
  <section id="works">
    <h4 class="title text-secondary">/works</h4>
    <p class="text-center text-secondary text-xl">Some selected projects</p>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:mx-32">
      <card v-for="(work, i) in works" :key="i" :title="work.stacks">
        <template v-slot:header-info>
          <a target="_blank" :href="work.url.live" class="font-medium">
            {{ work.project }}</a
          >
        </template>
        <div class="text-darkText">
          <p class="pb-10">
            {{ work.description }}
          </p>
          <a
            :href="work.url.sourceCode"
            target="_blank"
            class="text-xs font-mono"
            v-if="work.url.sourceCode"
          >
            view source code <font-awesome-icon icon="external-link-alt" />
          </a>
          <span v-else><font-awesome-icon icon="eye-slash"/></span>
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
  @apply /* lg:transform
  lg:hover:scale-110
  lg:transition-transform
  lg:duration-300 */
  bg-primary
  rounded-md;
}
</style>

<style>
footer {
  @apply pt-10;
}
</style>
