// Code your solution here:
function driversWithRevenueOver(driver, revenue){
   return driver.filter(function(driver){
     return driver.revenue > revenue;
   });
}

function driverNamesWithRevenueOver(driver, revenue){
   return driversWithRevenueOver(driver, revenue).map(function(driver){
       return driver.name;
  });
}

function exactMatch(drivers, selectedDriver){
   // return driver.filter(function(driver){
   return drivers.filter(function(driver){
     for (var key in selectedDriver) {
       return driver[key] === selectedDriver[key];
     }
  });

}

function exactMatchToList(drivers, keyValue){
  return exactMatch(drivers, keyValue).map(function(drivers){
      return drivers.name;
  });
}

// }
