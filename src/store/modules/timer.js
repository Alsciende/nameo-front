// actions
const actions = {
  start({ commit, dispatch }, duration) {
    commit('start', {
      duration,
      callback: () => dispatch('tick'),
    });
  },
  tick({ dispatch, commit, getters }) {
    commit('tick');

    if (getters.done) {
      dispatch('TimeIsOut', null, { root: true });
    }
  },
};

// getters
const getters = {
  timer: state => state.duration - state.elapsed,
  done: state => state.duration <= state.elapsed,
};

// mutations
const mutations = {
  start(state, { duration, callback }) {
    state.startedAt = Date.now();
    state.elapsed = 0;
    state.duration = duration;
    state.intervalID = window.setInterval(callback, 1000);
  },
  tick(state) {
    state.elapsed = Math.round((Date.now() - state.startedAt) / 1000);
  },
  clear(state) {
    window.clearInterval(state.intervalID);
  },
};

export default {
  namespaced: true,
  state: {
    intervalID: null,
    elapsed: null,
    duration: null,
    startedAt: null,
  },
  getters,
  actions,
  mutations,
};
