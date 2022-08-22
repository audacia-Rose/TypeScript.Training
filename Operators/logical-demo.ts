import { and, not, or } from "./logical"
import { bigger, greaterThan, notEqual, posOrNeg } from "./relational"

let bing = 3 >= 4 //FALSE
let bong = 34 < 0 //FALSE
let ting = 4 > 3 //TRUE
let tong = 34 > 0 //TRUE

let three: number = 3
let twenty: number = 20
let one: number = 1

console.log(and(ting, bong))

console.log(and(twenty <= three, bong))

console.log(or(ting,tong))

console.log(or(bigger(one, three), notEqual(twenty,one)))

console.log(not(bing))