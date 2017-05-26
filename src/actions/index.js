import {
  ADD_EXERCISE_TO_ROUTINE,
  DELETE_EXERCISE_FROM_ROUTINE,
  ADD_ROUTINE,
  UPDATE_SETTINGS,
  ADD_EXERCISE
} from './types';

export function addExerciseToRoutine(exercise) {
  return {
    type: ADD_EXERCISE_TO_ROUTINE,
    payload: exercise
  };
}

export function deleteExerciseFromRoutine(index) {
  return {
    type: DELETE_EXERCISE_FROM_ROUTINE,
    payload: index
  };
}

export function addRoutine(routine) {
  return {
    type: ADD_ROUTINE,
    payload: routine
  }
}

export function addExercise(exercise) {
  return {
    type: ADD_EXERCISE,
    payload: exercise
  }
}

export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    payload: settings
  }
}
