export function bigger(first1: number, second1: number): boolean {
    let x = first1 > second1;
    return x
}

export function greaterOrEqual(a: number, b: number): boolean {
    let c = a >= b;
    return c
}

export function smaller(firstOne: number, secondOne: number): boolean {
    let y = firstOne < secondOne;
    return y
}

export function lessOrEqual(q: number, r: number): boolean {
    let s = q <= r;
    return s
}

export function isEqualTo(first: number, second: number): boolean {
    let z = first === second;
    return z
}

export function notEqual(alpha: number, beta:number): boolean {
    let gamma = alpha != beta;
    return gamma
}

export function betweenExc(isThis: number, small: number, big: number) : boolean {
    let answ = isThis > small && isThis < big;
    return answ
}

export function betweenInc(isIt: number, smaller: number, bigger: number) : boolean {
    let answe = isIt >= smaller && isIt <= bigger;
    return answe
}

export function posOrNeg(hello: number) : string {
    let thisIsPositive: boolean = hello > 0;
    let thisIsNegative: boolean = hello < 0;
    let thisIsZero: boolean = !(thisIsPositive && thisIsNegative)
    let whatIsThis: string = thisIsPositive 
                                    ? "This number is positive"
                                    : thisIsNegative
                                        ? "This number is negative"
                                        : thisIsZero 
                                            ? "This number is 0"
                                            : "Something is wrong";
    return whatIsThis
}

export function greaterThan(firstNum: number, secondNum: number): string {
    let greater = firstNum > secondNum;
    let answerr: string = greater    
        ? firstNum + " is greater than " + secondNum
        : firstNum + " is less than or equal to " + secondNum;
    return answerr
 }