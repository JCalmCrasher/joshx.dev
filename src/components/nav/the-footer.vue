<template>
  <footer class="pb-40 bg-primary space-y-10">
    <hr />
    
    <div
      class="
        flex
        md:flex-row md:justify-between md:space-y-0
        space-y-4
        flex-col section
      "
    >
      <div class="w-full">
        <span class="text-base">&copy; Joshua Osagie 2021 </span>
      </div>
      <div class="md:flex hidden footer-social-link">
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
  </footer>
</template>

<script>
import { socialMenus } from "../../static/menu";

export default {
  name: "TheFooter",
  data() {
    return {
      socials: socialMenus,
    };
  },
};
</script>

<style scoped>
.footer-social-link > a:nth-child(1),
.footer-social-link > a:nth-child(2) {
  @apply pr-20;
}
</style>