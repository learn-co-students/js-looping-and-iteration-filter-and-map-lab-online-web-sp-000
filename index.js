// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    })
}

function exactMatch(drivers, value) {
  return drivers.filter(function (driver) {
    let values = false;

    for (const key in value) {
     values = driver[key] === value[key];
    }

    return values;
  });
}

function exactMatchToList(drivers, value) {
  return exactMatch(drivers, value)
    .map(function (driver) {
      return driver.name;
    });
}