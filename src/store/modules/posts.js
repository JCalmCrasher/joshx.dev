import loadStatus from "../../utils/enum";

const namespaced = true;

const state = () => ({
  isLoading: loadStatus.IDLE,
  posts: {},
});

const getters = {
  allPosts: (state) => state.posts,
};

const actions = {
  setLoading({ commit }, isLoading) {
    commit("SET_LOADING", isLoading);
  },

  setPosts({ commit }, posts) {
    commit("SET_POSTS", posts);
  },
};

const mutations = {
  SET_LOADING: (state, isLoading) => (state.isLoading = isLoading),
  SET_POSTS: (state, posts) => (state.posts = posts),
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
