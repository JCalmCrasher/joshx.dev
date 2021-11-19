<template>
  <div @click="toggleMenu()" class="t-menu" id="toggle-menu">
    <div class="bar1" :style="{ backgroundColor: hamburgerColor }"></div>
    <div class="bar2" :style="{ backgroundColor: hamburgerColor }"></div>
  </div>
</template>

<script>
export default {
  name: "MenuToggle",
  data() {
    return {
      isMenuShown: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown;
    },
  },
};
</script>

<style>
.t-menu {
  top: 7px;
  right: 50px;
  padding-top: 10px;
  border-radius: 0 4px 4px 0;
  transition: all 0.3s ease;
  @apply cursor-pointer absolute inline-block opacity-100 space-y-2;
}
.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.5s;
}
.m-s .bar1 {
  -webkit-transform: rotate(-45deg) translate(-7px, 5px);
  transform: rotate(-45deg) translate(-7px, 5px);
}
.m-s .bar2 {
  opacity: 0;
}
.m-s .bar3 {
  -webkit-transform: rotate(45deg) translate(-5px, -5px);
  transform: rotate(45deg) translate(-5px, -5px);
}

.bar2 {
  width: 20px !important;
  transform: translate(10px);
}
</style>