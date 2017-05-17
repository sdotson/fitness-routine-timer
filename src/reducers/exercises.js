import {
  GET_EXERCISES
} from '../actions/types';

import defaults from '../db/defaults';

export default function(state = defaults.exercises, action) {
  switch(action.type) {
    case GET_EXERCISES:
      return action.payload.data;
  }

  return state;
}
