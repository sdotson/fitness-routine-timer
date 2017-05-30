import {
  SELECT_EXERCISE,
  UPDATE_EXERCISE
} from '../actions/types';

const defaultObj = {
  name: 'Rest',
  duration: 10,
  isOneSided: null,
  default: false,
  type: 'rest'
}

export default function(state = defaultObj, action) {
  switch(action.type) {
    case UPDATE_EXERCISE:
      return action.payload.data;
    case SELECT_EXERCISE:
      return action.payload.data;
  }

  return state;
}
