import { combineReducers } from 'redux';

import exercisesReducer from './exercises';
import routinesReducer from './routines';
import newRoutineReducer from './newroutine';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  routines: routinesReducer,
  exercises: exercisesReducer,
  newRoutine: newRoutineReducer,
  settings: settingsReducer
});

export default rootReducer;
