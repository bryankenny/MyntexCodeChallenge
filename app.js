// functions

function ifQuestion(answer) {

  if ({answer}.answer === 'y'){
    console.log("hello")
    readline.question(`What's the city's ID? `, (cityId) => {
    console.log(`City ID: ${cityId}`)

    readline.question(`The name of the city? `, (name) => {
    console.log(`City name: ${name}`)

    cityObj[{cityId}.cityId] = {name}.name;
    console.log(cityObj)
    readline.question(`Enter another city? y/n `, (answer) => {
 ifQuestion(answer);
})
  })
})
  }
  else if ({answer}.answer === 'n') {
    console.log("goodbye")
    readline.close()
  }
}

// app

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

var cityObj = {};

// readline.question(`What's the city's ID? `, (cityId) => {
//   console.log(`City ID: ${cityId}`)

// readline.question(`The name of the city? `, (name) => {
//   console.log(`City name: ${name}`)

//   cityObj[{cityId}.cityId] = {name}.name;
//   console.log(cityObj)

readline.question(`Enter another city? y/n `, (answer) => {
 ifQuestion(answer);
})

