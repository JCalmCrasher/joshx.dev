<template>
  <section
    id="limelight"
    class="py-10 bg-white"
    aria-describedby="Joshua's Limelight"
  >
    <!-- <h1 class="text-2xl mb-6">Works</h1> -->
    <div
      class="flex md:flex-row flex-col lg:space-x-44 md:space-x-24 space-x-0"
    >
      <div class="space-y-4 w-full">
        <card
          v-for="(project, i) in projects"
          :key="i"
          :title="project.title"
          :logo="project.logo"
          :extraClasses="`${limeLightClasses}`"
        >
          <p>
            {{ project.description }}
          </p>
        </card>
      </div>
      <about-me />
    </div>
  </section>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import Card from "./components/shared/card.vue";

import { projects } from "./static/highlights";

export default {
  name: "Limelight",
  components: { Card, AboutMe },
  data: () => ({
    // contains my skills with lil description
    projects,
    limeLightClasses: "lg:max-w-xl md:max-w-sm bg-primary shadow-md rounded-md",
  }),
};
</script>

<style scoped>
.card {
  @apply flex
  flex-col;
}

#limelight {
  @apply md:px-10 px-4;
}
</style>