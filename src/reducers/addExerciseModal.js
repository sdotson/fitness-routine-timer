import {
  TOGGLE_ADD_EXERCISE_MODAL,
  ADD_EXERCISE_TO_ROUTINE
} from '../actions/types';

export default function(state = false, action) {
  switch(action.type) {
    case TOGGLE_ADD_EXERCISE_MODAL:
      console.log('prev: ', state, ' curr: ', !state);
      return !state;
    case ADD_EXERCISE_TO_ROUTINE:
      return false;
  }

  return state;
}
