import { MovieInitialState } from '../dtos/moviesDtos';
import { RootState } from '../store';

const initialState: MovieInitialState = {
  movies: [],
  movie: null,
};

export type MOVIESACTIONTYPE =
  | { type: 'GET_MOVIES'; payload: any }

const movieReducer = (
  state = initialState,
  action: MOVIESACTIONTYPE
): MovieInitialState => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export const selectMovies = (state: RootState) => state.movies.movies;

export default movieReducer;
