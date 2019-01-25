// Code your solution here:

function driversWithRevenueOver(drivers, revenue){ 
  return drivers.filter(function(dman){ 
    return dman.revenue > revenue ; 
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function (dman){
    return dman.name;
  });
}


function exactMatch(drivers, obj) {
  return drivers.filter(function (dman) {
    for(const key in obj) {
      return dman[key] === obj[key]
    }
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (dm){
    return dm.name;
  });
}
