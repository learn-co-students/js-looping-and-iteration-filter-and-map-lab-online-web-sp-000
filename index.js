// Code your solution here:
function driversWithRevenueOver(drivers, rev)
{
    return drivers.filter(function (user) { return user.revenue > rev; }) ;
}

function driverNamesWithRevenueOver(drivers, rev)
{
     return driversWithRevenueOver(drivers, rev).map(function(user) { return user.name; });
}

function exactMatch(drivers, obj)
{
    return drivers.filter(function (user) { return user[Object.keys(obj)[0]] === Object.values(obj)[0] ; }) ;
}

function exactMatchToList(drivers, obj)
{
    return exactMatch(drivers, obj).map(function (user) { return user.name ; }) ;
}
