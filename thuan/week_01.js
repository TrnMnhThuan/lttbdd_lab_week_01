// Coding Challenge #1
// your tasks 1
mark = [78, 1.69]
john = [92, 1.95]

function bmi(mass, height) {
    return mass / height ** 2
}

var bmiMark = bmi(mark[0], mark[1])
var bmiJohn = bmi(john[0], john[1])

console.log(bmiMark.toFixed(2))
console.log(bmiJohn)

// your task 3
var markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

// Code Challenge #2

// your task 1
function HigherBMI(bmi1, bmi2) {
    if (bmi1 > bmi2)
        return true
    else return false
}

if (HigherBMI(bmiMark, bmiJohn)) {
    console.log('Mark\'s BMI is heigher than John\'s')
} else console.log('John\'s BMI is heigher than Mark\'s')

// your task 2
if (HigherBMI(bmiMark, bmiJohn)) {
    console.log(`Mark\'s BMI (${bmiMark.toFixed(1)}) is heigher than John\'s (${bmiJohn.toFixed(1)})`)
} else console.log(`John\'s BMI (${bmiJohn.toFixed(1)}) is heigher than Mark\'s (${bmiMark.toFixed(1)}) `)

//Coding challenge #3

//your task 1
var dolphins = [96, 108, 89]
var koalas = [88, 91, 110]

var totalDolphins = dolphins.reduce((acc, num) => { return acc + num })
var avgDolphins = totalDolphins / dolphins.length
console.log(avgDolphins)