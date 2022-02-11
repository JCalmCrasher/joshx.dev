<template>
  <ul class="menu" aria-label="Main menu">
    <li @click="showMenu">
      <router-link to="/" class="capitalize" v-show="$route.path !== '/'"
        >home</router-link
      >
    </li>
    <li
      v-for="(menu, i) in menus"
      :key="i"
      :disabled="menu.disabled"
      @click="showMenu"
    >
      <router-link :to="menu.url" class="capitalize">{{
        menu.name
      }}</router-link>
    </li>
    <li>
      <!-- https://bit.ly/3oCF8B2 -->
      <a
        href="../../Joshua-Osagie--Resume.pdf"
        class="capitalize"
        target="_blank"
        rel="noreferrer noopener"
        >my résumé</a
      >
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheMenu",
  props: { menus: { type: Array, required: true } },
  methods: {
    ...mapActions({
      showMenu: "menu/showMenu",
    }),
  },
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
