import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

import timer from './modules/timer';
import cards from './modules/cards';
import players from './modules/players';
import router from './modules/router';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
  },
  actions,
  getters,
  mutations,
  modules: {
    timer,
    cards,
    players,
    router,
  },
  strict: debug,
  plugins: [
    // createPersistedState({
    //   paths: [
    //   ],
    // }),
  ],
});
