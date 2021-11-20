const namespaced = true;

const state = {
  isMenuCollapsed: false,
}

const getters = {
  menuCollapsed: state => state.isMenuCollapsed
}

const actions = {
  showMenu({ state, commit }) {
    return state.isMenuCollapsed
      ? commit('TOGGLE_MENU', false)
      : commit('TOGGLE_MENU', true);
  },
  hideMenu({ commit }) {
    return commit('TOGGLE_MENU', false);
  },
}

const mutations = {
  TOGGLE_MENU: (state, collapse) => state.isMenuCollapsed = collapse,
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};