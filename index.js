function driversWithRevenueOver(drivers, revenue) {
  let newDrivers = []
  drivers.filter(function(driver){
    if(driver.revenue > revenue) {
      newDrivers.push(driver)
    }
  })
  return newDrivers
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = []
  drivers.filter(function(driver){
    if(driver.revenue > revenue) {
      newDrivers.push(driver.name)
    }
  })
  return newDrivers
}

function exactMatch(drivers, object) {
  let matches = []
  drivers.filter(function(driver) {
    if(driver.name === object.name || driver.revenue === object.revenue) {
    matches.push(driver)
    }
  })
  return matches
}

function exactMatchToList(drivers, object) {
  let matches = []
  drivers.filter(function(driver) {
    if(driver.name === object.name || driver.revenue === object.revenue) {
    matches.push(driver.name)
    }
  })
  return matches
}
