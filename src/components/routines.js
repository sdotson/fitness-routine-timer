const routines = {
  regular: [
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
  ],
  legs: [
    {
      name: "Hamstring",
      isOneSided: true,
      duration: 2
    },
    {
      name: "IT Band",
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
  ],
  back: [
    {
      name: "Bridge",
      isOneSided: false,
      duration: 2
    },
    {
      name: "Whoa",
      isOneSided: true,
      duration: 2
    }
  ]
};

export function getRoutine(name) {
  return routines[name];
}

export function getAllRoutines() {
  return routines;
}

export default routines;
