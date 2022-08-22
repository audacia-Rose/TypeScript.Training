export function assign(b: typeof toA, toA: any): any {
    let a = toA
    a = b
    return a
}


export function addTo(addThis: number, toThat: number): number {
    let that = toThat
    that += addThis
    return that
}


export function subtractFrom(first: number, second: number): number {
    second -= first
    return second
}


export function multiplyBy(no1: number, timesBy: number): number {
    no1 *= timesBy
    return no1
}


export function divideBy(hello: number, divisor: number): number {
    hello /= divisor
    return hello
}

// Create a mod function which returns the quotient and the remainder using the assignment operators
// ~does this work for negative numbers?~ 