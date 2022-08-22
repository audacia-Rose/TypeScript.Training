import { assign, addTo, subtractFrom, multiplyBy, divideBy } from "./assignment"
import { divide } from "./math"
import { isEqualTo } from "./relational"

let four = 4
let six = 6
let thisNumber = 71
let thatNumber = 3.2
let addition = thisNumber + six
let eleven = 11

console.log(assign("hello", "goodbye"))
console.log(assign(false,true))

console.log(addTo(four,six))

console.log(divideBy(thisNumber,thatNumber))

console.log(subtractFrom(six, addition))

console.log(isEqualTo(divide(addition,eleven),divideBy(addition,eleven)))