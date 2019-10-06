// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
   return drivers.filter((driver) => {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let names = drivers.filter((driver) => {
    if (driver.revenue > revenue){
    return driver.name;
    }
  });
  return [...new Set(names.map(name => name.name))];
}

function exactMatch(drivers, driverObj){
  let attribute = Object.keys(driverObj)[0];
  return drivers.filter((driver) => {
    if (driverObj[attribute] === driver[attribute]){
      return driver;
    }
  }); 
}

function exactMatchToList(drivers, driverObj){
  let attribute = Object.keys(driverObj)[0];
  let names = drivers.filter((driver) => {
    if (driverObj[attribute] === driver[attribute]){
      return driver.name;
    }
  }); 
  return names.map(name => name.name);
}

let drivers = [{ name: 'Sally',   revenue: 400 },
      { name: 'Annette', revenue: 200 },
      { name: 'Jim',     revenue: 150 },
      { name: 'Sally',   revenue: 200 }];

console.log(exactMatchToList(drivers, drivers[0]));
// driversWithRevenueOver(drivers, 250);