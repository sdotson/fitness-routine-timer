import {
  GET_EXERCISES,
  ADD_EXERCISE
} from '../actions/types';
import defaults from '../db/defaults';
import compareStrings from './helpers';

const sortedExercises = defaults.exercises.sort((a, b) => {
  return compareStrings(a.name, b.name);
});

export default function(state = sortedExercises, action) {
  switch(action.type) {
    case GET_EXERCISES:
      return action.payload.data;
    case ADD_EXERCISE:
      return [...state, action.payload];
  }

  return state;
}
