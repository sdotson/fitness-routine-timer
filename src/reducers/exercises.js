import {
  GET_EXERCISES
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case GET_EXERCISES:
      return action.payload.data;
  }

  return state;
}
