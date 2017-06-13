import {
  TOGGLE_ADD_NEW_EXERCISE_MODAL,
  ADD_EXERCISE,
  HIDE_ALL_MODALS
} from '../actions/types';

export default function(state = false, action) {
  switch(action.type) {
    case TOGGLE_ADD_NEW_EXERCISE_MODAL:
      return !state;
    case ADD_EXERCISE:
      return false;
    case HIDE_ALL_MODALS:
      return false;
  }

  return state;
}
