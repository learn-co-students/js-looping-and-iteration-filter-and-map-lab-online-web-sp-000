// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter( function(driver) { return driver.revenue > revenue })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {return driver.name} )
}

function exactMatch(drivers, specs) {
  desiredKey = Object.keys(specs)[0]
  return drivers.filter(function(driver) {return driver[`${desiredKey}`] === specs[`${desiredKey}`] })
}

function exactMatchToList(drivers, specs) {
  return exactMatch(drivers, specs).map( function(driver) { return driver.name})
}
