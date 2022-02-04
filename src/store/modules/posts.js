const namespaced = true;

const state = {
  isLoading: false,
  posts: {},
};

const getters = {
  allPosts: (state) => state.posts,
};

const actions = {
  setPosts({ commit }, posts) {
    commit("SET_POSTS", posts);
  },
};

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts),
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
