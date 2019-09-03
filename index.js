// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, criteria) {
  return drivers.filter (function(driver) {
    let attribute = false;

    for (const key in criteria) {
      attribute = driver[key] === criteria[key];
    }
    return attribute;
  })
}

function exactMatchToList(drivers, criteria) {
  return exactMatch(drivers, criteria)
  .map(function (driver) {
    return driver.name;
  })
}
