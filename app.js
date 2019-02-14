// variables

var homeCity;
var destCity;
var departureCity;
var desiredTravelTime;
var travelTime = 1;

// objects

var cityObj = {
  CGY: 'Calgary',
  CI: "Chichen Itza",
  K: "Kuala Lampur",
  M: "Moscow",
  NYC: "New York City",
  P: "Paris",
  RI: 'Rio de Janeiro',
  RO: "Rome",
  TO: "Toronto",
};

var routeObj = {
  RI2NYC: "NYC",
  RI2CI: "CI",
  RI2TO: "TO",
  P2TO: "TO",
  P2RO: "RO",
  P2M: "M",
  NYC2CGY: "CGY",
  NYC2K: "K",
  CGY2CI: "CI",
  CGY2K: "K",
  CGY2TO: "TO",
  CI2RI: "RI",
  K2M: "M",
  K2RO: "RO",
  K2P: "P",
  M2RO: "RO",
  M2TO: "TO",
  RO2M: "M",
  RO2CGY: "CGY",
  TO2NYC: "NYC"
};

// functions

function checkTime() {

  var startToEnd = departureCity + '2' + destCity;

      Object.keys(routeObj).forEach(key => {

        let value = routeObj[key];
        var routeObjKeyDest = key.split("2").pop();

        if (key.substring(0, 3) === startToEnd.substring(0, 3)) {

           var newKey = key;
           console.log(newKey);

        }

      });
}

function checkRoute() {

  var startToEnd = departureCity + '2' + destCity;

    Object.keys(routeObj).forEach(key => {

      let value = routeObj[key];
      var routeObjKeyDest = key.split("2").pop();

      if (startToEnd === key && homeCity === destCity && travelTime <= desiredTravelTime) {
        console.log('* Success! A route was found! *')
        readline.close()
      }

      else if (startToEnd === key && homeCity === destCity && travelTime > desiredTravelTime) {
        console.log('* Sorry, no route was found. *')
        readline.close()
      }

      else if (startToEnd === key && homeCity != destCity) {

        travelTime += 1;

        if (travelTime <= desiredTravelTime) {
          console.log('* Success! A route was found! *')
          readline.close()
        }

        else {
          console.log('* Sorry, no route was found (perhaps because of time). *')
          console.log("* Here are the destinations available from your departure city: *")
          readline.close()
          checkTime();
        }
      }


  });

}



// app

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Please enter your home city: `, (homeCityParameter) => {
  homeCity = homeCityParameter;
  console.log(homeCity)

readline.question(`Please enter your departure city: `, (departureCityParameter) => {
  departureCity = departureCityParameter;
  console.log(departureCity)

readline.question(`Please enter your destination city: `, (destCityParameter) => {
  destCity = destCityParameter;
  console.log(destCity)

readline.question(`How long can it take? `, (travelTimeParameter) => {
  desiredTravelTime = travelTimeParameter;

  checkRoute();
  // checkTime();

})
})
})
})


