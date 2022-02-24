<template>
  <section id="limelight" aria-describedby="Joshua's Limelight">
    <div class="inner-content section">
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#29282b"
        fill-opacity="1"
        d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,133.3C560,128,640,160,720,186.7C800,213,880,235,960,240C1040,245,1120,235,1200,224C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>

<script>
import { projects } from "../static/highlights";

export default {
  name: "LimeLight",
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
  @apply lg:max-w-sm md:max-w-xs md:text-sm;
}
</style>