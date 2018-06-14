// actions
const actions = {
};

// getters
const getters = {
  route: state => state.route,
};

// mutations
const mutations = {
  change(state, route) {
    state.route = route;
  },
  stash(state) {
    state.stashed = state.route;
  },
  apply(state) {
    state.route = state.stashed;
  },
};

export default {
  namespaced: true,
  state: {
    route: null,
    stashed: null,
  },
  getters,
  actions,
  mutations,
};
