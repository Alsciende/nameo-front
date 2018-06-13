import _ from 'lodash';
import uuidv4 from 'uuid/v4';

// actions
const actions = {};

// getters
const getters = {
  players: state => state.players,
  playerName: state => id => state.players[id].name,
  currentPlayerName: state => _.get(state.players, `${state.currentPlayer}.name`),
  currentTeam: state => state.currentTeam,
  teams: state => state.teams,
  teamName: state => id => state.teams[id].name,
  playerTeams: state => state.playerTeams,
  teamPlayers: state => teamId => _.filter(
    _.keys(state.playerTeams),
    playerId => state.playerTeams[playerId] === teamId,
  ),
};

// mutations
const mutations = {
  init(state, data) {
    state.players = {};
    state.teams = {};
    state.playerTeams = {};

    for (let i = 0; i < data.nbPlayers; i++) {
      state.players[uuidv4()] = {
        name: `Player ${i}`,
      };
    }

    for (let i = 0; i < data.nbTeams; i++) {
      state.teams[uuidv4()] = {
        name: `Team ${i}`,
      };
    }

    const teams = Object.keys(state.teams);
    _.forOwn(state.players, (value, key) => {
      state.playerTeams[key] = teams[Object.keys(state.playerTeams).length % teams.length];
    });
  },
  setNames(state, names) {
    _.forOwn(names, (value, key) => {
      if (key in state.players) {
        state.players[key].name = value;
      }
    });
  },
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
    players: {},
    teams: {},
    playerTeams: {},
    teamOrder: [],
    playerOrder: {},
    currentPlayer: null,
    currentTeam: null,
  },
  getters,
  actions,
  mutations,
};
