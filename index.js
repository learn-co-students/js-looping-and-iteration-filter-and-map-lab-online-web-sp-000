
function driversWithRevenueOver(array, num) {
   const over =  array.filter(arr => arr.revenue > num);
    return over;
};

function driverNamesWithRevenueOver(array, num){
    const nameOver= array.filter(arr => arr.revenue > num);
    return nameOver.map(name => name.name);
};

function exactMatch(array, obj) {
    return array.filter(function (arr) {
        for (const key in obj) {
            return arr[key]===obj[key];
        }
    })   
};

function exactMatchToList(array, obj) {
    return exactMatch(array, obj).map(attr => attr.name);
};

