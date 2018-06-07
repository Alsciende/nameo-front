// actions
const actions = {};

// getters
const getters = {
  current: state => state.phase,
};

// mutations
const mutations = {
  increment(state) {
    state.phase++;
  },
};

export default {
  namespaced: true,
  state: {
    phase: 0,
  },
  getters,
  actions,
  mutations,
};
