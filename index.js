// Code your solution here:
function driversWithRevenueOver(array, number){
  return array.filter(function(driver) {
    return driver.revenue > number
  })
}

function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(function(driver) {
    return driver.name
  })
}

function exactMatch(array, object) {
  return array.filter(function(driver) {
    for (const key in object) {
      if (driver[key] === object[key]) {
        return true
      }
    }
    return false
  })
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(function(driver) {
    return driver.name
  })
}
