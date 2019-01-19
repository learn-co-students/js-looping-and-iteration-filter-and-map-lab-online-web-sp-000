function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function (driver) { return driver.revenue > num});
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(function (driver) {
    return driver.name;
  });
}

function objToKeyValue(obj) {
  for (att in obj) {
    return [att, obj[att]];
  }
}

function exactMatch(drivers, obj) {
  let key = objToKeyValue(obj)[0];
  let value = objToKeyValue(obj)[1];
  return drivers.filter(function (driver) {
    return driver[key] === value;
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver) {
    return driver.name;
  })
}
