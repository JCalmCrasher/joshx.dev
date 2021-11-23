<template>
  <section id="hello">
    <div class="lil-desc">
      <occupation-badge :occupation="occupationStuff" />
      <h1 class="font-mono lg:space-y-1">
        <span class="font-extralight">Hi! I'm</span>
        <h1 class="font-normal">Joshua Osagie.</h1>
      </h1>
      <p class="text-sm text-justify leading-loose text-gray-primary" v-html="occupationStuff.description"></p>
    </div>
    <div>Image goes here</div>
  </section>
</template>

<script>
// utils
import { occupationStuff } from "../../static/occupation";

// components
import OccupationBadge from "./components/occupation-badge.vue";
export default {
  name: "Hello",
  components: { OccupationBadge },
  data() {
    return {
      occupationStuff,
    };
  },
};
</script>

<style>
#hello {
  @apply flex md:flex-row flex-col justify-between;
}

.lil-desc{
  @apply space-y-6;
}

.lil-desc h1 {
  @apply lg:text-5xl
  text-2xl
  font-extrabold;
}
</style>