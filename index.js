// Code your solution here:

// function driversWithRevenueOver(arrayOfDriverObjects, revenueNumber) {
//   return arrayOfDriverObjects.filter(function(driverObject) {
//     return driverObject.revenue > revenueNumber
//   })
// }

// function driverNamesWithRevenueOver(arrayOfDriverObjects, revenueNumber) {
//   return driversWithRevenueOver(arrayOfDriverObjects, revenueNumber).map(function(driverObject) {
//     return driverObject.name
//   })
// }

// function exactMatch (arrayOfDriverObjects, unknownObject) {
//   return arrayOfDriverObjects.filter(function(driverObject) {
//     // let matches = []
//     let matches
//     for (const key in unknownObject) {
//       matches = driverObject[key] === unknownObject[key]
//     }
//     return matches
//   })
// }

// function exactMatchToList (arrayOfDriverObjects, unknownObject) {
//   return exactMatch (arrayOfDriverObjects, unknownObject)
//     .map(function (driverObject) {
//       return driverObject.name;
//     });
// }

function driversWithRevenueOver(array, number) {
  return array.filter(element => element.revenue > number);
}


function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(element => element.name);
}


function exactMatch(array, object) {
  return array.filter(element => Object.keys(element).includes(Object.keys(object)[0]) && 
   element[Object.keys(object)[0]] === object[Object.keys(object)[0]]
  );
}


function exactMatchToList(array, object) {
  return exactMatch(array, object).map(element => element.name);
}