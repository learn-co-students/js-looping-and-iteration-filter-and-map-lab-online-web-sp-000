// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) {
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const temporaryArray = driversWithRevenueOver(drivers, revenue)
    return temporaryArray.map(function(driver){
        return driver.name;
    })
}

function exactMatch(drivers, condition){
    return drivers.filter(function(driver){
        key = Object.keys(condition)[0];
        return driver[key] === condition[key];
    })
}

function exactMatchToList(drivers, condition){
    const array = exactMatch(drivers, condition);
    return array.map(function(driver){
        return driver.name;
    })
}
