import shuffle from 'lodash/shuffle';

// actions
const actions = {
};

// getters
const getters = {
  current: state => state.dictionary[state.current],
  drawCount: state => state.piles.draw.length,
};

// mutations
const mutations = {
  init(state, teams) {
    state.teams = _.mapValues(teams, () => []);
  },
  reset(state) {
    state.piles.lost = [];
    state.piles.won = [];
    state.piles.draw = Object.keys(state.dictionary);
    state.piles.current = null;
  },
  next(state) {
    if (state.current) {
      return;
    }

    state.current = state.piles.draw.shift();
  },
  success(state) {
    state.piles.won.push(state.current);
    state.current = null;
  },
  failure(state) {
    state.piles.lost.push(state.current);
    state.current = null;
  },
  shuffleLost(state) {
    state.piles.draw = state.piles.draw.concat(shuffle(state.piles.lost));
    state.piles.lost = [];
  },
  appendWon(state, team) {
    state.teams[team] = state.teams[team].concat(state.piles.won);
    state.piles.won = [];
  },
};

export default {
  namespaced: true,
  state: {
    dictionary: {
      'c27d0048-416c-4f42-b96e-1c9e9b442b8c': 'Rouge',
      'e4b0bced-8443-409c-af44-7dadc157769b': 'Orange',
      '02371147-a9bf-4008-b47e-17f73b8fa3d3': 'Jaune',
      '384d43ff-dca9-4ef6-a665-54ae361c5722': 'Vert',
      '63191da6-ca2e-4241-8217-59b662011cdd': 'Bleu',
      '71d7cf34-a85f-497a-87fd-9eb41fd7167f': 'Indigo',
      '3b67dc6b-e823-4d3a-912a-9a8ba5a059a8': 'Violet',
    },
    piles: {
      draw: [],
      lost: [],
      won: [],
    },
    teams: null,
    current: null,
  },
  getters,
  actions,
  mutations,
};
