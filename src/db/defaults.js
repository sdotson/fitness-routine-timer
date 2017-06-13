const defaultValues = {
  settings: {
    restDefault: 10,
    restBetween: 5,
    taskDefault: 45
  },
  routines: [{
    name: "Ab blaster",
    default: true,
    exercises: [
        {
          name: "Plank",
          isOneSided: false,
          duration: 60,
          type: 'exercise'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 30
        },
        {
          name: "Crunches",
          isOneSided: false,
          duration: 60,
          type: 'exercise'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 30
        },
        {
          name: "Leg lifts",
          isOneSided: false,
          duration: 60,
          type: 'exercise'
        }
      ]
    }, {
      name: "Insanity",
      default: true,
      exercises: [
          {
            name: "Plank",
            isOneSided: false,
            duration: 60,
            type: 'exercise'
          },
          {
            name: "Rest",
            isOneSided: false,
            type: 'rest',
            duration: 30
          },
          {
            name: "Crunches",
            isOneSided: false,
            duration: 60,
            type: 'exercise'
          },
          {
            name: "Rest",
            isOneSided: false,
            type: 'rest',
            duration: 30
          },
          {
            name: "Leg lifts",
            isOneSided: false,
            duration: 60,
            type: 'exercise'
          },
          {
            name: "Rest",
            isOneSided: false,
            type: 'rest',
            duration: 30
          },
          {
            name: "Pull ups",
            isOneSided: false,
            duration: 60,
            type: 'exercise'
          },
          {
            name: "Rest",
            isOneSided: false,
            type: 'rest',
            duration: 30
          },
          {
            name: "Squats",
            isOneSided: false,
            duration: 60,
            type: 'exercise'
          },
          {
            name: "Rest",
            isOneSided: false,
            type: 'rest',
            duration: 30
          },
          {
            name: "Pushups",
            isOneSided: false,
            duration: 60,
            type: 'exercise'
          }
        ]
      }, {
      name: "Stretching",
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
          duration: 10
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
          duration: 10
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
          duration: 10
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
          duration: 10
        },
        {
          name: "Downward dog",
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
          duration: 45
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
          duration: 120,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 10
        },
        {
          name: "Wrist Extension",
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
          name: "Wrist Flexion",
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
        type: 'rest'
      },
      {
        name: "Meditate",
        isOneSided: false,
        default: true,
        type: 'rest'
      },
      {
        name: "Cobra abdominal stretch",
        isOneSided: false,
        default: true,
        type: 'stretch'
      },
      {
        name: "Child's pose",
        isOneSided: false,
        default: true,
        type: 'stretch'
      },
      {
        name: "Downward dog",
        isOneSided: false,
        default: true,
        type: 'stretch'
      },
      {
        name: "Seated Hamstring (one-sided)",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Floor hip",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Pigeon",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Standing Quad",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Cat Stretch",
        isOneSided: false,
        default: true,
        type: 'stretch'
      },
      {
        name: "Lunge Quad",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Lunge Quad (holding foot)",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Seated Hamstring",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Butterfly",
        isOneSided: false,
        default: true,
        type: 'stretch'
      },
      {
        name: "Splits",
        isOneSided: false,
        default: true,
        type: 'stretch'
      },
      {
        name: "Wrist Extension",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Wrist Flexion",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Thumb",
        isOneSided: true,
        default: true,
        type: 'stretch'
      },
      {
        name: "Pushups",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Pull ups",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Chin ups",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Plank",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Squats",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Lunges",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Run",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Jump rope",
        isOneSided: false,
        default: true,
        type: 'exercise'
      },
      {
        name: "Burpees",
        isOneSided: false,
        default: true,
        type: 'exercise'
      }
    ]
}

export default defaultValues;
