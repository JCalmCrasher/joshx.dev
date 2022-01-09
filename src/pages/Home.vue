<template>
  <hello />
  <limelight />
  <about-me />
  <what-i-do />
</template>

<script>
import Hello from "../components/Hello.vue";
import Limelight from "../components/Limelight.vue";
import AboutMe from "../components/AboutMe.vue";
import WhatIDo from "../components/WhatIDo.vue";

export default {
  name: "Home",
  components: {
    Hello,
    Limelight,
    AboutMe,
    WhatIDo,
  },
};
</script>