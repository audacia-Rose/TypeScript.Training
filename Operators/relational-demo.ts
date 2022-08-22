import { betweenExc, bigger, smaller, betweenInc, posOrNeg, greaterThan, greaterOrEqual, lessOrEqual } from "./relational"

let three: number = 3

console.log("6 is greater than 8")
console.log(bigger(6,8))

console.log("6 is less than 8")
console.log(smaller(6,8))

console.log("6 lies strictly between 6 and 12")
console.log(betweenExc(6,6,12))

console.log("6 lies within 6 and 12")
console.log(betweenInc(6,6,12))

console.log("Is " +three+ " positive?")
console.log(posOrNeg(three))

console.log(greaterThan(24,28))