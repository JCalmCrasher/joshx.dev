<template>
  <section id="hello">
    <div class="lil-desc section px-10 md:pb-10">
      <div class="md:ml-10 space-y-6">
        <badge :badge="occupationStuff" />
        <hi :hiMessage="`Hi, I'm`" :name="'Joshua Osagie'" />
        <article
          id="brief-desc"
          aria-label="Brief Description on Joshua"
          v-html="occupationStuff.description"
        ></article>
      </div>
      <div class="mt-10 flex justify-between" aria-describedby="Joshua's highlights">
        <highlight
          v-for="highlight in highlights"
          :key="highlight.slug"
          :number="highlight.label"
          :highlight="fToUpperCase(highlight.text)"
        />
      </div>
    </div>
    <div class="bg-secondary md:bg-none section py-10 flex justify-center">
      <figure id="photo">
        <div aria-label="Photo of Joshua" class="handsome"></div>
      </figure>
    </div>
  </section>
</template>

<script>
// static
import { occupationStuff } from "./static/occupation";
import highlights from "./static/highlights";

// components
import Badge from "./components/shared/badge.vue";
import Hi from "./components/hello/hi.vue";
import Highlight from "./components/hello/highlight.vue";
import { formatTextToUpperCase } from "./utils/formatText";

export default {
  name: "Hello",
  components: { Hi, Badge, Highlight },
  data() {
    return {
      occupationStuff,
      highlights,
    };
  },
  methods: {
    fToUpperCase: (text) => formatTextToUpperCase(text),
  },
};
</script>

<style>
#brief-desc{
  @apply
  lg:text-sm
  text-xs
  text-justify
  leading-loose text-darkText;
}
#hello {
  @apply flex
  md:flex-row
  flex-col
  md:space-y-0
  space-y-10
  justify-between;
}

.lil-desc {
  @apply lg:max-w-xl md:max-w-sm;
}

.handsome {
  width: inherit;
  height: inherit;
  background-image: url("./assets/joshx.jpeg");
  @apply bg-white bg-cover;
}

#photo {
  @apply w-36
  h-36
bg-white
  lg:fixed
  lg:right-1/3 md:fixed md:right-60;
}
</style>