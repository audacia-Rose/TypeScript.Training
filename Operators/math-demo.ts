import { add, subtract, multiply, divide, expo, mod, incre, decre, perfSqu, quoRem, tenFibbo } from "./math"

const five: number = 5
const seventyOne: number = 71
const thirtyThree: number = 33
const eight: number = 8
const ten: number = 10

let sum1 = add(five,eight)
console.log(sum1)

let answer = subtract(seventyOne, thirtyThree)
console.log(answer)

let divid = divide(5,2)
console.log(divid)

let tryOne = perfSqu(131)
console.log(tryOne)

console.log("Modulus")
let modo = mod(thirtyThree, ten)
console.log(modo)

console.log("Quotient & Remainder")
let answer1 = quoRem(seventyOne,eight) 
console.log(answer1)

console.log("First 10 Fibonacci Numbers")
console.log(tenFibbo())
console.log(tenFibbo(3,8))