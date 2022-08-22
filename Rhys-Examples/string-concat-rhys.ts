function sayHello(helloMessage: string, names: string): string {
    const fullHelloMessage: string = helloMessage + ' ' + names;

    console.log(fullHelloMessage);
    return fullHelloMessage;
}

let spanishHelloMessage: string = "Hola, me llamo";
let spanishName: string = "Dora";

sayHello(spanishHelloMessage, spanishName);
const helloMessage = sayHello("Hola, me llamo", "Dora");

console.log("Returned message: " + helloMessage);

// Hola, me llamo Dora
// Hola, me llamo Dora
// Returned message: Hola, me llamo Dora
