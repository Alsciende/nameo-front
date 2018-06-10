// actions
const actions = {};

// getters
const getters = {
  current: state => state.phase,
};

// mutations
const mutations = {
  reset(state) {
    state.phase = 1;
  },
  increment(state) {
    state.phase++;
  },
};

export default {
  namespaced: true,
  state: {
    phase: null,
  },
  getters,
  actions,
  mutations,
};
