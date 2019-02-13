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
  RI2NYC: true,
  RI2CI: true,
  RI2TO: true,
  P2TO: true,
  P2RO: true,
  P2M: true,
  NYC2CGY: true,
  NYC2K: true,
  CGY2CI: true,
  CGY2K: true,
  CGY2TO: true,
  CI2RI: true,
  K2M: true,
  K2RO: true,
  K2P: true,
  M2RO: true,
  M2TO: true,
  RO2M: true,
  RO2CGY: true,
  TO2NYC: true,
};

// functions

function checkTime() {

  var startToEnd = departureCity + '2' + destCity;

      Object.keys(routeObj).forEach(key => {

        let value = routeObj[key];

        if (key.substring(0, 3) === startToEnd.substring(0, 3)) {
           console.log(key)
        }

      });
}

function checkRoute() {

  var startToEnd = departureCity + '2' + destCity;

    Object.keys(routeObj).forEach(key => {

      let value = routeObj[key];

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
          console.log('* Sorry, no route was found. *')
          readline.close()
        }
      }

      // else if (key != startToEnd) {
      //   checkTime();
      // }

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
  checkTime();

})
})
})
})


