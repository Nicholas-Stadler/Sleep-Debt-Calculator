function getSleepHours(day) {
    switch (day) {
      case 'Monday':
      return 8
      break;
      case 'Tuesday':
      return 7
      break;
      case 'Wednesday':
      return 6
      break;
      case 'Thursday':
      return 5
      break;
      case 'Friday':
      return 6
      break;
      case 'Saturday':
      return 6
      break;
      case 'Sunday':
      return 6
      break;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours())
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    switch (true) {
      case (actualSleepHours === idealSleepHours) :
        console.log('You got perfect sleep');
        break;
      case (actualSleepHours > idealSleepHours) :
        console.log('You got more than enough sleep');
        console.log(actualSleepHours - idealSleepHours);
        break;
      case (idealSleepHours > actualSleepHours) :
        console.log('You should get some more rest');
        console.log(idealSleepHours - actualSleepHours);
        break;
    }
  };
  
  // const calculateSleepDebt = () => {
  //   const actualSleepHours = getActualSleepHours();
  //   const idealSleepHours = getIdealSleepHours();
  //   if (actualSleepHours === idealSleepHours) {
  //     console.log('You got perfect sleep');
  //   } else if {
  //     actualSleepHours > idealSleepHours
  //     console.log('You got more than enough sleep');
  //   } else {
  //     console.log('You should get some more rest');
  //   }
  
  calculateSleepDebt();
  