import {
  GET_ROUTINES,
  ADD_ROUTINE,
  DELETE_ROUTINE
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
      const routineName = action.payload.name;
      const existingRoutineIndex = state.map(routine => routine.name).indexOf(routineName);
      if (existingRoutineIndex > -1) {
          return [
            ...state.slice(0, existingRoutineIndex),
            action.payload,
            ...state.slice(existingRoutineIndex + 1)
          ];
      } else {
        return [...state, action.payload];
      }
    case DELETE_ROUTINE:
      const name = action.payload;
      const index = state.map(routine => routine.name).indexOf(name);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
  }

  return state;
}
