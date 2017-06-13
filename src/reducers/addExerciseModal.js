import {
  TOGGLE_ADD_EXERCISE_MODAL,
  ADD_EXERCISE_TO_ROUTINE,
  HIDE_ALL_MODALS
} from '../actions/types';

export default function(state = false, action) {
  switch(action.type) {
    case TOGGLE_ADD_EXERCISE_MODAL:
      return !state;
    case ADD_EXERCISE_TO_ROUTINE:
      return false;
    case HIDE_ALL_MODALS:
      return false;
  }

  return state;
}
