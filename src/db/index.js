import realm from './realm';
import defaults from './defaults';

export function initializeDatabase() {
  realm.write(() => {
    let allDefaultRoutines = realm.objects('Routine').filtered('default = true');
    realm.delete(allDefaultRoutines);
    defaults.routines.map((routine) => {
      realm.create('Routine', { name: routine.name, default: true, exercises: routine.exercises });
    });
  });

  realm.write(() => {
    let allDefaultExercises = realm.objects('Exercise');
    realm.delete(allDefaultExercises);
    defaults.exercises.map((exercise) => {
      realm.create('Exercise', {
        name: exercise.name,
        default: true,
        duration: exercise.duration,
        type: exercise.type,
        isOneSided: exercise.isOneSided
      });
    });
  });

}
