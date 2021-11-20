<template>
  <ul class="menu" aria-label="Social menu">
    <li v-for="(menu, i) in menus" :key="i">
      <a :href="menu.link" target="_blank" rel="noreferrer noopener" :aria-label="menu.ariaLabel" :title="menu.name">{{ menu.shortName }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheSocilaMenu",
  props: { menus: { type: Array, required: true } },
};
</script>