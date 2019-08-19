// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const selectDrivers = driversWithRevenueOver(drivers, revenue);
  return selectDrivers.map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, obj){
  return drivers.filter(function (driver){
   for (const key in obj) {
      if (driver[key] === obj[key]){
       return driver;}
    }
  })
}

function exactMatchToList(drivers, obj){
  const selectDrivers = exactMatch(drivers, obj);
  return selectDrivers.map(function (driver) {
    return driver.name
  })
}
