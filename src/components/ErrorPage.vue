<template>
  <div class="flex justify-center">
    <h5 class="text-secondary">{{ text }}</h5>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: { text: { type: String, default: "error" } },
};
</script>

<style></style>
