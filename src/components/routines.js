const routines = [{
  name: "regular",
  stretches: [
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
    stretches: [
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
  return routines;
}

export function getAllRoutines() {
  return routines;
}
