import {
  ADD_EXERCISE_TO_ROUTINE,
  DELETE_EXERCISE_FROM_ROUTINE,
  ADD_ROUTINE
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
