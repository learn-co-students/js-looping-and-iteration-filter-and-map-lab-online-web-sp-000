// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(person) {
    return person.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newDrivers = driversWithRevenueOver(drivers, revenue)
  return newDrivers.map(function(person) {
    return person.name
  })
}

// exactMatch(drivers, { revenue: 3000 })
function exactMatch(drivers, match) {
  matchKey = Object.keys(match)[0]
  return drivers.filter(function(personObject) {
    return match[matchKey] === personObject[matchKey]
  })
}

function exactMatchToList(drivers, match) {
  newDrivers = exactMatch(drivers, match)
  return newDrivers.map(function(driver) {
    return driver.name
  })
}
