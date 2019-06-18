// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
    return driver.filter(function (drivers) {
        return drivers.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(driver, revenue) {
    return driversWithRevenueOver(driver, revenue).map(function (driver) {
        return driver.name
    });
}

function exactMatch(driver, object) {
    return driver.filter(function (drivers) {
      let objects = false;
      for (const key in object) {
        objects = drivers[key] === object[key];
      }
      return objects;
    });
  }
  
  function exactMatchToList (driver, object) {
    return exactMatch(driver, object).map(function (drivers) {
        return drivers.name;
      });
  }