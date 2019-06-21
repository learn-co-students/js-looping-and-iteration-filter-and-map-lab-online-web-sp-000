// Code your solution here:
function driversWithRevenueOver(drivers, money) {
  let newDrivers = drivers.filter(function(driver) { return driver.revenue > money; });
  return newDrivers;
}

function driverNamesWithRevenueOver(drivers, money) {
  let newDriversNames = driversWithRevenueOver(drivers, money).map(function(driver) { return driver.name; });
  return newDriversNames;
}

function exactMatch(drivers, obj) {
  let newDrivers = drivers.filter(function(driver) {
    for (const key in obj) {
      return driver[key] === obj[key];
    }
  })
  return newDrivers;
}

function exactMatchToList(drivers, obj) {
  let newDriversNames = exactMatch(drivers, obj).map(function(driver) { return driver.name; });
  return newDriversNames;
}
