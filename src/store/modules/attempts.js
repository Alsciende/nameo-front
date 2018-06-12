import snakeCase from 'lodash/snakeCase';
import mapKeys from 'lodash/mapKeys';

// actions
const actions = {};

// getters
const getters = {
  serialize: state => state.attempts.map(attempt => mapKeys(attempt, (value, key) => snakeCase(key))),
};

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
