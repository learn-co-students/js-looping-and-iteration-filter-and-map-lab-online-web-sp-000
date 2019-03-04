// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue )
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newDrivers = driversWithRevenueOver(drivers,revenue)
  return newDrivers.map (driver => driver.name)
}

function exactMatch(drivers, match){
  return drivers.filter(function (driver) {
    let matches = []
    for (const key in match) {
      matches = driver[key] === match[key];
    }
    return matches;
  })
}

function exactMatchToList(drivers, match){
  matchedDrivers = exactMatch(drivers, match)
  return matchedDrivers.map(driver => driver.name)
}
