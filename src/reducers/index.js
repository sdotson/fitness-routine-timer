import { combineReducers } from 'redux';

import exercisesReducer from './exercises';
import routinesReducer from './routines';
import newRoutineReducer from './newroutine';
import settingsReducer from './settings';
import selectedExerciseReducer from './selectedExercise';
import addExerciseModalReducer from './addExerciseModal';
import addNewExerciseModalReducer from './addNewExerciseModal';

const rootReducer = combineReducers({
  routines: routinesReducer,
  exercises: exercisesReducer,
  newRoutine: newRoutineReducer,
  settings: settingsReducer,
  selectedExercise: selectedExerciseReducer,
  addExerciseModal: addExerciseModalReducer,
  addNewExerciseModal: addNewExerciseModalReducer
});

export default rootReducer;
