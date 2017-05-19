import {
  GET_ROUTINES
} from '../actions/types';

import defaults from '../db/defaults';

export default function(state = defaults.routines, action) {
  switch(action.type) {
    case GET_ROUTINES:
      return action.payload.data;
  }

  return state;
}
