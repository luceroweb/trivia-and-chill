  const initialState = {
    winningStreak: 0,
    scene: "Home",
    movies: [],
    movieId:''
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREASE_WINNING_STREAK":
        return {
          ...state,
          winningStreak: state.winningStreak + 1,
        };
      case "RESET_WINNING_STREAK":
        return {
          ...state,
          winningStreak: 0,
        };
      case "SET_SCENE":
        return {
          ...state,
          scene: action.name
        };
      case "SET_MOVIES":
        return {
          ...state,
          movies: action.movies
        };
        case "SET_MOVIEID":
        return {
          ...state,
          movieId: state.movieId
        };
    }
    return state;
  };