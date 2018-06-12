import shuffle from 'lodash/shuffle';
import mapValues from 'lodash/mapValues';
import maxBy from 'lodash/maxBy';
import moment from 'moment';

// actions
const actions = {};

// getters
const getters = {
  current: state => state.current,
  currentAt: state => state.currentAt,
  getCurrentCardName: state => state.dictionary[state.current],
  drawCount: state => state.piles.draw.length,
  score: state => state.scoresForCurrentPhase,
  finalScore: state => state.scoresByPhase,
  phaseWinner: state => teams => maxBy(
    Object.keys(teams),
    team => state.scoresForCurrentPhase[team],
  ),
  gameWinner: state => teams => maxBy(
    Object.keys(teams),
    team => state.scoresByPhase.reduce((accumulator, score) => accumulator + score[team].length, 0),
  ),
  won: state => state.piles.won,
  lost: state => state.piles.lost,
};

// mutations
const mutations = {
  initGame(state) {
    state.scoresByPhase = [];
  },
  setCards(state, cards) {
    state.dictionary = {};
    cards.forEach((card) => {
      state.dictionary[card.id] = card.title;
    });
  },
  initPhase(state, teams) {
    if (state.scoresForCurrentPhase !== null) {
      throw new Error('Cannot reset state.scoresForCurrentPhase because it is not null');
    }

    state.scoresForCurrentPhase = mapValues(teams, () => []);
  },
  reset(state) {
    state.piles.lost = [];
    state.piles.won = [];
    state.piles.draw = Object.keys(state.dictionary);
    state.current = null;
  },
  next(state) {
    if (state.current) {
      return;
    }

    state.current = state.piles.draw.shift();
    state.currentAt = moment().unix();
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
    state.scoresForCurrentPhase[team] = state.scoresForCurrentPhase[team].concat(state.piles.won);
    state.piles.won = [];
  },
  saveScore(state) {
    state.scoresByPhase.push(state.scoresForCurrentPhase);
    state.scoresForCurrentPhase = null;
  },
};

export default {
  namespaced: true,
  state: {
    dictionary: {
      'c27d0048-416c-4f42-b96e-1c9e9b442b8c': 'Riri',
      'e4b0bced-8443-409c-af44-7dadc157769b': 'Fifi',
      '02371147-a9bf-4008-b47e-17f73b8fa3d3': 'Loulou',
    },
    piles: {
      draw: [],
      lost: [],
      won: [],
    },
    scoresForCurrentPhase: null,
    scoresByPhase: null,
    current: null,
    currentAt: null,
  },
  getters,
  actions,
  mutations,
};
