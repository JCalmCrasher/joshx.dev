<template>
  <div id="lil-desc">
    <occupation-badge :occupation="occupationStuff" />
    <h1 class="leading-tight">
      Talk is Cheap.
      <br />
      Show me the <span style="font-family: monospace">{{'<code/>'}}</span>
    </h1>
  </div>
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
#lil-desc {
  @apply space-y-6 lg:text-5xl text-2xl font-extrabold;
}
</style>