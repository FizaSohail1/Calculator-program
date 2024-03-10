// Creating Calculator program using Addition, Subtraction, Mltiplication, Division, Exponentiaion, Modulus and using inquirer and chalk.
import inquirer from "inquirer";
import chalk from "chalk";
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
if (calculator.choices === calculator.Addition) {
    result = calculator.num1 + calculator.num2;
    console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
}
else if (calculator.choices == calculator.Subtraction) {
    result = calculator.num1 - calculator.num2;
    console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
}
else if (calculator.choices === calculator.Mltiplication) {
    result = calculator.num1 * calculator.num2;
    console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
}
else if (calculator.choices === calculator.Division) {
    result = calculator.num1 / calculator.num2;
    console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
}
else if (calculator.choices === calculator.Exponentiation) {
    result = calculator.num1 ** 2;
    console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
}
else if (calculator.choices === calculator.modulus) {
    result = calculator.num1 % calculator.num2;
    console.log(chalk.bgBlack(chalk.green(`Your answer is:${result}`)));
}
else {
    console.log("use an other operator");
}
