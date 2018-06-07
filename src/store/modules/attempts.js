// actions
const actions = {};

// getters
const getters = {};

// mutations
const mutations = {
  add(state, {
    step, card, presentedAt, presentedFor, outcome,
  }) {
    state.attempts.push({
      step, card, presentedAt, presentedFor, outcome,
    });
  },
};

export default {
  namespaced: true,
  state: {
    attempts: [],
  },
  getters,
  actions,
  mutations,
};
