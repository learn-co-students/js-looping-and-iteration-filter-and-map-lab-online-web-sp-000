// Code your solution here:

function driversWithRevenueOver(arrayOfDriverObjects, number) {
  return arrayOfDriverObjects.filter(driverObject => driverObject.revenue > number);
}


function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(driverObject => driverObject.name);
}


// function exactMatch(arrayOfDriverObjects, unknownObject) {
//   return arrayOfDriverObjects.filter(driverObject => Object.keys(driverObject).includes(Object.keys(unknownObject)[0]) && 
//   driverObject[Object.keys(unknownObject)[0]] === unknownObject[Object.keys(unknownObject)[0]]
//   );
// }

function exactMatch (arrayOfDriverObjects, unknownObject) {
  return arrayOfDriverObjects.filter(function(driverObject) {
    let matches
    for (const key in unknownObject) {
      matches = driverObject[key] === unknownObject[key]
    }
    return matches
  })
}


function exactMatchToList(arrayOfDriverObjects, object) {
  return exactMatch(arrayOfDriverObjects, object).map(driverObject => driverObject.name);
}