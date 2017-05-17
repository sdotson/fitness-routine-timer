import defaults from './defaults';
import { AsyncStorage } from 'react-native';

export function initializeDatabase() {
  return Promise.all([
    AsyncStorage.removeItem('routines', function() {
      return AsyncStorage.setItem('routines', JSON.stringify(defaults.routines));
    }),
    AsyncStorage.removeItem('exercises', function() {
      return AsyncStorage.setItem('exercises', JSON.stringify(defaults.exercises));
    })
  ]);

}
