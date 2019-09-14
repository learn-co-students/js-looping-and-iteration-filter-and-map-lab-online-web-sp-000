

function driversWithRevenueOver(drivers, revenue) {

    // returns an empty array if there is no match
    return drivers.filter(function (driver) {

        // returns an array of all matching drivers
        return driver.revenue > revenue;
    });
}


function driverNamesWithRevenueOver(drivers, revenue) {

    // returns an empty array if there is no match
    return driversWithRevenueOver(drivers, revenue).map(function (driver) {

        // returns an array of all matching drivers names as string
        return driver.name;
    });
}


function exactMatch(drivers, match) {

    // returns an empty array if there is no match
    return drivers.filter(function (driver) {

        let matches = false;

        for (const key in match) {
            matches = driver[key] === match[key];
        }

        // returns an array of all matching drivers
        return matches;
    });
}


function exactMatchToList(drivers, match) {

    // returns an empty array if there is no match
    return exactMatch(drivers, match).map(function (driver) {

        // returns an array of names for all matching drivers
        return driver.name;
    });

}
