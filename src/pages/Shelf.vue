<template>
  <section id="shelf">
    <h4 class="title">/shelf</h4>
    <div class="grid grid-rows-1 space-y-4 lg:mx-32 md:mx-20">
      <card
        v-for="(shelf, i) in allPosts.posts"
        :key="i"
        :title="[shelf.dateAdded]"
      >
        <template v-slot:header-info>
          <router-link
            :to="'/shelf/' + shelf.slug"
            class="font-bold"
            title="Pubished on Hashnode"
          >
            <h4>{{ shelf.title }}</h4></router-link
          >
        </template>
        <div class="text-darkText">
          <p class="pb-10 max-w-6xl w-full">
            {{ shelf.brief }}
          </p>
          <a
            :href="'https://joshxtreme.hashnode.dev/' + shelf.slug"
            target="_blank"
            class="text-xs font-mono"
          >
            hashnode <font-awesome-icon icon="external-link-alt" />
          </a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import store from "../store";
import { mapGetters } from "vuex";

import { GET_USER_POSTS } from "../schemas";
import fetchPost from "../utils/fetchPosts";

import card from "../components/shared/card.vue";

import SHELVES from "../static/shelf";

export default {
  name: "Shelf",
  components: { card },
  data() {
    return {
      SHELVES,
    };
  },
  mounted() {
    if (!Object.keys(this.allPosts).length) {
      fetchPost(GET_USER_POSTS, { page: 0 })
        .then((res) => {
          store.dispatch("posts/setPosts", res.data.user.publication);
        })
        .catch((err) => console.log(err));
    }
  },
  computed: {
    ...mapGetters({
      allPosts: "posts/allPosts",
    }),
  },
};
</script>

<style scoped>
.card {
  @apply transform
  duration-300
  bg-secondary
  cursor-pointer
  rounded-md;
}
</style>
