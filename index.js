// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, object) {
    const objectKey = Object.keys(object)
    return drivers.filter(driver => driver[objectKey] === object[objectKey])
}

function exactMatchToList (drivers, matcher){
return exactMatch(drivers, matcher).map(driver => driver.name);
}
