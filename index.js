// Code your solution here:

function driversWithRevenueOver(drivers, inputRev){
    return drivers.filter(function(d){
        return d.revenue > inputRev;
    });
}

function driverNamesWithRevenueOver(drivers, inputRev){
    return driversWithRevenueOver(drivers, inputRev).map(function(d){
            return d.name; 
    });
}

function exactMatch(drivers, attribute){
    return drivers.filter(function (d){
        let matches

        for (const k in attribute){
            matches = d[k] === attribute[k];
        }
        return matches
    });
}

function exactMatchToList(drivers, attribute){
    return exactMatch(drivers, attribute).map(function(d){
        return d.name;
    });
}
