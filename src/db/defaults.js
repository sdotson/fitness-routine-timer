const defaultValues = {
  settings: {
    rest: 3,
    duration: 5
  },
  routines: [{
    name: "regular",
    default: true,
    stretches: [
        {
          name: "Hamstring",
          isOneSided: true,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        }
      ]
    }, {
      name: "legs",
      default: true,
      stretches: [
        {
          name: "Hamstring",
          isOneSided: true,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        }
      ]
    }],
    exercises: [
      {
        name: "Hamstring",
        isOneSided: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Butterfly",
        isOneSided: false,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Splits",
        isOneSided: false,
        type: 'stretch',
        duration: 2
      }
    ]
}

export default defaultValues;
