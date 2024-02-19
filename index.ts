import inquirer from "inquirer";

const answers: {
    "NO1": number,
    "NO2": number,
    "operator": string

} = await inquirer.prompt([{
    type: "number",
    name: "NO1",
    message: "Write your No1: "
},
{
    type: "number",
    name: "NO2",
    message: "Write your No2: "
},
{
    type: "list",
    name: "operator",
    message: "Select your operator",
    choices: ["+", "-", "*", "/"]
},

])

const { NO1, NO2, operator } = answers
if (NO1 && NO2 && operator) {
    let result: Number = 0;
    if (operator === "+") {
        result = NO1 + NO2
    } else if (operator === "-") {
        result = NO1 - NO2
    } else if (operator === "*") {
        result = NO1 * NO2
    } else if (operator === "/") {
        result = NO1 / NO2

    } console.log("Your result is: " + result);

} else {
    console.log("Please select a valid operator")
}

