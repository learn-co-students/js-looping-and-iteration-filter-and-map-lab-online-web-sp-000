// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
    return drivers.filter(driver => {
       return driver.revenue > revenue
    });

};

const driverNamesWithRevenueOver = (drivers, revenue) => {
return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name;
});
};

const exactMatch = (drivers, other) => {
return drivers.filter(driver => {
    let matches = false;
    for (const key in other) {
        matches =   driver[key] === other[key];
    };
    return matches;
})
};

const exactMatchToList = (drivers, other) => {
return exactMatch(drivers, other).map(driver => {
    return driver.name;
})
};