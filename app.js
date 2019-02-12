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

// variables

var cityObj = {};
var routeObj = {};

// app

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter a new city ID/name? y/n `, (answer) => {
 enterCity(answer);

})

