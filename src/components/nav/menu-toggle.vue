<template>
  <!-- <button class="flex" id="toggle-container" tabindex="2" @click.stop="showMenu"> -->
    <div
      class="t-menu"
      :class="menuCollapse ? 'm-s' : ''"
      id="toggle-menu"
      aria-label="Toggle menu"
      :aria-expanded="menuCollapse"
      @click.stop="showMenu"
    >
      <div class="bar1" :class="menuCollapse?'bg-primary':'bg-white'"></div>
      <div class="bar2" :class="menuCollapse?'bg-primary':'bg-white'"></div>
    </div>
    <menu-card v-if="menuCollapse" />
  <!-- </button> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MenuCard from "./menu-card.vue";
export default {
  components: { MenuCard },
  name: "MenuToggle",
  methods: {
    ...mapActions({
      showMenu: "menu/showMenu",
    }),
  },
  computed: {
    ...mapGetters({
      menuCollapse: "menu/menuCollapsed",
    }),
  },
};
</script>

<style>
#toggle-container{
  @apply text-left;
}
.t-menu {
  right: 8%;
  padding-top: 10px;
  border-radius: 0 4px 4px 0;
  transition: all 0.1s ease;

  @apply cursor-pointer absolute top-8 inline-block opacity-100 space-y-2 z-20;
}
.bar1,
.bar2 {
  width: 30px;
  height: 2px;
  margin: 6px 0;
  transition: 0.5s;
}
.m-s .bar1 {
  -webkit-transform: rotate(-45deg) translate(-7px, 5px);
  transform: rotate(-45deg) translate(-7px, 5px);
}
.m-s .bar2 {
  -webkit-transform: rotate(45deg) translate(-1px, -1px);
  transform: rotate(45deg) translate(-1px, -1px);
  width: 30px;
}

.bar2 {
  width: 20px;
  transform: translate(10px);
}
</style>