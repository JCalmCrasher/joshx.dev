<template>
  <article class="md:pt-0 pt-4 w-full">
    <h1 class="lg:max-w-sm text-black pb-2">{{ about.headline }}</h1>
    <p class="text-secondary text-justifys">
      {{ about.story }}
    </p>
  </article>
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