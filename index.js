// Code your solution here:
function driversWithRevenueOver (drivers, minRevenue) {
  return drivers.filter(function (driver) { return driver.revenue > minRevenue; });
}

function driverNamesWithRevenueOver(drivers, minRevenue) {
  return driversWithRevenueOver(drivers, minRevenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, searchAttribute) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(searchAttribute)[0]] === Object.values(searchAttribute)[0];
  });
}

function exactMatchToList(drivers, searchAttribute) {
  return exactMatch(drivers, searchAttribute).map(function (driver) {
    return driver.name;
  });
}
