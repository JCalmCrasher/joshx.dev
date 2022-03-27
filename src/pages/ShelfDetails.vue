<template>
  <section id="shelf-details">
    <div class="text-secondary">
      <error-page
        v-if="
          isLoading === loadStatus.LOADING || isLoading === loadStatus.ERROR
        "
        :text="loadingText"
      />
      <div v-else-if="isLoading === loadStatus.FETCHED && post" class="section">
        <h2 :aria-label="post.title">{{ post.title }}</h2>
        <Markdown :source="post.contentMarkdown" :breaks="true" />
      </div>
      <div v-else-if="!post">
        this post was not found
      </div>
    </div>
  </section>
</template>

<script>
import loadStatus from "../utils/enum";

import store from "../store";
import { mapGetters, mapState } from "vuex";
import { fetchPost } from "../utils/fetchPosts";
import { GET_USER_POSTS } from "../schemas";

import Markdown from "vue3-markdown-it";
import ErrorPage from "../components/ErrorPage.vue";

export default {
  name: "ShelfDetails",
  components: { ErrorPage, Markdown },
  data() {
    return {
      loadingText: "Loading articles...",
      loadStatus,
    };
  },
  computed: {
    ...mapGetters({
      allPosts: "posts/allPosts",
    }),
    ...mapState({
      isLoading: (state) => state.posts.isLoading,
    }),
    post: function() {
      return (
        this.allPosts?.posts?.find(
          (post) => post.slug === this.$route.params.id
        ) || null
      );
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
        .catch((err) => {
          store.dispatch("posts/setLoading", loadStatus.ERROR);
          this.loadingText =
            "Oops! An error occured...please check your network connection";
        });
    }
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
