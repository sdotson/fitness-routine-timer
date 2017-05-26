import {
  GET_ROUTINES,
  ADD_ROUTINE
} from '../actions/types';
import defaults from '../db/defaults';
import compareStrings from './helpers';

const sortedRoutines = defaults.routines.sort((a, b) => {
  return compareStrings(a.name, b.name);
});

export default function(state = sortedRoutines, action) {
  switch(action.type) {
    case GET_ROUTINES:
      return action.payload.data;
    case ADD_ROUTINE:
      return [...state, action.payload];
  }

  return state;
}
