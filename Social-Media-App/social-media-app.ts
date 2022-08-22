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
let newUser = new User("", "", "", new Date())

function getUserInput() {
    var answer = question("Please choose a number. ");

    switch (+answer) {
        case 1:
            console.log("Thank you for choosing to create a new user.");
             
            let newFirst = String(question("Please enter your first name: "));
            let newSur = String(question("Please enter your surname: "));
            let newEmail = String(question("Please enter your email: "));
            let newBirth = question("Please enter your date of birth in the format dd/mm/yyyy: ");
            newBirth = newBirth.split("/");
            newBirth = Array.from(newBirth, Number);
            let newUser = new User(newFirst, newSur, newEmail, new Date(newBirth));
            listOfUsers.push(newUser);
            question("Please type Yes if this information is correct: " + newUser);
            break;
        case 2:
            console.log("You have chosen to update your user account.")
            let updateFirstName = question("Please enter a new first name, or press Enter to skip this section.")
            if (updateFirstName === "") {
            }
            else {newFirst = updateFirstName
            }
            let updateSurname = question("Please enter a new surname, or press Enter to skip this section.")
            if (updateSurname === "") {
            } else {newSur = updateSurname
            }
            let updateEmail = question("Please enter a new email, or press Enter to skip this section.")
            if (updateEmail === "") {
            } else {newEmail = updateEmail
            }            
            let updateBirthday = question("Please enter a new date of birth, or press Enter to skip this section.")
            if (updateBirthday === "") {
            } else {newBirth = updateBirthday
            }
            break;
            let updatedUser = new User(newFirst, newSur, newEmail, newBirth)
            listOfUsers.pop()
        case 3:
            console.log("You have chosen to delete your user account.")
            let deleteYN = question("Are you sure you want to delete this user? Please type Yes or No")

            break;
        default:
            console.log("Please enter the number 1, 2, or 3.")
            getUserInput()
            break;
    }
}