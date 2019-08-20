function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(driver) {
    return driver.revenue > rev;
  });
};

function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter(function(driver) {
    return driver.revenue > rev;
  }).map(function(driver) {
    return driver.name;
  });
};

function exactMatch(drivers, obj) {
  const objKey = Object.keys(obj)[0];
  return drivers.filter(function(driver) {
    return driver[objKey] === obj[objKey];
  });
};

function exactMatchToList(drivers, obj) {
  const objKey = Object.keys(obj)[0];
  return drivers.filter(function(driver) {
    return driver[objKey] === obj[objKey];
  }).map(function(driver) {
    return driver.name;
  });
};
