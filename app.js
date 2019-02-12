// // variables

// var homeCity;

// var cityObj = {
//   CGY: 'Calgary',
//   CI: "Chichen Itza",
//   K: "Kuala Lampur",
//   M: "Moscow",
//   NYC: "New York City",
//   P: "Paris",
//   RI: 'Rio de Janeiro',
//   RO: "Rome",
//   TO: "Toronto",
// };

// var routeObj = {
//   RI: "NYC",
//   RI: "CI",
//   RI: "TO",
//   P: "TO",
//   P: "RO",
//   P: "M",
//   NYC: "CGY",
//   NYC: "K",
//   CGY: "CI",
//   CGY: "K",
//   CGY: "TO",
//   CI: "RI",
//   K: "M",
//   K: "RO",
//   K: "P",
//   M: "RO",
//   M: "TO",
//   RO: "M",
//   RO: "CGY",
//   TO: "NYC",
// };

// // functions

// function routeMaker(cityId) {

//   readline.question(`Whats the city you're leaving from's ID? `, (cityId) => {
//   console.log(`City ID: ${cityId}`)

//   readline.question(`Whats your desinations ID? `, (destId) => {
//   console.log(`Destination ID: ${destId}`)

//   routeObj[{cityId}.cityId] = {destId}.destId;
//   console.log(routeObj)

// })
//   })
// }

// function enterCity(answer) {

//   if ({answer}.answer === 'y'){

//     readline.question(`What's the city's ID? `, (cityId) => {
//     console.log(`City ID: ${cityId}`)

//     readline.question(`The name of the city? `, (name) => {
//     console.log(`City name: ${name}`)

//     cityObj[{cityId}.cityId] = {name}.name;
//     console.log(cityObj)

//     readline.question(`Enter another city? y/n `, (answer) => {
//       enterCity(answer);
// })
//   })
// })
//   }

//   else if ({answer}.answer === 'n') {
//     console.log("Now we will enter in the routes. Start with the departure city ID and then neter in the desination city's ID");
//     routeMaker();
//   }
// }

// // app

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`Enter a new city ID/name? y/n `, (answer) => {
//  enterCity(answer);

// })

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



// app

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Please enter your home city: `, (answer) => {
  homeCity = answer;
  console.log(homeCity)

readline.question(`Please enter your departure city: `, (answer) => {
  departureCity = answer;
  console.log(departureCity)

readline.question(`Please enter your destination city: `, (answer) => {
  destCity = answer;
  console.log(destCity)

})
})
})



