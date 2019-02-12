const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

var cityId = {};

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readline.question(`What's your age?`, (age) => {
  console.log(`Hi ${age}!`)
  // cityId[{name}] = {age}
  // console.log({name}.name)
  // console.log({age}.age)
  cityId[{name}.name] = {age}.age;
  console.log(cityId)
  readline.close()
})
})

