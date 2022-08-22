import { question } from "readline-sync";
// import { User } from "./models/user.model";

let users: User[] = [];

console.log("Please choose an option?");
console.log("1. Create a user");
console.log("2. Update a user");
console.log("3. Delete a user");

getUserInput();

function getUserInput() {
    var answer = question("Enter the number for the option you would like: ");

    switch (+answer) {
        case 1:

            break;
        case 2:
            
            break;
        case 3:
        
            break;
        default:
            
            break;
    }
}