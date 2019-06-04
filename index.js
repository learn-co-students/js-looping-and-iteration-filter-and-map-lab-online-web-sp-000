// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
   return drivers.filter(function (f) { return f.revenue > revenue; });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(f) {
    return f.name;
  });
}

function exactMatch(drivers, obj){
  const mykey = Object.keys(obj);
  return drivers.filter(function (f) { return f[mykey] === obj[mykey]; });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(f) {
    return f.name;
  });
}
