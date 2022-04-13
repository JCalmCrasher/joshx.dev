<template>
  <section class="bg-white text-secondar" id="stuff-i-do">
    <div class="content section">
      <card-area
        class="bg-secondary text-white shadow-md rounded-md"
        v-for="(stuff, i) in stuffIDo"
        :key="i"
      >
        <template v-slot:header-info>
          <h3>{{ stuff.title }}</h3>
        </template>
        <div class="mt-5">
          <p v-html="stuff.description" class="mb-10 text-base"></p>
        </div>
        <a :href="stuff.actionURL">
          <button class="font-bold text-xs">
            {{ stuff.actionText }}
          </button>
        </a>
      </card-area>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#2d2e32"
        fill-opacity="1"
        d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,133.3C560,128,640,160,720,186.7C800,213,880,235,960,240C1040,245,1120,235,1200,224C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>

<script>
import { stuffIDo } from "../static/highlights";
import CardArea from "./shared/card.vue";

export default {
  name: "StuffIDo",
  components: { CardArea },
  data() {
    return {
      stuffIDo,
    };
  },
};
</script>

<style scoped>
.content {
  @apply flex
  lg:flex-row
  flex-col
  justify-between
  lg:space-x-1
  lg:space-y-0 space-y-1;
}

.content > .card {
  @apply w-full;
}

.content > .card button {
  @apply border
  border-white
  uppercase
  py-2
  px-6
  hover:bg-white
  hover:text-secondary
  duration-700;
}
</style>