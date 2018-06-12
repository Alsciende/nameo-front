import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

function Attempt(getters, outcome) {
  this.step = getters['phases/current'];
  this.card = getters['cards/current'];
  this.presentedAt = getters['cards/currentAt'].toISOString();
  this.presentedFor = Math.round((Date.now() - getters['cards/currentAt'].getTime()) / 1000);
  this.outcome = outcome;
}

export const GameStarts = ({ commit }) => {
  commit('phases/reset');
  commit('cards/initGame');
  axios.post('/matches/', {
    nb_cards: 30,
    difficulty: 2,
    nb_players: 6,
    nb_teams: 3,
    started_at: '2017-07-14T08:40:00+06:00',
  }).then(({ data }) => {
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
  dispatch('timer/start', 10);
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

export const PhaseEnds = ({ getters, commit }) => {
  commit('cards/saveScore');
  commit('phases/increment');
  if (getters['phases/current'] > 3) {
    commit('router/change', 'end-of-game');
  } else {
    commit('router/change', 'start-of-phase');
  }
};

