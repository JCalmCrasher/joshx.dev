<template>
  <section id="about" aria-describedby="About Joshua">
    <article class="section">
      <h1 class="lg:max-w-sm mb-4" v-html="about.headline"></h1>
      <div
        class="max-w-sm tracking-wide space-y-6"
        style="line-height: var(--jx-lh) !important"
        v-html="about.story"
      ></div>
    </article>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,128L40,117.3C80,107,160,85,240,96C320,107,400,149,480,170.7C560,192,640,192,720,176C800,160,880,128,960,133.3C1040,139,1120,181,1200,186.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
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