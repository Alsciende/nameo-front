import _ from 'lodash';

// actions
const actions = {};

// getters
const getters = {
  currentPlayerName: state => _.get(state.players, `${state.currentPlayer}.name`),
  currentTeam: state => state.currentTeam,
  teams: state => state.teams,
};

// mutations
const mutations = {
  randomizeOrder(state) {
    state.currentPlayer = null;
    state.currentTeam = null;
    state.teamOrder = _.shuffle(_.keys(state.teams));
    state.playerOrder = _.mapValues(state.teams, (team, id) => _.shuffle(_.reduce(
      state.playerTeams,
      (accumulator, value, key) => {
        if (value === id) {
          accumulator.push(key);
        }
        return accumulator;
      },
      [],
    )));
  },
  next(state) {
    if (state.currentPlayer) {
      if (state.playerTeams[state.currentPlayer] !== state.currentTeam) {
        throw new Error('Current player\'s team is different from current team');
      }

      state.playerOrder[state.currentTeam].push(state.currentPlayer);
      state.currentPlayer = null;

      state.teamOrder.push(state.currentTeam);
      state.currentTeam = null;
    }

    state.currentTeam = state.teamOrder.shift();
    state.currentPlayer = state.playerOrder[state.currentTeam].shift();
  },
};

export default {
  namespaced: true,
  state: {
    players: {
      'c27d0048-416c-4f42-b96e-1c9e9b442b8c': {
        name: 'Steph',
      },
      'e4b0bced-8443-409c-af44-7dadc157769b': {
        name: 'Max',
      },
      '02371147-a9bf-4008-b47e-17f73b8fa3d3': {
        name: 'Julie',
      },
      '384d43ff-dca9-4ef6-a665-54ae361c5722': {
        name: 'Cédric',
      },
      '3b67dc6b-e823-4d3a-912a-9a8ba5a059a8': {
        name: 'Cylian',
      },
    },
    teams: {
      '63191da6-ca2e-4241-8217-59b662011cdd': {
        name: 'Équipe 1',
      },
      '71d7cf34-a85f-497a-87fd-9eb41fd7167f': {
        name: 'Équipe 2',
      },
    },
    playerTeams: {
      'c27d0048-416c-4f42-b96e-1c9e9b442b8c': '63191da6-ca2e-4241-8217-59b662011cdd',
      'e4b0bced-8443-409c-af44-7dadc157769b': '63191da6-ca2e-4241-8217-59b662011cdd',
      '02371147-a9bf-4008-b47e-17f73b8fa3d3': '71d7cf34-a85f-497a-87fd-9eb41fd7167f',
      '384d43ff-dca9-4ef6-a665-54ae361c5722': '71d7cf34-a85f-497a-87fd-9eb41fd7167f',
      '3b67dc6b-e823-4d3a-912a-9a8ba5a059a8': '71d7cf34-a85f-497a-87fd-9eb41fd7167f',
    },
    teamOrder: null,
    playerOrder: null,
    currentPlayer: null,
    currentTeam: null,
  },
  getters,
  actions,
  mutations,
};
