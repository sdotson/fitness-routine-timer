import axios from 'axios';
import store from 'react-native-simple-store';

import {
  GET_EXERCISES,
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
