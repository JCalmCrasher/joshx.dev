<template>
  <section id="hello">
    <div class="lil-desc">
      <occupation-badge :occupation="occupationStuff" />
      <h1 class="leading-tight">
        <span class="font-extralight">Hi, I'm</span>
        <br />
        <h1 class="font-normal">Joshua Osagie.</h1>
      </h1>
    </div>
    <div>Image goes here</div>
  </section>
</template>

<script>
// utils
import { occupationStuff } from "../../utils/occupation";

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

#hello .lil-desc {
  @apply lg:text-5xl
  text-2xl
  font-extrabold
  space-y-6;
}
</style>