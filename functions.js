function ifQuestion(answer) {

  if ({answer}.answer === 'y'){
    console.log("hello")
    readline.question(`What's the city's ID? `, (cityId) => {
    console.log(`City ID: ${cityId}`)

    readline.question(`The name of the city? `, (name) => {
    console.log(`City name: ${name}`)

    cityObj[{cityId}.cityId] = {name}.name;
    console.log(cityObj)
    readline.close()
  })
})
  }
  else if ({answer}.answer === 'n') {
    console.log("goodbye")
    readline.close()
  }
}

// variables

var homeCity;

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
  RI: "NYC",
  RI: "CI",
  RI: "TO",
  P: "TO",
  P: "RO",
  P: "M",
  NYC: "CGY",
  NYC: "K",
  CGY: "CI",
  CGY: "K",
  CGY: "TO",
  CI: "RI",
  K: "M",
  K: "RO",
  K: "P",
  M: "RO",
  M: "TO",
  RO: "M",
  RO: "CGY",
  TO: "NYC",
};

// functions

function routeMaker(cityId) {

  readline.question(`Whats the city you're leaving from's ID? `, (cityId) => {
  console.log(`City ID: ${cityId}`)

  readline.question(`Whats your desinations ID? `, (destId) => {
  console.log(`Destination ID: ${destId}`)

  routeObj[{cityId}.cityId] = {destId}.destId;
  console.log(routeObj)

})
  })
}

function enterCity(answer) {

  if ({answer}.answer === 'y'){

    readline.question(`What's the city's ID? `, (cityId) => {
    console.log(`City ID: ${cityId}`)

    readline.question(`The name of the city? `, (name) => {
    console.log(`City name: ${name}`)

    cityObj[{cityId}.cityId] = {name}.name;
    console.log(cityObj)

    readline.question(`Enter another city? y/n `, (answer) => {
      enterCity(answer);
})
  })
})
  }

  else if ({answer}.answer === 'n') {
    console.log("Now we will enter in the routes. Start with the departure city ID and then neter in the desination city's ID");
    routeMaker();
  }
}

// app

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter a new city ID/name? y/n `, (answer) => {
 enterCity(answer);

})


   if (startToEnd = Object.keys(routeObj)) {
    console.log('herp')
   }
   else {
    console.log("derp")
   }

  for (var prop in routeObj) {

    console.log(routeObj[prop])
    // if (startToEnd = routeObj[prop]) {
    //   console.log(prop)
    // }
    // else {
    //   console.log('nope')
    // }
    // if (startToEnd = routeObj[prop]) {
    //   console.log('yup')
    // }
    // else {
    //   console.log('nope')
    // }
  }

