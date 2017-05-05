const defaultValues = {
  routines: [{
    name: "regular",
    default: true,
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
      default: true,
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
    }]
}

export default defaultValues;
