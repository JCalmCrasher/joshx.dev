<template>
  <div>
    <the-header />
    <main class="md:mt-24 mt-16 lg:ml-6 md:ml-4">
      <hello />
      <limelight />
      <works />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/nav/the-header.vue";
import Hello from "./Hello.vue";
import Limelight from "./Limelight.vue";
import Works from "./Works.vue";

export default {
  name: "App",
  components: { TheHeader, Hello, Limelight, Works },
};
</script>
