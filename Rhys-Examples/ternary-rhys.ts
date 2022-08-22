
let firstExpression: boolean = 11 > 6;
let secondExpression: boolean = -1 < -2;
let testExpression: boolean = firstExpression && secondExpression;

const resultOfSimpleTernary: string = testExpression ? "The expression is true" : "The expression is false";

console.log(resultOfSimpleTernary);

let resultOfTernary: string = testExpression 
                                    ? "The whole expression is true" 
                                    : firstExpression
                                        ? "The first expression is true"
                                        : secondExpression
                                            ? "The second expression is true"
                                            : "The second expression is false";
    
                                            
const stringVariable: any = "Hello World";
const numberVariable: number = 5;

console.log(typeof stringVariable);
console.log(typeof numberVariable);

console.log(stringVariable instanceof String);
