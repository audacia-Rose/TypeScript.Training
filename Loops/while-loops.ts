function howManyTimesDividedByTwo(hello: number): number {
    let y = 0
    while (hello < (hello/2)) {
    hello = hello/2
    hello++ 
    y = Math.floor(hello)  
    return y
    }     
    return y
}

console.log(howManyTimesDividedByTwo(6))