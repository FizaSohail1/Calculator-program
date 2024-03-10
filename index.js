// Calculator program using (Switch,case)
import inquirer from "inquirer"; //It is a easy way to capture user input in your Node. js command line.
import chalk from "chalk"; // chalk is a module which is used for styling text.
const calculator = await inquirer.prompt([{
        type: "list",
        name: "operator",
        message: "Select an operator:",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponentiation', 'modulus']
    },
    {
        name: "num1",
        type: "number",
        message: "Enter your first number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your Secound number:"
    }
]);
let result;
switch (calculator.operator) {
    case 'Addition':
        result = calculator.num1 + calculator.num2;
        console.log(chalk.bgBlack(chalk.green(`Your answer is: ${result}`)));
        break;
    case 'Subtraction':
        result = calculator.num1 - calculator.num2;
        console.log(chalk.bgBlack(chalk.green(`Your answer is: ${result}`)));
        break;
    case 'Multiplication':
        result = calculator.num1 * calculator.num2;
        console.log(chalk.bgBlack(chalk.green(`Your answer is: ${result}`)));
        break;
    case 'Division':
        result = calculator.num1 / calculator.num2;
        console.log(chalk.bgBlack(chalk.green(`Your answer is: ${result}`)));
        break;
    case 'Exponentiation':
        result = calculator.num1 ** 2;
        console.log(chalk.bgBlack(chalk.green(`Your answer is: ${result}`)));
        break;
    case 'modulus':
        result = calculator.num1 % calculator.num2;
        console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
        break;
    default:
        console.log("Use an other operator.");
}
;
