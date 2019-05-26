function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue} );
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const newDrivers = driversWithRevenueOver(drivers, revenue);
    return  newDrivers.map(function(driver) { return driver.name});
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    let match;
    for (const key in obj) {
      match = driver[key] === obj[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, obj) {
  let driverList = exactMatch(drivers, obj);
  return driverList.map(function(driver) {return driver.name});
}
