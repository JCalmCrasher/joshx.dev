<template>
  <section id="hello">
    <div class="lil-desc">
      <badge :badge="occupationStuff" />
      <hi :hiMessage="`Hi, I'm`" :name="'Joshua Osagie'"/>
      <p
        class="text-sm text-justify leading-loose text-primary"
        v-html="occupationStuff.description"
      ></p>
    </div>
    <div>Image goes here</div>
  </section>
</template>

<script>
// utils
import { occupationStuff } from "../../static/occupation";

// components
import Badge from '../../components/shared/badge.vue';
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
  @apply flex md:flex-row flex-col justify-between;
}

.lil-desc {
  @apply space-y-6;
}
</style>