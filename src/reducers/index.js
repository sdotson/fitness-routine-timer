import { combineReducers } from 'redux';

import exercisesReducer from './exercises';
import routinesReducer from './routines';

const rootReducer = combineReducers({
  routines: routinesReducer,
  exercises: exercisesReducer
});

export default rootReducer;
