function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversRevenue = drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
    return driversRevenue.map(function(driver) {
      return driver.name
  })
}

function exactMatch(extendedDrivers, object) {
  const key = Object.keys(object)[0]
    return extendedDrivers.filter(function(extendedDriver) {
      return extendedDriver[key] === object[key];
    })
}

function exactMatchToList(extendedDrivers, object) {
  const key = Object.keys(object)[0]
    const matchingDrivers = extendedDrivers.filter(function(extendedDriver) {
      return extendedDriver[key] === object[key]
    })
      return matchingDrivers.map(function(matchingDriver) {
        return matchingDriver.name;
      })
}
// Code your solution here:
