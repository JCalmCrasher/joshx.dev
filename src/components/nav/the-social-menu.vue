<template>
  <ul class="menu" aria-label="Social Menus">
    <li v-for="(menu, i) in menus" :key="i">
      <a href="#" :aria-label="menu.ariaLabel">{{ menu.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheSocilaMenu",
  props: { menus: { type: Array, required: true } },
};
</script>