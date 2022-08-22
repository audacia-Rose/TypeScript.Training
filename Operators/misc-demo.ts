const number1: number = 3
const number2: number = 42
const number3: number = -12.5

const string1 = "Hello, "
const string2 = "Goodbye, "
const string3 = " Rose "

function stringTogether(firstPart: any, secondPart: string): string {
    let sentence: string = firstPart + secondPart;
    return sentence
}

console.log(stringTogether(number2, string3))
console.log(typeof stringTogether(number2, string3))


function turnNegative(z: number): number | string {
    let y = -z
    if (z < 0) {
        console.log(z + " is already a negative number.")        
    } else {
    console.log(y)    
    }
    return ""
}

console.log(turnNegative(number3))
console.log(turnNegative(number2))
