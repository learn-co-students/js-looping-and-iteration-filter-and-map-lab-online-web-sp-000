// Code your solution here:

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function (driver) {
      return driver.revenue > rev;
    });
} 

function driverNamesWithRevenueOver(drivers, rev) {
  results = driversWithRevenueOver(drivers, rev);
  return results.map(function (result) {
    return result.name;
  })
} 

function exactMatch(drivers, attrObj) {
  return drivers.filter( function (driver) {
    attrKey = Object.keys(attrObj)[0];
    return driver[attrKey] === attrObj[attrKey];
  })
}  

function exactMatchToList(drivers, attrObj) {
  results = exactMatch(drivers, attrObj);
  return results.map( function (result) {
    return result['name'];
  })
}