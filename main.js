let CurrentYear = parseFloat(2021)
let CurrentMonth = parseFloat(6)

let BirthYear = prompt('What year were you born?')
let BirthMonth = prompt('What month were you born?')

let SecondsInAMonth = parseFloat(2592000)
let BirthTime = parseFloat(SecondsInAMonth * 12 - BirthMonth)
let SecondsInCurrentYear = parseFloat(SecondsInAMonth * CurrentMonth)
let SecondsSinceBirth = parseFloat(BirthMonth + SecondsInCurrentYear)

document.write(`You're too old mate it's been <h1>${SecondsSinceBirth}</h1> seconds that you've been on this universe alive <br>thus far...</br>`)