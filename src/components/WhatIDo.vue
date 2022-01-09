<template>
  <section class="section bg-white text-secondary" id="stuff-i-do">
    <div class="content">
      <card
        class="bg-secondary text-white shadow-md rounded-sm"
        v-for="(stuff, i) in stuffIDo"
        :key="i"
      >
        <template v-slot:header-info>
          <h1>{{ stuff.title }}</h1>
        </template>
        <div>
          <p v-html="stuff.description"></p>
          <button class="border border-white"><a :href="stuff.actionURL" class="uppercase">{{ stuff.actionText }}</a></button>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import { stuffIDo } from "../static/highlights";
import card from "./shared/card.vue";

export default {
  name: "StuffIDo",
  components: { card },
  data() {
    return {
      stuffIDo,
    };
  },
};
</script>

<style scoped>
.content {
  @apply flex lg:flex-row flex-col justify-between lg:space-x-1 lg:space-y-0 space-y-1;
}

.content > .card {
  @apply w-full;
}
</style>