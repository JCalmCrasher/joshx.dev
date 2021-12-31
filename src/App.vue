<template>
  <div>
    <the-header />
    <main>
      <hello />
      <limelight />
      <about-me />
      <works />
      <the-footer />
    </main>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
import Limelight from "./Limelight.vue";
import Works from "./Works.vue";

import TheFooter from "./components/nav/the-footer.vue";
import TheHeader from "./components/nav/the-header.vue";
import AboutMe from "./AboutMe.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    Hello,
    Limelight,
    Works,
    TheFooter,
    AboutMe,
  },
};
</script>
