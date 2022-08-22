export class User {
    email: string;
    firstName: string;
    surname: string;
    dob: Date;
    
    constructor(firstName: string, surname: string, email: string, dob: Date) {
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.dob = dob;
    };
    
    information() {
        console.log("First name: " + this.firstName + ", Surname: " + this.surname + ", email: " + this.email + ", Date of Birth: " + this.dob)
    };
}

// Intl.DateTimeFormat("en-GB").format(dob);

let user1 = new User("Rose", "Hadley", "rose.hadley@audacia.com", new Date(1998,4,6))
user1.information()
console.log(user1)
// user1.dob = new Date (2000,11,31)

// console.log(user1)

// firstName: string, surname: string, email: string, dob: Date