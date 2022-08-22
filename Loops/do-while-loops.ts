function callBingoNumbers(): number[] {
    let randomN = Math.floor(100*(Math.random()));
    let bingoNumbersCalled: number[] = [];
    let counter: number = 0;
    do {counter++
        /*console.log(bingoNumbersCalled.length)
        console.log(randomN)
        /*new random number called is already in the array*/
        const doesntExist= bingoNumbersCalled.findIndex((num) => num === randomN) == -1;
//        console.log(doesntExist);
        const notEqualToZero = randomN !== 0;
//        console.log(notEqualToZero);
        if (doesntExist && notEqualToZero) {
            bingoNumbersCalled.push(randomN);
            randomN = Math.floor(100*(Math.random()));
            
        }
        else {
            randomN = Math.floor(100*(Math.random()));

        }}
    while (bingoNumbersCalled.length < 99
          );
          console.log(counter + " loops")
     return bingoNumbersCalled
    }

console.log(callBingoNumbers())
console.log(callBingoNumbers())