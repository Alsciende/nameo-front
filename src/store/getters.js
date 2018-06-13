import moment from 'moment';

export const getGameId = state => state.id;

export const getError = state => state.error;

export const getGameParameters = (state) => {
  return {
    nb_cards: state.nbCards,
    difficulty: state.difficulty,
    nb_players: state.nbPlayers,
    nb_teams: state.nbTeams,
    started_at: moment().toISOString(true),
  };
};
