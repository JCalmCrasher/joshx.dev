<template>
  <section id="about" class="section" aria-describedby="About Joshua">
    <article>
      <h1 class="lg:max-w-sm pb-2" v-html="about.headline">
      </h1>
      <p class="max-w-sm text-base tracking-wide" style="line-height: var(--jx-lh) !important;">
        {{ about.story }}
      </p>
    </article>
  </section>
</template>

<script>
import { about } from "../static/highlights";

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
  @apply text-white bg-secondary;
}
</style>