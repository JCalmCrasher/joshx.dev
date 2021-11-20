<template>
  <ul class="menu" aria-label="Main menu">
    <li v-for="(menu, i) in menus" :key="i">
      <a href="#">{{ menu.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheMenu",
  props: { menus: { type: Array, required: true } },
};
</script>