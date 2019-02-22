// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(richDriver){
    return richDriver.name;
  });
}

function exactMatch(drivers, attribute){
  return drivers.filter(function(driver){
    let attributes = false;

    for (const key in attribute) {
      attributes = driver[key] === attribute[key];
    }

    return attributes;
  });

}

function exactMatchToList(drivers, attribute){
  return exactMatch(drivers, attribute).map(function(matchedDriver){
    return matchedDriver.name
  });

}
