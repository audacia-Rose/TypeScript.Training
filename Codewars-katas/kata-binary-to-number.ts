//Return the number of the binary representation array:

let arr = [1,0,1,1] // = 11
//         32 16  8  4  2  1
let arr2 = [1, 1, 0, 0, 1, 1] // = 51

export function binaryArrayToNumber(arr: number[]): number {
    console.log("Original array: " + arr)
    arr.reverse();
    console.log("Reversed array: " + arr)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        element = (2**i)*arr[i]
        console.log("Number values of binary entries: "+ element)
        sum += element
    }
    return sum
};

console.log(binaryArrayToNumber(arr))
console.log(binaryArrayToNumber(arr2))