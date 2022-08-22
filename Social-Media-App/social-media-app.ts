import {question} from "readline-sync";
import { User } from "./Models/user-model";

let listOfUsers: User[] = [];

console.log("Please choose an option below:");
console.log("1. Create a user");
console.log("2. Update user");
console.log("3. Delete user");

getUserInput();

let newFirst = ""
let newSur = ""
let newEmail = ""
let newBirth = ""

function getUserInput() {
    var answer = question("Please choose a number. ");

    switch (+answer) {
        case 1:
            console.log("Thank you for choosing to create a new user.");
            let confirmY = ""             
            do {
                let newFirst = String(question("Please enter your first name: "));
                let newSur = String(question("Please enter your surname: "));
                let newEmail = String(question("Please enter your email: "));
                let newBirth = question("Please enter your date of birth in the format dd/mm/yyyy: ");
                let splitNewBirth: string[] = newBirth.split("/");
                let numberNewBirth: number[] = Array.from(splitNewBirth, Number);
                numberNewBirth = numberNewBirth.reverse();
                let newUser = new User(newFirst, newSur, newEmail, new Date(numberNewBirth[0], numberNewBirth[1], numberNewBirth[2]));
                confirmY = question("Please type Yes if this information is correct: " + newUser);                
                listOfUsers.push(newUser);
            } while (confirmY !== "Yes" || "yes");  
            break;
        case 2:
            console.log("You have chosen to update your user account.")
            let updateFirstName = question("Please enter a new first name, or press Enter to skip this section.")
            if (updateFirstName === "") {
                updateFirstName = newFirst
            }
            else {}
            let updateSurname = question("Please enter a new surname, or press Enter to skip this section.")
            if (updateSurname === "") {
                updateSurname = newSur
            } else {}
            let updateEmail = question("Please enter a new email, or press Enter to skip this section.")
            if (updateEmail === "") {
                updateEmail = newEmail
            } else {
            }            
            let updateBirth = question("Please enter a new date of birth in the form dd/mm/yyyy, or press Enter to skip this section.")
            if (updateBirth === "") {
                updateBirth = newBirth 
            } else {
                let splitUpdateBirth: string[] = updateBirth.split("/");
                let numberUpdateBirth: number[] = Array.from(splitUpdateBirth, Number);
                numberUpdateBirth = numberUpdateBirth.reverse()
            }
            listOfUsers.pop() /*Can I find the index of the user's details in the array and splice instead?*/
            let updatedUser = new User(newFirst, newSur, newEmail, new Date(numberUpdateBirth[0], numberNewBirth[1], numberNewBirth[2]))
            listOfUsers.push(updatedUser)
            break;           
        case 3:
            console.log("You have chosen to delete your user account.")
            let deleteYN = question("Are you sure you want to delete this user? Please type Yes or No.")
            if (deleteYN = "Yes" || "yes") {
                listOfUsers.pop()
                console.log("You have now deleted this user.")
            }
            else if (deleteYN = "No" || "no") {
                console.log("Okay. We will not delete this user account.")
                getUserInput()
            }
            else {
                console.log("Invalid input: Please type in Yes or No.")
            }
            break;
        default:
            console.log("Invalid input: Please enter the number 1, 2, or 3.")
            getUserInput()
            break;
    }
}