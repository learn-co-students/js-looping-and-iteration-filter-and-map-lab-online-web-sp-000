// Code your solution here:
function driversWithRevenueOver(array, revenue){
    return array.filter(d => d.revenue > revenue); 
}

function driverNamesWithRevenueOver(array, value){
    return driversWithRevenueOver(array, value).map(d => d.name);
    
}

function exactMatch(array, value){
    return array.filter(d => {
        for(const key in value){
            if(d[key] != value[key]){
                return false;
            }
        }
        return true;
    })
}

function exactMatchToList(array, value){
    return exactMatch(array, value).map(d => d.name);
}