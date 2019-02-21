// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filtered = driversWithRevenueOver(drivers, revenue);
  return filtered.map(driver => driver.name);
}

function exactMatch(drivers, obj) {
  let key = Object.keys(obj).toString();
  let value = Object.values(obj).toString();
  return drivers.filter(driver => driver[key] === obj[key]);
}

function exactMatchToList(drivers, obj) {
  let filtered = exactMatch(drivers, obj);
  return filtered.map(driver => driver.name)
}
