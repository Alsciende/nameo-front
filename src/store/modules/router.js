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
};

export default {
  namespaced: true,
  state: {
    route: 'start-of-turn',
  },
  getters,
  actions,
  mutations,
};
