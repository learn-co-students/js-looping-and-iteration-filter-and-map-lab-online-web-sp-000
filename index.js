// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  const winners = drivers.filter(function(driver){
    return driver.revenue > revenue
  });

  return winners.map(function(winner){
    return winner.name
  });
};

function exactMatch(drivers, object){
  return drivers.filter(function(driver){
    return driver[Object.keys(object)[0]] === Object.values(object)[0]
  });
};


function exactMatchToList(drivers, object){
  const answers = drivers.filter(function(driver){
    return driver[Object.keys(object)[0]] === Object.values(object)[0]
  });

  return answers.map(function(answer){
    return answer.name
  });
};
