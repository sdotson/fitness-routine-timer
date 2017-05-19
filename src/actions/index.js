import axios from 'axios';
import store from 'react-native-simple-store';

import {
  GET_EXERCISES,
  ADD_EXERCISE_TO_ROUTINE,
  GET_ROUTINES
} from './types';

export function getExercises() {
  const request = axios({
    method: 'get',
    url: ''
  });

  return {
    type: GET_EXERCISES,
    payload: request
  };
}

export function getRoutines() {
  const request = axios({
    method: 'get',
    url: ''
  });

  return {
    type: GET_ROUTINES,
    payload: request
  };
}

export function addExerciseToRoutine(exercise) {
  return {
    type: ADD_EXERCISE_TO_ROUTINE,
    payload: exercise
  };
}
