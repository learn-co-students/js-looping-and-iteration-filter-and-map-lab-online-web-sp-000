// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(function(driver){return driver.name})
}

function exactMatch(drivers, obj){
    const attribute = Object.keys(obj)[0]
    return drivers.filter(function(driver){return driver[attribute] === obj[attribute]})
}

function exactMatchToList(drivers, obj){
    return exactMatch(drivers, obj).map(function(driver){return driver.name})
}