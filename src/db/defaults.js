const defaultValues = {
  settings: {
    rest: 1,
    restBetween: 5,
    duration: 2
  },
  routines: [{
    name: "Example",
    default: true,
    exercises: [
        {
          name: "Hamstring",
          isOneSided: true,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 1
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 1
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
          duration: 2
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 1
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 1,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
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
          duration: 1
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
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
          name: "Rest",
          isOneSided: false,
          type: 'rest',
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
          name: "Pigeon",
          isOneSided: true,
          default: true,
          type: 'stretch',
          duration: 2
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 1
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 1,
          type: 'stretch'
        },
        {
          name: "Meditate",
          isOneSided: false,
          type: 'rest',
          duration: 1
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
