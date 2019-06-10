// Code your solution here:
function driversWithRevenueOver(obj, revenue) {
  return obj.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(obj, revenue) {
  return driversWithRevenueOver(obj, revenue).map(function(driver) {
    return driver.name;
  });
};

function exactMatch(obj, attribute) {
  return obj.filter(function(driver) {
    let result = [];
     for (const key in attribute) {
      result = driver[key] === attribute[key]};
    return result;
  });
};

function exactMatchToList(obj, attribute) {
  return exactMatch(obj, attribute).map(function(driver) {
    return driver.name;
  })
};
