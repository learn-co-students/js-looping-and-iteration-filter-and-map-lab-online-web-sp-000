// Code your solution here:
function driversWithRevenueOver(driverArray, revenueThreshold){
  
  return driverArray.filter(function(driver){
    if(driver.revenue > revenueThreshold){ return driver; }
  });
}

function driverNamesWithRevenueOver(driverArray, revenueThreshold){
  
  return driversWithRevenueOver(driverArray, revenueThreshold).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, driverAttributes){
  
  return drivers.filter(function(driver){
    
    let matching = true;
    for(const key in driverAttributes){
      if(driverAttributes[key] !== driver[key]){
        matching = false;
      }
    }
    return matching;
  });
}

function exactMatchToList(driver, driverAttributes){
  
  return exactMatch(driver, driverAttributes).map(function(driver){
    return driver.name;
  });
}