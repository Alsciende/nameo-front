// actions
const actions = {};

// getters
const getters = {
  current: state => state.current,
};

// mutations
const mutations = {
  reset(state) {
    state.current = 1;
  },
  increment(state) {
    state.current++;
  },
};

export default {
  namespaced: true,
  state: {
    current: null,
  },
  getters,
  actions,
  mutations,
};
