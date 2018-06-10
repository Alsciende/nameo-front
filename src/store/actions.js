function Attempt(getters, outcome) {
  this.step = getters['phases/current'];
  this.card = getters['cards/current'];
  this.presentedAt = getters['cards/currentAt'].toISOString();
  this.presentedFor = Math.round((Date.now() - getters['cards/currentAt'].getTime()) / 1000);
  this.outcome = outcome;
}

export const PhaseStarts = ({ commit, getters }) => {
  commit('players/randomizeOrder');
  commit('phases/increment');
  commit('cards/init', getters['players/teams']);
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

export const PhaseEnds = ({ commit }) => {
  commit('router/change', 'start-of-phase');
};
