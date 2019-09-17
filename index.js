// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newDrivers = [];
  drivers.map(function (driver){
    if(driver.revenue > revenue){
      newDrivers.push(driver.name);
    }
  });
  return newDrivers;
}

function exactMatch(drivers, obj){
  const key = Object.keys(obj);
  const value = Object.values(obj);

  return drivers.filter(function (driver){
    return driver[key] == value;
  });
}

function exactMatchToList(drivers, obj){
  const driverNames = [];
  const key = Object.keys(obj);
  const value = Object.values(obj);

  drivers.map(function(driver){
    if (driver[key] == value){
      driverNames.push(driver.name);
    }
  });

  return driverNames;
}