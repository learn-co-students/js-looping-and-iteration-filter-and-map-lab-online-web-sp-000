function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  arr = driversWithRevenueOver(drivers, revenue)
  return arr.map(obj => obj.name)
}

function exactMatch(drivers, matchItem) {
  const itemKey = Object.keys(matchItem)[0];
  const itemValue = Object.values(matchItem)[0];

  return drivers.filter(driver => driver[itemKey] === itemValue)
}

function exactMatchToList(drivers, matchItem) {
  arr = exactMatch(drivers, matchItem)
  return arr.map(obj => obj.name)
}
