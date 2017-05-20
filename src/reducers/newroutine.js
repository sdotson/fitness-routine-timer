import {
  ADD_EXERCISE_TO_ROUTINE,
  ADD_ROUTINE
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_EXERCISE_TO_ROUTINE:
      return [...state, action.payload];
    case ADD_ROUTINE:
      return [];
  }

  return state;
}
