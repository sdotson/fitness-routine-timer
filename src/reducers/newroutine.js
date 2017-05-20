import {
  ADD_EXERCISE_TO_ROUTINE,
  DELETE_EXERCISE_FROM_ROUTINE,
  ADD_ROUTINE
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_EXERCISE_TO_ROUTINE:
      return [...state, action.payload];
    case ADD_ROUTINE:
      return [];
    case DELETE_EXERCISE_FROM_ROUTINE:
      return state.filter((exercise, index) => index != action.payload);
  }

  return state;
}
