function findValue(numberr: number, arrayy: number[]): boolean {
    
    for (let i = 0; i < arrayy.length; i++) {
        let here: number = arrayy.indexOf(numberr);
        let hereTrue = here != -1
                        ? true
                        : false
    return hereTrue
    }
    return true
}

let thisArray = [1,2,3,5,8,13,21,34]

console.log(findValue(2,thisArray))
console.log(findValue(5,thisArray))
console.log(findValue(6,thisArray))
console.log(findValue(99,thisArray))