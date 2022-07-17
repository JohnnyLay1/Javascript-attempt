// Strings and Number 

// var str = 'Johnny'
// console.log(str[6 - 1] )

let temperature = 20
let isRaining = true
let planet = 'Earth'

// temperature = 32

// console.log(temperature)

// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32;

// console.log(fahrenheit)

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

let cash = 30
let price = 40
let isStoreOpen = true

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give reciept'
// console.log(str)

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

// loops
// DRY = DON'T REPEAT yourself

// let count = 1;

// while (count <= 10) {
//     console.log(count)
//     count = count + 1;
// }

// for (let i = 0; i < 100; i++) {
//     console.log(i)

// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }


// const str = 'Frontend Simplified'

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// // Function Definition
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`welcome to Frontend Simplified, ${firstName} ${lastName}`)
// }

// // Call the Function
// welcomePersonToFES('David', 'Bragg');
// welcomePersonToFES('Zen', 'master');
// welcomePersonToFES('Mitri', 'last');

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(10, 20))

// function convertCelciusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32;
// }

const convertCelciusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32;
}

console.log(convertCelciusToFahrenheit(0))
console.log(convertCelciusToFahrenheit(10))
console.log(convertCelciusToFahrenheit(30))

// let arr = [10, 20, 30, 40, 100]

// let newArr = arr.filter((element) => {
//     return (element < 40)
// })

// console.log(newArr)

let grades = ['A+', 'A', 'FAIL']

// Create a new empty array called 'goodGrades'

let goodGrades = []

// let goodGrades = grades.filter((element) => element !== 'FAIL')

// console.log(goodGrades)

// for (let i = 0; i < grades.length; ++i) {
//     // add the current element onto 'goodGrades' only if
//     // the current elemt is not equal to 'FAIL'
//     console.log(grades[i])
// }

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}

console.log(goodGrades)

// let grades = ['FAIL', 'FAIL', 'B']

// 'my version' let pass = grades.filter((element) => element !== 'FAIL')

// console.log(pass)

// new array called arr.map

let arr = [1, 4, 9, 16]

let newArray = arr.map(element => 'dog')

console.log(newArray)

/** Trun eachb element in an array of dollars into cents
 *  try without using the arr.map method
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3];

// create new 'cents' array and set to empty nothing
let cents = []

// loop over every element in dollars'

for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100);
}
    // multiply the element by 100
    // add this element onto 'cents' array

// console leg cents
console.log(cents)

// let cents = dollars.map((element) => {
//     console.log(element)
//     return element * 100;
// })

// let cents = dollars.map(element => element * 100)

// console.log(cents)