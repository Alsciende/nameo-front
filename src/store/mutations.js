export const setGameId = (state, id) => {
  state.id = id;
};

export const setError = (state, error) => {
  state.error = error;
};

export const setNbCards = (state, nbCards) => {
  state.nbCards = nbCards;
};

export const setDifficulty = (state, difficulty) => {
  state.difficulty = difficulty;
};

export const setNbPlayers = (state, nbPlayers) => {
  state.nbPlayers = nbPlayers;
};

export const setNbTeams = (state, nbTeams) => {
  state.nbTeams = nbTeams;
};

export const setStartedAt = (state) => {
  state.startedAt = Date.now();
};
