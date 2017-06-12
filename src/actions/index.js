import {
  ADD_EXERCISE_TO_ROUTINE,
  DELETE_EXERCISE_FROM_ROUTINE,
  USE_ROUTINE_AS_TEMPLATE,
  ADD_ROUTINE,
  DELETE_ROUTINE,
  UPDATE_SETTINGS,
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  START_UPDATE_EXERCISE,
  TOGGLE_ADD_EXERCISE_MODAL,
  TOGGLE_ADD_NEW_EXERCISE_MODAL,
  HIDE_ALL_MODALS
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

export function useRoutineAsTemplate(routine) {
  return {
    type: USE_ROUTINE_AS_TEMPLATE,
    payload: routine
  };
}

export function addRoutine(routine) {
  return {
    type: ADD_ROUTINE,
    payload: routine
  }
}

export function deleteRoutine(routine) {
  return {
    type: DELETE_ROUTINE,
    payload: routine
  }
}

export function addExercise(exercise) {
  return {
    type: ADD_EXERCISE,
    payload: exercise
  }
}

export function updateExercise(exercise) {
  return {
    type: UPDATE_EXERCISE,
    payload: exercise
  }
}

export function startUpdateExercise(exercise) {
  console.log('startUpdateExercise', exercise);
  return {
    type: START_UPDATE_EXERCISE,
    payload: exercise
  }
}

export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    payload: settings
  }
}

export function toggleAddExerciseModal() {
  console.log('toggleAddExerciseModal() triggered');
  return {
    type: TOGGLE_ADD_EXERCISE_MODAL
  }
}

export function toggleAddNewExerciseModal() {
  console.log('toggleAddNewExerciseModal() triggered');
  return {
    type: TOGGLE_ADD_NEW_EXERCISE_MODAL
  }
}

export function hideAllModals() {
  console.log('hideALlModals() triggered');
  return {
    type: HIDE_ALL_MODALS
  }
}
