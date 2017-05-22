import {
  GET_ROUTINES,
  ADD_ROUTINE
} from '../actions/types';
import defaults from '../db/defaults';

export default function(state = defaults.routines, action) {
  switch(action.type) {
    case GET_ROUTINES:
      return action.payload.data;
    case ADD_ROUTINE:
      return [...state, action.payload];
  }

  return state;
}
