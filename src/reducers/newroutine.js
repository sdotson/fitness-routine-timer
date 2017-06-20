import {
  ADD_EXERCISE_TO_ROUTINE,
  DELETE_EXERCISE_FROM_ROUTINE,
  ADD_ROUTINE,
  USE_ROUTINE_AS_TEMPLATE,
  CLEAR_NEW_ROUTINE
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_EXERCISE_TO_ROUTINE:
      return [...state, action.payload];
    case ADD_ROUTINE:
      return [];
    case DELETE_EXERCISE_FROM_ROUTINE:
      return state.filter((exercise, index) => index != action.payload);
    case USE_ROUTINE_AS_TEMPLATE:
      return [...action.payload];
    case CLEAR_NEW_ROUTINE:
      return [];
  }

  return state;
}
