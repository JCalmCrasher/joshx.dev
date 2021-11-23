<template>
  <div>
    <the-header />
    <main class="md:mt-24 mt-16 lg:ml-6 md:ml-4">
      <hello />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/nav/the-header.vue";
import Hello from "./pages/hello/Hello.vue";
export default {
  components: { TheHeader, Hello },
  name: "App",
};
</script>
