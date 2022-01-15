<template>
  <div>
    <the-header />
    <main>
      <router-view></router-view>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./components/nav/the-footer.vue";
import TheHeader from "./components/nav/the-header.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
