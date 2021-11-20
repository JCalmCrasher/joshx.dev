<template>
  <div>
    <the-header />
    <main class="mt-24 lg:ml-20 md:ml-8">
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
