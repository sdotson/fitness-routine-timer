import { combineReducers } from 'redux';

import exercisesReducer from './exercises';
import routinesReducer from './routines';
import newRoutineReducer from './newroutine';

const rootReducer = combineReducers({
  routines: routinesReducer,
  exercises: exercisesReducer,
  newRoutine: newRoutineReducer
});

export default rootReducer;
