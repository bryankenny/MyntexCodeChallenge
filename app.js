const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

var cityObj = {};

readline.question(`What's the city's ID? `, (cityId) => {
  console.log(`Hi ${cityId}!`)
  readline.question(`The name of the city? `, (name) => {
  console.log(`Hi ${name}!`)
  cityObj[{cityId}.cityId] = {name}.name;
  console.log(cityObj)
  readline.close()
})
})

