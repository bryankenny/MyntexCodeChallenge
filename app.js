// variables

var homeCity;
var destCity;
var departureCity;

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
  var fin;

   // console.log(Object.keys(routeObj))
  // for (var i=0; i<routeObj.length; i++){
  //   console.log(startToEnd);
  //   console.log(Object.keys(routeObj))
  // }

//   for (var i in routeObj) {
//       console.log(Object.keys(routeObj))
//   }

Object.keys(routeObj).forEach(key => {
  let value = routeObj[key];
  // console.log(key + value)
  if (startToEnd === key) {
    console.log('finally')
  }
  else {
    console.log('yessum')
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

  checkTime();

})
})
})



