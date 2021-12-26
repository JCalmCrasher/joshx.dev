<template>
  <footer class="bg-primary px-10 py-20 space-y-20">
    <div>
      <div
        class="
          flex
          md:flex-row md:justify-between md:space-y-0
          space-y-4
          flex-col
        "
      >
        <logo />
        <span class="text-darkText">&copy; 2021. All Rights Reserved </span>
        <div class="flex justify-between space-x-2 md:block">
          <a
            :href="social.link"
            target="_blank"
            rel="noreferrer noopener"
            v-for="(social, i) in socials"
            :key="i"
            :aria-label="social.name"
          >
            {{ social.shortName }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "./logo.vue";
import { socialMenus } from "../../static/menu";
export default {
  components: { logo },
  name: "TheFooter",
  data() {
    return {
      socials: socialMenus,
    };
  },
};
</script>

<style>
</style>