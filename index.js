// Code your solution here:
function driversWithRevenueOver (driverObjectsArray, revenue)
{
  return(driverObjectsArray.filter(function (driver)
  {
    return(driver.revenue > revenue);
  }
  ));
}

function driverNamesWithRevenueOver (driverObjectsArray, revenue)
{
  return(driversWithRevenueOver(driverObjectsArray, revenue).map(function (driver)
                                                  {
                                                    return(driver.name);
                                                  }
  ));
}

function exactMatch (driverObjectsArray, jsObject)
{
  return(driverObjectsArray.filter(function (driver)
  {
    let doesItMatch = false;

    for (const key in jsObject)
    {
      doesItMatch = driver[key] === jsObject[key];
    }

    return(doesItMatch);
  }
  ));
}

function exactMatchToList (driverObjectsArray, jSObject) 
{
  return(exactMatch(driverObjectsArray, jSObject).map(function (driver) 
                                      {
                                        return(driver.name);
                                      }
  ));
}
