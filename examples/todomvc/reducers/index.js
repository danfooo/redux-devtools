import { combineReducers } from 'redux';
import todos from './todos';
import suggestions from './suggestions';

const rootReducer = combineReducers({
  todos,
  suggestions
});

export default rootReducer;
