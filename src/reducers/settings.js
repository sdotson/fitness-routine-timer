import {
  UPDATE_SETTINGS
} from '../actions/types';
import defaults from '../db/defaults';

export default function(state = defaults.settings, action) {
  switch(action.type) {
    case UPDATE_SETTINGS:
      return action.payload.data;
  }

  return state;
}
