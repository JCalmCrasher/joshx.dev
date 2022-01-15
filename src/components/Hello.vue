<template>
  <section id="hello">
    <div class="lil-desc section md:pb-2j4 pb-10 lg:mt-44 md:mt-48 mt-14">
      <div class="md:ml-10 space-y-6">
        <div class="space-x-2">
          <badge :badge="{ label: 'jollyboi' }" :extraClasses="'badge'" />
          <badge :badge="{ label: 'life no hard' }" :extraClasses="'badge'" />
        </div>
        <hi :name="'Frontend<br /> Developer'" />
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
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,128L34.3,112C68.6,96,137,64,206,64C274.3,64,343,96,411,138.7C480,181,549,235,617,213.3C685.7,192,754,96,823,96C891.4,96,960,192,1029,197.3C1097.1,203,1166,117,1234,101.3C1302.9,85,1371,139,1406,165.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </svg>
  </div>
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
  filters: {},
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