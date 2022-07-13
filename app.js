// Strings and Number 

// var str = 'Johnny'
// console.log(str[6 - 1] )

let temperature = 20
let isRaining = true
let planet = 'Earth'

temperature = 32

console.log(temperature)

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit)

// Equality

let bool = '1' == 1

console.log(bool)

// Conditionals

// let subscribed = false
// let loggedIn = true

// if (subscribed === true) {
//     console.log('show the video')
// }

// else if (loggedIn === true) {
//     console.log('tell the user to upgrade their subscription')
// }

// else {
//     console.log('tell user to log into account')
// }

// let cash = 10
// let price = 50
// let difference = cash - price

// if (cash > price) {
//     console.log(`you paid extra - here's ${difference} dollars change`)
// }

// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day!")
// }

// else {
//     console.log(`not enough money - you still owe ${difference * -1} dollars`)
// }

let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen === true) {
    console.log('print the reciept')
}

// truthy or falsy values

let val = "0";

if (val) {
    console.log(!!val)
}

else {
    console.log(!!val)
}

// Ternary Operators

let hot = true

hot ? console.log('weather is hot outside') : console.log('weatehr is cold')

let subscribed = false
let loggedIn = true

let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
console.log(str)