function driversWithRevenueOver(drivers, revenue) {
  const driverArr = [];
  drivers.filter(driver => {
    if (driver.revenue > revenue) {
      driverArr.push(driver)
    }
  });
  return driverArr
}

function driverNamesWithRevenueOver(drivers, revenue) {
  arr = driversWithRevenueOver(drivers, revenue)
  return arr.map(obj => obj.name)
}

function exactMatch(drivers, matchItem) {
  const driverArr = [];
  const itemKey = Object.keys(matchItem)[0];
  const itemValue = Object.values(matchItem)[0];

  drivers.filter(driver => {
    if (driver[itemKey] === itemValue) {
      driverArr.push(driver)
    }
  });
  return driverArr
}

function exactMatchToList(drivers, matchItem) {
  arr = exactMatch(drivers, matchItem)
  return arr.map(obj => obj.name)
}
