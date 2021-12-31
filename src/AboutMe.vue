<template>
  <section id="about" aria-describedby="About Joshua">
    <article class="md:pt-0 pt-4 w-full">
      <h1 class="lg:max-w-sm pb-2" v-html="about.headline">
      </h1>
      <p class="max-w-sm text-base tracking-wide" style="line-height: var(--jx-lh) !important;">
        {{ about.story }}
      </p>
    </article>
  </section>
</template>

<script>
import { about } from "./static/highlights";

export default {
  name: "AboutMe",
  data() {
    return {
      about,
    };
  },
};
</script>

<style scoped>
#about {
  @apply md:px-20 px-4 md:py-40 py-1 text-white bg-secondary;
}
</style>