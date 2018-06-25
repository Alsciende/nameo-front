import uuidv4 from 'uuid/v4';
import filter from 'lodash/filter';
import keys from 'lodash/keys';
import forOwn from 'lodash/forOwn';
import get from 'lodash/get';
import shuffle from 'lodash/shuffle';
import mapValues from 'lodash/mapValues';

const teamPlayers = state => teamId => filter(
  keys(state.playerTeams),
  playerId => state.playerTeams[playerId] === teamId,
);

// icons designed by Alena Artemova
const icons = ([
  {
    file: 'eggplant.svg',
    color: '#772583',
  },
  {
    file: 'banana.svg',
    color: '#f9c440',
  },
  {
    file: 'strawberry.svg',
    color: '#ee2e31',
  },
  {
    file: 'apple.svg',
    color: '#3ec300',
  },
]);

// actions
const actions = {};

// getters
const getters = {
  players: state => state.players,
  playerName: state => id => state.players[id].name,
  currentPlayerName: state => get(state.players, `${state.currentPlayerId}.name`),
  getCurrentTeamId: state => state.currentTeamId,
  teams: state => state.teams,
  getTeam: state => teamId => state.teams[teamId],
  getCurrentTeam: state => state.teams[state.currentTeamId],
  teamName: state => id => state.teams[id].name,
  playerTeams: state => state.playerTeams,
  teamPlayers,
};

// mutations
const mutations = {
  init(state, data) {
    state.players = {};
    state.teams = {};
    state.playerTeams = {};

    for (let i = 0; i < data.nbPlayers; i++) {
      const playerId = uuidv4();
      state.players[playerId] = {
        id: playerId,
        name: `Player ${i}`,
      };
    }

    for (let i = 0; i < data.nbTeams; i++) {
      const teamId = uuidv4();
      state.teams[teamId] = {
        id: teamId,
        name: `Team ${i}`,
        icon: null,
      };
    }

    const teams = Object.keys(state.teams);
    forOwn(state.players, (player, playerId) => {
      state.playerTeams[playerId] = teams[Object.keys(state.playerTeams).length % teams.length];
    });
  },
  assignRandomIcons(state) {
    const randomIcons = shuffle(icons);
    Object.keys(state.teams).forEach((teamId, index) => {
      state.teams[teamId].icon = randomIcons[index];
    });
  },
  setNames(state, names) {
    forOwn(names, (name, playerId) => {
      if (playerId in state.players) {
        state.players[playerId].name = name;
      }
    });
  },
  randomizeOrder(state) {
    state.currentPlayerId = null;
    state.currentTeamId = null;
    state.teamOrder = shuffle(keys(state.teams));
    state.playerOrder = mapValues(state.teams, (team, teamId) => shuffle(teamPlayers(state)(teamId)));
  },
  next(state) {
    if (state.currentPlayerId) {
      if (state.playerTeams[state.currentPlayerId] !== state.currentTeamId) {
        throw new Error('Current player\'s team is different from current team');
      }

      state.playerOrder[state.currentTeamId].push(state.currentPlayerId);
      state.currentPlayerId = null;

      state.teamOrder.push(state.currentTeamId);
      state.currentTeamId = null;
    }

    state.currentTeamId = state.teamOrder.shift();
    state.currentPlayerId = state.playerOrder[state.currentTeamId].shift();
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
    currentPlayerId: null,
    currentTeamId: null,
  },
  getters,
  actions,
  mutations,
};
