<template>
  <section id="hello">
    <div class="lil-desc section md:pb-24 pb-10 lg:mt-44 md:mt-48 mt-14">
      <div class="md:ml-10 space-y-6">
        <div class="space-x-2">
          <badge :badge="{ label: 'jollyboi' }" :extraClasses="'badge'" />
          <badge :badge="{ label: 'life no hard' }" :extraClasses="'badge'" />
        </div>
        <hi :name="'Frontend Developer'" />
        <article
          id="brief-desc"
          aria-label="Brief Description about Joshua"
          v-html="occupation.description"
        ></article>
      </div>
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
    <div
      class="
        bg-secondary
        md:bg-none
        md:mt-44 md:py-0
        py-10
        flex
        justify-center
      "
    >
      <figure id="photo">
        <div aria-label="Photo of Joshua" id="handsome"></div>
      </figure>
    </div>
  </section>
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
 text-darkText;
}
#hello {
  @apply flex
  md:flex-row
  flex-col
  /* space-y-10 */
  justify-between;
}

.lil-desc {
  @apply
  lg:max-w-3xl
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