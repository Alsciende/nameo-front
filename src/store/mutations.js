export const changePage = (state) => {
  state.page = 3 - state.page;
};

export const addPlayer = (state, player) => {
  state.players.push(player);
};
