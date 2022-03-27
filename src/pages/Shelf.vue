<template>
  <section id="shelf">
    <h4 class="title">/shelf</h4>
    <div class="grid grid-rows-1 space-y-4 lg:mx-32 md:mx-20">
      <error-page
        v-if="
          isLoading === loadStatus.LOADING || isLoading === loadStatus.ERROR
        "
        :text="loadingText"
      />
      <card-area
        v-for="(shelf, i) in allPosts.posts"
        :key="i"
        :title="[formatDate(shelf.dateAdded)]"
        v-else-if="loadStatus.FETCHED"
      >
        <template v-slot:header-info>
          <a
            :href="'https://joshxtreme.hashnode.dev/' + shelf.slug"
            target="_blank"
            class="font-bold"
            title="Pubished on Hashnode"
          >
            <h4>{{ shelf.title }}</h4></a
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
            read full article <font-awesome-icon icon="external-link-alt" />
          </a>
        </div>
      </card-area>
    </div>
  </section>
</template>

<script>
import loadStatus from "../utils/enum";

import store from "../store";
import { mapGetters, mapState } from "vuex";

import { GET_USER_POSTS } from "../schemas";
import { fetchPost } from "../utils/fetchPosts";

import CardArea from "../components/shared/card.vue";

import ErrorPage from "../components/ErrorPage.vue";

export default {
  name: "MyShelf",
  components: { CardArea, ErrorPage },
  data() {
    return {
      loadingText: "Loading articles...",
      loadStatus,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  methods: {
    formatDate(date) {
      const dt = new Date(date);
      return `${
        this.monthNames[dt.getMonth()]
      } ${dt.getDate()}, ${dt.getFullYear()}`;
    },
  },
  mounted() {
    if (!Object.keys(this.allPosts).length) {
      store.dispatch("posts/setLoading", loadStatus.LOADING);

      fetchPost(GET_USER_POSTS, { page: 0 })
        .then((res) => {
          store.dispatch("posts/setLoading", loadStatus.FETCHED);
          store.dispatch("posts/setPosts", res.data.user.publication);
        })
        .catch(() => {
          store.dispatch("posts/setLoading", loadStatus.ERROR);
          this.loadingText =
            "Oops! An error occured...please check your network connection";
        });
    }
  },
  computed: {
    ...mapGetters({
      allPosts: "posts/allPosts",
    }),
    ...mapState({
      isLoading: (state) => state.posts.isLoading,
    }),
  },
  title: "Shelf - Joshua Osagie",
};
</script>

<style scoped>
.card {
  @apply bg-secondary
  cursor-pointer
  rounded-md;
}
</style>

<style>
footer {
  @apply pt-10;
}
</style>
