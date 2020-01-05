// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map (function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, description) {
  return drivers.filter( function(driver){

    let descr = false

    for (const key in description) {
      descr = driver[key] === description[key];
    }

    return descr;
  });
}

function exactMatchToList(drivers, description){
 return exactMatch(drivers, description).map (function (driver){
      return driver.name
 })
}
