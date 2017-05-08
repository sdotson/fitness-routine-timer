const routines = [{
  name: "regular",
  default: true,
  exercises: [
      {
        name: "Hamstring",
        isOneSided: true,
        duration: 2
      },
      {
        name: "Butterfly",
        isOneSided: false,
        duration: 2
      },
      {
        name: "Splits",
        isOneSided: false,
        duration: 2
      }
    ]
  }, {
    name: "legs",
    default: true,
    exercises: [
      {
        name: "Hamstring",
        isOneSided: true,
        duration: 2
      },
      {
        name: "Butterfly",
        isOneSided: false,
        duration: 2
      },
      {
        name: "Splits",
        isOneSided: false,
        duration: 2
      }
    ]
  }];

export function getRoutine(name) {
  console.log('getRoutine', routines.filter(routine => routine.name === name)[0]);
  return routines.filter(routine => routine.name === name)[0];
}

export function getAllRoutines() {
  return routines;
}
