// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function (driv) {return driv.revenue > rev; });
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(function(driv) {
    return driv.name;
});
}

function exactMatch(drivers, thing) {
  return drivers.filter(function (driv) {return driv[Object.keys(thing)[0]] === Object.values(thing)[0]; });
}

function exactMatchToList(drivers, thing) {
  return exactMatch(drivers, thing).map(function(driv) {
    return driv.name;
  });

}
