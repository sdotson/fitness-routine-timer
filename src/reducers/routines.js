import {
  GET_ROUTINES
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case GET_ROUTINES:
      return action.payload.data;
  }

  return state;
}
