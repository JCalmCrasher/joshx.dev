<template>
  <section id="limelight" class="py-10 bg-white">
    <!-- <h1 class="text-2xl mb-6">Works</h1> -->
    <div class="flex md:flex-row flex-col lg:space-x-44 md:space-x-24 space-x-0">
      <div class="space-y-4 w-full">
        <card
          v-for="(project, i) in projects"
          :key="i"
          :title="project.title"
          :logo="project.logo"
          :body="project.description"
          :bgColor="'bg-primary shadow-md'"
          class="lg:max-w-xl md:max-w-sm px-20"
        />
      </div>
      <about-me />
    </div>
  </section>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import Card from "./components/shared/card.vue";
export default {
  name: "Limelight",
  components: { Card, AboutMe },
  data: () => ({
    // contains my skills with lil description
    projects: [
      {
        title: "Frontend",
        logo: "</>",
        description:
          "I'm equipped with state-of-the-art tools to develop smooth and solid web apps with great User Experience",
        number: 10,
      },
      {
        title: "Backend",
        logo: "{}",
        description:
          "I'm probably not Tom Scott but I take great care in writing robust and well documented APIs that ease human life",
        number: 10,
      },
    ],
  }),
};
</script>

<style scoped>
.card {
  @apply flex
  flex-col
  p-3;
}

#limelight{
  @apply px-4;
}
</style>