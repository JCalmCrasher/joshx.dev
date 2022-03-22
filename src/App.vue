<template>
  <div class="cursor" v-if="windowWidth >= 812"></div>
  <div class="follower" v-if="windowWidth >= 812"></div>
  <div :style="windowWidth >= 812 ? 'cursor: none;' : 'cursor: auto;'">
    <the-header />
    <main className="mx-auto max-w-7xl">
      <router-view></router-view>
    </main>
    <the-footer />
  </div>
</template>

<script>
import gsap from "gsap";
import TheFooter from "./components/nav/the-footer.vue";
import TheHeader from "./components/nav/the-header.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    windowWidth() {
      return window.innerWidth;
    },
  },
  mounted() {
    if (this.windowWidth >= 812) {
      gsap.set(".follower", { xPercent: -50, yPercent: -50 });
      gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
      var follow = document.querySelector(".follower");
      var cur = document.querySelector(".cursor");
      window.addEventListener("mousemove", (e) => {
        gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
        gsap.to(follow, 0.5, { x: e.clientX, y: e.clientY });
      });
      gsap.set(".follower", { xPercent: -50, yPercent: -50 });
      gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
    }
  },
};
</script>

<style>
body {
  background-color: black;
}
.cursor {
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #70f9a8;
  z-index: 2000;
  user-select: none;
  pointer-events: none;
}
.follower {
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 80px;
  height: 80px;
  background-color: transparent;
  z-index: 2000;
  border-radius: 50%;
  border: 1px solid #70f9a8;
  opacity: 0.7;
  user-select: none;
  pointer-events: none;
}
</style>
