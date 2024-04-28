#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate random number -Done
// 2) user input for guessig number -Done
// 3) compare user input with computer generated number and show result -Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 6-1: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
