export function add(num1:number, num2:number): number {
    let sum: number = num1 + num2
    return sum;
} 

export function subtract(num1:number,num2:number): number {
    let ans: number = num1 - num2
    return ans;
}

export function multiply(num1:number, num2: number): number {
    let product: number = num1*num2
    return product;
}

export function divide(num: number, denom: number): number {
    let division: number = num/denom
    return division;
}

export function expo(number1: number, expo1: number): number {
    let exp: number = number1 ** expo1
    return exp;
}

export function mod(numb: number, modu: number): number {
    let modulus: number = numb%modu
    return modulus;
}

export function incre(val: number): number {
    let plusOne: number = val ++
    return plusOne
}

export function decre(val: number): number {
    let minusOne: number = val --
    return minusOne
}

export function perfSqu(thing: number, root1: number = 1): boolean {
    if (root1 > thing){
        return false
    }
    else if (root1 == thing/root1) {
        return true
    } else { 
        root1++;

        return perfSqu(thing, root1)
    }  
    return false
}

export function quoRem(xLarge: number, xSmall: number): [quotient: number, remainder: number] {
    let quotient = xLarge/xSmall - ((xLarge%xSmall)/xSmall);
    let remainder = xLarge % xSmall;
    return [quotient, remainder]
}

export function tenFibbo(i: number = 0, next: number = 1): string {
    let fibonacciSequenceArray: number[] = [];
    // 1. find first and second numbers in sequence
    console.log("i = "+ i + " next = " + next);
    fibonacciSequenceArray.push(i);
    fibonacciSequenceArray.push(next);
    // [0, 1]

    // 2. find third number in sequence by adding first two
    let third = i + next;
    //                                      x  y  z
    // real-world                           1  2  3
    // programming                          0  1  2
    fibonacciSequenceArray.push(third); // [0, 1, 1]
    
    // 3. repeat until we've found 10 numbers
    for (let index = 3; index < 10; index++) {
        let previousNumber: number = fibonacciSequenceArray[index -2]; // 0
        let currentNumber: number = fibonacciSequenceArray[index -1]; // 1

        const nextNumber = previousNumber + currentNumber;

        // fibonacciSequenceArray[]
        console.log("Iteration: " + index);

        console.log("Next number in the sequence =" + nextNumber);
        
        fibonacciSequenceArray.push(nextNumber);
    }
    return fibonacciSequenceArray.join(',');
}