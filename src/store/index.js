import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import * as getters from './getters';
import * as mutations from './mutations';

import timer from './modules/timer';
import cards from './modules/cards';
import router from './modules/router';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
  },
  getters,
  mutations,
  modules: {
    timer,
    cards,
    router,
  },
  strict: debug,
  plugins: [
    createPersistedState({
      paths: [
      ],
    }),
  ],
});
