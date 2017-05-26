import {
  GET_EXERCISES,
  ADD_EXERCISE
} from '../actions/types';
import defaults from '../db/defaults';

export default function(state = defaults.exercises, action) {
  switch(action.type) {
    case GET_EXERCISES:
      return action.payload.data;
    case ADD_EXERCISE:
      return [...state, action.payload];
  }

  return state;
}
