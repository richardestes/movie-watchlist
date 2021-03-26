//TODO: Get better definition for what a reducer,store do in Context API
// and replace this todo with description

export default (state, action) => {
  //action tells reducer how to change state
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist], //add to array of existing watchlist
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.payload.id),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_BACK_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};