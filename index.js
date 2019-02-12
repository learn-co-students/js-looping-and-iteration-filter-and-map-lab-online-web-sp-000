function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name;
  });
}

function exactMatch(drivers, driver) {
  return drivers.filter(d => {
    for (key in driver) {
      if (driver[key] !== d[key]) {
        return false;
      }
    }
    return true;
  });
}

function exactMatchToList(drivers, driver) {
  return exactMatch(drivers, driver).map(d => {
    return d.name;
  });
}
