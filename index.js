// Code your solution here:
function driversWithRevenueOver(array, amount) {
    const newArray = array.filter(driver => driver.revenue > amount);
    return newArray;
}

function driverNamesWithRevenueOver(array, amount) {
    const newArray = array.filter(driver => driver.revenue > amount).map(driver => driver.name);
    return newArray;
}

function exactMatch(array, value){
  const newArray = array.filter(driver => driver.name === value.name || driver.revenue === value.revenue);
  return newArray;
}

function exactMatchToList(array, value) {
  const newArray = array.filter(driver => driver.name === value.name || driver.revenue === value.revenue).map(driver => driver.name);
  return newArray;
}
