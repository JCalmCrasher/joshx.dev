<template>
  <section id="hello">
    <div class="lil-desc section lg:mt-44 md:mt-48 mt-14">
      <div class="space-y-6">
        <div class="space-x-2">
          <badge :badge="{ label: 'jollyboi' }" :extraClasses="'badge'" />
          <badge :badge="{ label: 'life no hard' }" :extraClasses="'badge'" />
        </div>
        <hi :name="'Software<br /> Engineer'" />
        <article
          id="brief-desc"
          aria-label="Brief Description about Joshua"
          v-html="occupation.description"
        ></article>
        <div
          class="mt-10 flex justify-between"
          aria-describedby="Joshua's highlights"
        >
          <highlight
            v-for="highlight in highlights"
            :key="highlight.slug"
            :number="highlight.label"
            :highlight="$filters.capitalize(highlight.text)"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-secondary md:bg-none md:mt-44 md:py-0 py-10 flex justify-center"
    >
      <figure id="photo">
        <div aria-label="Photo of Joshua" id="handsome"></div>
      </figure>
    </div>
  </section>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#fff"
      fill-opacity="1"
      d="M0,128L40,117.3C80,107,160,85,240,96C320,107,400,149,480,170.7C560,192,640,192,720,176C800,160,880,128,960,133.3C1040,139,1120,181,1200,186.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
</template>

<script>
// static
import { occupation } from "../static/highlights";
import { highlights } from "../static/highlights";

// components
import Badge from "./shared/badge.vue";
import Hi from "./hello/hi.vue";
import Highlight from "./hello/highlight.vue";

export default {
  name: "Hello",
  components: { Hi, Badge, Highlight },
  data() {
    return {
      occupation,
      highlights,
    };
  },
};
</script>

<style scoped>
#brief-desc {
  line-height: var(--jx-lh) !important;
  @apply lg:text-sm
  text-xs
  text-justify
 text-darkText
 max-w-sm;
}
#hello {
  @apply flex
  md:flex-row
  flex-col
  /* space-y-10 */
  justify-between;
}

.lil-desc {
  @apply lg:max-w-3xl
  md:max-w-md;
}

#handsome {
  width: inherit;
  height: inherit;
  background-image: url("../assets/joshx.jpeg");
  @apply bg-info bg-cover;
}

#photo {
  @apply lg:w-52
  lg:h-52
  md:w-40
  md:h-40
  w-52
  h-52
bg-white
  lg:absolute
  lg:right-72 md:absolute md:right-40;
}

.badge {
  @apply bg-secondary text-white border-info border-2;
}
</style>
