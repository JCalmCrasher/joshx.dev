<template>
  <section id="hello">
    <div class="lil-desc px-10 app-padding">
      <badge :badge="occupationStuff" />
      <hi :hiMessage="`Hi, I'm`" :name="'Joshua Osagie'" />
      <p
        class="lg:text-sm text-xs text-justify leading-loose"
        style="color: rgb(227, 219, 219)"
        v-html="occupationStuff.description"
      ></p>
    </div>
    <div class="bg-secondary md:bg-none app-padding py-10 flex justify-center">
      <figure id="photo">
        <div aria-label="Photo of Joshua" class="handsome"></div>
      </figure>
    </div>
  </section>
</template>

<script>
// utils
import { occupationStuff } from "../../static/occupation";

// components
import Badge from "../../components/shared/badge.vue";
import Hi from "./components/hi.vue";

export default {
  name: "Hello",
  components: { Hi, Badge },
  data() {
    return {
      occupationStuff,
    };
  },
};
</script>

<style>
#hello {
  @apply flex md:flex-row flex-col md:space-y-0 space-y-2 justify-between;
}

.lil-desc {
  @apply space-y-6 lg:max-w-xl md:max-w-sm;
}

.handsome {
  width: inherit;
  height: inherit;
  background-image: url("../../assets/joshx.jpeg");
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