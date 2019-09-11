// Code your solution here:

function driversWithRevenueOver(listOfDrivers, revenue) {
  return listOfDrivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(listOfDrivers, revenue) {
  return driversWithRevenueOver(listOfDrivers, revenue).map
  (function(driver) {
    return driver.name
  })
}

function exactMatch(listOfDrivers, match) {
  return listOfDrivers.filter(function (driver) {
    let matching = false
    for (const key in match) {
      matching = driver[key] === match[key]
    }
    return matching
  })
}

function exactMatchToList(listOfDrivers, match) {
  return exactMatch(listOfDrivers, match).map
  (function(driver) {
    return driver.name
  })
}