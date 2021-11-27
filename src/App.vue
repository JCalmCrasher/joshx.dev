<template>
  <div>
    <the-header />
    <main class="md:mt-24 mt-16 lg:ml-6 md:ml-4">
      <hello />
      <work />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/nav/the-header.vue";
import Hello from "./Hello.vue";
import Work from "./Work.vue";
export default {
  components: { TheHeader, Hello, Work },
  name: "App",
};
</script>
