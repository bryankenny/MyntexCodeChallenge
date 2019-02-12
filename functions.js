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