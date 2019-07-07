// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(driver => driver.revenue > num);
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(driver => driver.name);
}

function exactMatch(drivers, obj) {
  return drivers.filter((driver) => {
     const key = Object.keys(obj)[0];
     return driver[key] == obj[key];
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name);
}
