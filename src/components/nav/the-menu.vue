<template>
  <ul class="menu" aria-label="Main menu">
    <li v-for="(menu, i) in menus" :key="i">
      <a :href="menu.url">{{ menu.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheMenu",
  props: { menus: { type: Array, required: true } },
};
</script>

<style scoped>
.menu{
  @apply flex-col lg:space-y-5 md:space-y-2 space-y-5 md:mt-12 mt-24;
}
</style>