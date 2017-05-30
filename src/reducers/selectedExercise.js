import {
  SELECT_EXERCISE,
  START_UPDATE_EXERCISE
} from '../actions/types';

const defaultObj = {
  name: 'Rest',
  duration: 10,
  isOneSided: false,
  default: false,
  type: 'rest'
};

export default function(state = defaultObj, action) {
  switch(action.type) {
    case START_UPDATE_EXERCISE:
      return action.payload;
    case SELECT_EXERCISE:
      return action.payload.data;
  }

  return state;
}
