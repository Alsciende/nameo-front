// how many times per second do we update the progression?
const FREQUENCY_OF_PROGRESSION = 24;

// time between each progression update, in milliseconds
const PERIOD_OF_PROGRESSION = 1000 / FREQUENCY_OF_PROGRESSION;

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
  timer: state => Math.round((state.duration - state.elapsed) / 1000),
  progression: state => state.elapsed / state.duration,
  done: state => state.duration <= state.elapsed,
};

// mutations
const mutations = {
  start(state, { duration, callback }) {
    state.startedAt = Date.now();
    state.elapsed = 0;
    state.duration = duration * 1000;
    state.intervalID = window.setInterval(callback, PERIOD_OF_PROGRESSION);
  },
  tick(state) {
    state.elapsed = Date.now() - state.startedAt;
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
