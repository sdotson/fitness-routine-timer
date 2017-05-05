import realm from './realm';
import defaults from './defaults';

export function initializeDatabase() {
  realm.write(() => {
    let allDefaultRoutines = realm.objects('Routine').filtered('default = true');
    realm.delete(allDefaultRoutines);
    defaults.routines.map((routine) => {
      realm.create('Routine', { name: routine.name, default: true, stretches: routine.stretches });
    });
  });
}
