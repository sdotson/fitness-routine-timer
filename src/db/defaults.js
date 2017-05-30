const defaultValues = {
  settings: {
    rest: 10,
    restBetween: 5,
    duration: 45
  },
  routines: [{
    name: "Example",
    default: true,
    exercises: [
        {
          name: "Hamstring",
          isOneSided: true,
          duration: 45,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 10
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 45,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 10
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        }
      ]
    }, {
      name: "Standard",
      default: true,
      exercises: [
        {
          name: "Seated Hamstring (one-sided)",
          isOneSided: true,
          default: true,
          type: 'stretch',
          duration: 45
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 30,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 7
        },
        {
          name: "Cobra Abdominal stretch",
          isOneSided: false,
          default: true,
          type: 'stretch',
          duration: 45
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Child's pose",
          isOneSided: false,
          default: true,
          type: 'stretch',
          duration: 30
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Lunge Quad",
          isOneSided: true,
          default: true,
          type: 'stretch',
          duration: 45
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 10
        },
        {
          name: "Lunge Quad (holding foot)",
          isOneSided: true,
          default: true,
          type: 'stretch',
          duration: 30
        },
        {
          name: "Pigeon",
          isOneSided: true,
          default: true,
          type: 'stretch',
          duration: 45
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 10
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 90,
          type: 'stretch'
        },
        {
          name: "Meditate",
          isOneSided: false,
          type: 'rest',
          duration: 300
        }
      ]
    }],
    exercises: [
      {
        name: "Rest",
        isOneSided: false,
        default: true,
        type: 'rest',
        duration: 2
      },
      {
        name: "Meditate",
        isOneSided: false,
        default: true,
        type: 'rest',
        duration: 2
      },
      {
        name: "Cobra Abdominal stretch",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Child's pose",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Seated Hamstring (one-sided)",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Floor hip",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Pigeon",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Standing Quad",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Cat Stretch",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Lunge Quad",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Lunge Quad (holding foot)",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Seated Hamstring",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Butterfly",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Splits",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Wrist Extension",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Wrist Flexion",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Thumb",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      }
    ]
}

export default defaultValues;
