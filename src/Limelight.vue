<template>
  <section id="work" class="section py-4">
    <!-- <h1 class="text-2xl mb-6">Works</h1> -->
    <div class="space-y-4">
      <card
        v-for="(project, i) in projects"
        :key="i"
        :title="project.title"
        :logo="project.logo"
        :body="project.description"
      />
    </div>
  </section>
</template>

<script>
import Card from "./components/shared/card.vue";
export default {
  name: "Limelight",
  components: { Card },
  data: () => ({
    // contains my skills with lil description
    projects: [
      {
        title: "Frontend",
        logo: "</>",
        description:
          "Equipped with state-of-the-art tools to develop smooth and solid web apps with great User Experience",
        number: 10,
      },
      {
        title: "Backend",
        logo: '{}',
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
  @apply
  flex
  flex-col
  bg-secondary
  p-3 shadow-md;
}
</style>