
// Returns how many days does a month have
export function daysInMonth (date) { 
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

// Returns how many days until a given date
export function daysUntilDate(date) {
  const todayDate = new Date();
  const endDate = new Date(date);
  const monthDays = daysInMonth(todayDate);
  const daysUntilMonthEnds = monthDays - todayDate.getDate();

  const endDateDays = new Date(date).getDate();
  let daysToEnd = new Date();

  if(todayDate.getMonth() + 1 === endDate.getMonth() + 1) {
    daysToEnd = monthDays - endDate.getDate();
  } else {
    daysToEnd = daysUntilMonthEnds + endDateDays;
  }

  return daysToEnd;
}