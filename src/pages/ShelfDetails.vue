<template>
  <section id="shelf-details">
    <h4 class="title">/shelf</h4>
  </section>
</template>

<script>
import store from "../store";
import { mapGetters, mapState } from "vuex";
import fetchPost from "../utils/fetchPosts";
import { GET_USER_POSTS } from "../schemas";

export default {
  name: "ShelfDetails",
  computed: {
    ...mapGetters({
      allPosts: "posts/allPosts",
    }),
    ...mapState({
      isLoading: (state) => state.posts.isLoading,
    }),
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
