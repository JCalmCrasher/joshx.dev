<template>
  <footer class="bg-primary p-10 space-y-24">
    <div class="flex">
      <h1 class="max-w-xl text-3xl">Let's make something amazing together.</h1>
    </div>
    <div class="flex justify-between">
      <logo />
      <span class="text-darkText">&copy; 2021. All Rights Reserved </span>
      <div class="flex justify-between space-x-2">
        <a href="/">TW</a>
        <a href="/">GH</a>
        <a href="/">LN</a>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "./logo.vue";
export default {
  components: { logo },
  name: "TheFooter",
};
</script>

<style>
</style>