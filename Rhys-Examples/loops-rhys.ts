//                        0       1       2         3
let names: string[] = ["Eddie", "Joe", "Geoff"];

for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

for (let index = names.length - 1; index >= 0; index--) {
    const name = names[index];
    console.log(name);
}

let x: number = 5;

// custom logic before the while - that you are going to execute once.

while (x < 5) {
    // Logic which you want to execute until the condition of the while is false
    console.log("While The value of x is " + x);
    x++;
}

let y: number = 5;
do {
    console.log("While The value of y is " + y);
    y++;
} while (y < 5)