import axios from 'axios';
import moment from 'moment';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

function Attempt(getters, outcome) {
  this.step = getters['phases/current'];
  this.card = getters['cards/current'];
  this.presentedAt = getters['cards/currentAt'];
  this.presentedFor = moment().unix() - getters['cards/currentAt'];
  this.outcome = outcome;
}

export const AppMounted = ({ commit, getters }) => {
  if (getters.getStartedAt) {
    if (getters['router/route'] !== 'resume-game') {
      commit('router/stash');
    }
    commit('router/change', 'resume-game');
  } else {
    commit('router/change', 'set-parameters');
  }
};

export const ParametersSet = ({ commit }, data) => {
  commit('setNbCards', data.nbCards);
  commit('setDifficulty', data.difficulty);
  commit('setNbPlayers', data.nbPlayers);
  commit('setNbTeams', data.nbTeams);
  commit('players/init', data);
  commit('router/change', 'set-player-names');
};

export const PlayerNamesSet = ({ commit }, names) => {
  commit('players/setNames', names);
  commit('router/change', 'set-player-teams');
};

export const GameStarts = ({ commit, getters }) => {
  commit('phases/reset');
  commit('cards/initGame');
  commit('setStartedAt');
  axios.post('/matches/', getters.getGameParameters).then(({ data }) => {
    commit('setGameId', data.id);
    commit('cards/setCards', data.cards);
    commit('router/change', 'start-of-phase');
  }).catch((error) => {
    commit('setError', error);
  });
};

export const PhaseStarts = ({ commit, getters }) => {
  commit('players/randomizeOrder');
  commit('cards/initPhase', getters['players/teams']);
  commit('cards/reset');
  commit('router/change', 'start-of-turn');
  commit('players/next');
};

export const TurnStarts = ({ dispatch, commit }) => {
  dispatch('timer/start', 30);
  commit('cards/next');
  commit('router/change', 'turn');
};

export const CardIsWon = ({ dispatch, commit, getters }) => {
  commit('attempts/add', new Attempt(getters, 0));
  commit('cards/success');
  commit('cards/next');
  if (getters['cards/current'] === undefined) {
    dispatch('DrawIsEmpty');
  }
};

export const CardIsLost = ({ dispatch, commit, getters }) => {
  commit('attempts/add', new Attempt(getters, 1));
  commit('cards/failure');
  commit('cards/next');
  if (getters['cards/current'] === undefined) {
    dispatch('DrawIsEmpty');
  }
};

export const DrawIsEmpty = ({ commit }) => {
  commit('timer/clear');
  commit('router/change', 'end-of-turn');
};

export const TimeIsOut = ({ commit, getters }) => {
  commit('timer/clear');
  commit('attempts/add', new Attempt(getters, 2));
  commit('cards/failure');
  commit('cards/next');
  commit('router/change', 'end-of-turn');
};

export const TurnEnds = ({ getters, commit }) => {
  commit('timer/clear');
  commit('cards/appendWon', getters['players/currentTeam']);
  commit('cards/shuffleLost');
  commit('players/next');
  if (getters['cards/drawCount'] === 0) {
    commit('router/change', 'end-of-phase');
  } else {
    commit('router/change', 'start-of-turn');
  }
};

export const PhaseEnds = ({ getters, commit, dispatch }) => {
  commit('cards/saveScore');
  commit('phases/increment');
  if (getters['phases/current'] > 3) {
    commit('router/change', 'end-of-game');
    dispatch('GameEnds');
  } else {
    commit('router/change', 'start-of-phase');
  }
};

export const GameEnds = ({ getters, commit }) => {
  axios.post(`/matches/${getters.getGameId}/results/`, {
    attempts: getters['attempts/serialize'],
  }).then(() => {
    commit('resetStartedAt');
  }).catch((error) => {
    commit('setError', error);
  });
};

export const QuitGame = ({ commit }) => {
  commit('router/change', 'set-parameters');
};

export const ResumeGame = ({ commit, getters, dispatch }) => {
  commit('router/apply');
  if (getters['router/route'] === 'turn') {
    dispatch('TimeIsOut');
  }
};
