<template>
  <hello />
  <limelight />
  <about-me />
</template>

<script>
import Hello from "../components/Hello.vue";
import Limelight from "../components/Limelight.vue";
import AboutMe from "../components/AboutMe.vue";

export default {
  name: "Home",
  components: {
    Hello,
    Limelight,
    AboutMe,
  },
};
</script>