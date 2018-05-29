// actions
const actions = {
};

// getters
const getters = {
  current: state => state.dictionary[state.current],
};

// mutations
const mutations = {
  reset(state) {
    state.draw = Object.keys(state.dictionary);
  },
  begin(state) {
    if(state.current) {
      return;
    }

    state.current = state.draw.shift();
  },
  success(state) {
    state.spoils.push(state.current);
    state.current = state.draw.shift();
  },
  failure(state) {
    state.discard.push(state.current);
    state.current = state.draw.shift();
  },
};

export default {
  namespaced: true,
  state: {
    dictionary: {
      "c27d0048-416c-4f42-b96e-1c9e9b442b8c": "♈ Bélier",
      "e4b0bced-8443-409c-af44-7dadc157769b": "♉ Taureau",
      "02371147-a9bf-4008-b47e-17f73b8fa3d3": "♊ Gémeaux",
      "384d43ff-dca9-4ef6-a665-54ae361c5722": "♋ Cancer",
      "63191da6-ca2e-4241-8217-59b662011cdd": "♌ Lion",
      "71d7cf34-a85f-497a-87fd-9eb41fd7167f": "♍ Vierge",
      "3b67dc6b-e823-4d3a-912a-9a8ba5a059a8": "♎ Balance",
      "4c019b06-56d5-48ef-b012-2bd48fe42a2b": "♏ Scorpion",
      "fd52385a-b25d-45b6-9488-a1945ffb070b": "♐ Sagittaire",
      "1a258088-6a93-4c20-ad62-d8ab1797a67a": "♑ Capricorne",
      "be447417-1925-4011-98a4-a144c547ebcd": "♒ Verseau",
      "d353741a-b6e0-414f-94d6-db8cbca0ff15": "♓ Poissons",
    },
    draw: [],
    current: null,
    discard: [],
    spoils: [],
  },
  getters,
  actions,
  mutations,
};
