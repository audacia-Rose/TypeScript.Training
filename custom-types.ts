enum Colour {
    red = 100,
    orange = 150,
    yellow = 200,
    green = 250,
    blue = 300,
    purple = 350
}


class Person {
    forename: string;
    surname: string;
    age: number;
    heightCm;
    alive;
    
    constructor(forename: string, surname: string, age: number, heightCm?: number, alive?: boolean) {
        this.forename = forename;
        this.surname = surname;
        this.age = age;
        this.heightCm = heightCm;
        this.alive = alive
    }

    summary() {
       console.log(this.forename + " " + this.surname + " is " + this.age + " years old and " + this.heightCm + " cm tall.");
    }

    areTheyAlivee(): string {
        if (this.alive = true) {
            return this.forename + " is alive.";
        } else {
            return this.forename + " is no longer alive.";
        }
    }

}

let roseH = new Person("Rose", "Hadley", 24, undefined, true);
roseH.summary()


interface IAnimal {
    commonName: string;
    latinName: string;
    mammal: boolean;
    legs: number;

    animalSound(): boolean;
}

class GreatApe implements IAnimal {
    commonName: string;
    latinName: string;
    mammal: boolean;
    legs: number;
    tail: boolean;

    constructor(commonName: string, latinName: string, mammal: boolean, legs: number, tail: boolean) {
        this.commonName = commonName;
        this.latinName = latinName;
        this.mammal = mammal;
        this.legs = legs;
        this.tail = tail;

    }

    animalSound() {
        if (this.tail) {
              console.log("Scream")
              return this.tail         
        } else {
            console.log("Roar")
            return this.tail
        }
    }
}

var gorilla = new GreatApe("Gorilla","Gorilla gorilla", true, 2, false);

gorilla.animalSound()

console.log(gorilla)


var stringPeople: string[]|number[] = [
"Rose Hadley","Rhys Smith", "Richard Brown", "Philip Rashleigh", "Adam Stirk"
]


var tupleTime: [dayOfWeek: string, dayOfMonth: number, month: string] 
tupleTime = ["", 0, ""];
tupleTime[0] = "Monday";
tupleTime[1] = 13;
tupleTime[2] = "January"

// console.log(tupleTime)