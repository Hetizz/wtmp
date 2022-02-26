const today = new Date().toISOString().split('T')[0];

const getDayIndex = () => {
  let weekday = new Date().getDay() - 1;
  // weekend no service, use fridays menu
  if (weekday >= 5) {
    weekday = 4;
  } else if (weekday < 0) {
    weekday = 4;
  }
  return weekday;
};

export {getDayIndex, today};
