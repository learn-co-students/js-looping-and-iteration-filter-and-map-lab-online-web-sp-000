// Code your solution here:
function driversWithRevenueOver(driversArr, num) {
  return driversArr.filter(function(driverObj) {
    return driverObj.revenue > num;
  });
};

function driverNamesWithRevenueOver(driversArr, num) {
  const newArr = driversWithRevenueOver(driversArr, num);
  return newArr.map(function(driverObj){
    return driverObj.name;
  });
};

function exactMatch(arr, matchObj){
  return arr.filter(function(driver){
    return driver[Object.keys(matchObj)[0]] === matchObj[Object.keys(matchObj)[0]];
  });
};

function exactMatchToList(arr, matchObj) {
  return exactMatch(arr, matchObj).map(function(driver){
    return driver.name;
  });
};
