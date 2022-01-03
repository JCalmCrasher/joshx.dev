<template>
  <section id="limelight" class="section" aria-describedby="Joshua's Limelight">
    <div class="inner-content">
      <article>
        <div class="limelight-content">
          <h1>{{ projects[0].title }}</h1>
          <p>{{ projects[0].description }}</p>
        </div>
      </article>
      <article>
        <div class="limelight-content">
          <h1>{{ projects[1].title }}</h1>
          <p>{{ projects[1].description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { projects } from "../static/highlights";

export default {
  name: "Limelight",
  components: {},
  data: () => ({
    // contains my skills with lil description
    projects,
    limeLightClasses: "lg:max-w-xl md:max-w-sm text-primary rounded-md",
  }),
};
</script>

<style scoped>
.card {
  @apply flex
  flex-col;
}

#limelight {
  @apply bg-white text-secondary;
}

article {
  @apply flex;
}

article:nth-of-type(2) {
  @apply md:justify-end justify-start;
}

.limelight-content h1 {
  @apply pb-4;
}

.limelight-content p {
  line-height: var(--jx-lh) !important;
  @apply lg:max-w-sm md:max-w-xs md:text-sm;
}
</style>