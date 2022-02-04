<template>
  <ul class="menu" aria-label="Main menu">
    <li>
      <router-link to="/" class="capitalize" v-show="$route.path !== '/'"
        >home</router-link
      >
    </li>
    <li v-for="(menu, i) in menus" :key="i" :disabled="menu.disabled">
      <router-link :to="menu.url" class="capitalize">{{
        menu.name
      }}</router-link>
    </li>
    <li>
      <a
        href="https://bit.ly/3J1SnTv"
        class="capitalize"
        target="_blank"
        rel="noreferrer noopener"
        >my résumé</a
      >
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
.menu {
  @apply flex-col
  lg:space-y-5
  md:space-y-2
  space-y-5
  md:mt-12
  mt-24;
}
</style>
