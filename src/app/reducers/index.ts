import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import userReducer from './usersReducer';

const rootReducers = combineReducers({
  movies: movieReducer,
  users: userReducer,
});

export default rootReducers;
