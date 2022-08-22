let fourNum: number = -4
let sixteenNum: number = 16
let hundredNum: number = 100
let minusHundred: number = -100

let mouse: string = "mouse"
let cat: string = "cat"
let dog: string = "dog"

function posOrNegSum(one: number, two: number): string {
    let sum: number = one + two;
    let take: number = one - two;
    let sumBoo: boolean = sum > 0;
    let sumBooS: string = sumBoo
                            ? "The sum is a positive number: " + sum
                            : "The sum is negative, so " + one + " minus " + two + " is: " + take
    return sumBooS
}

console.log(posOrNegSum(minusHundred, sixteenNum))


function prodIfNum(ding: any, dong: any): any {
    let y: number = ding*dong
    let x = typeof (ding && dong) === "number"
                        ? "The product of the two numbers is: " + y
                        : "Not all test objects are numbers"
    return x
}

console.log(prodIfNum(fourNum,cat))
console.log(prodIfNum(minusHundred,sixteenNum))

//Extra: Create multiple conditional ternaries within each other --> I have done this in logical.ts