<template>
  <div>
    <the-header />
    <main class="md:mt-24 mt-16">
      <hello />
      <limelight />
      <works />
      <the-footer />
    </main>
  </div>
</template>

<script>
import TheFooter from "./components/nav/the-footer.vue";
import TheHeader from "./components/nav/the-header.vue";
import Hello from "./Hello.vue";
import Limelight from "./Limelight.vue";
import Works from "./Works.vue";

export default {
  name: "App",
  components: { TheHeader, Hello, Limelight, Works, TheFooter },
};
</script>
