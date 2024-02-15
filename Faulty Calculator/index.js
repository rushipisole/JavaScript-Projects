/*function faultyCalculator(num1, num2, operation) {
    if (Math.random() < 0.1) {
        switch (operation) {
            case '+':
                return num1 - num2;
            case '*':
                return num1 + num2;
            case '-':
                return num1 / num2;
            case '/':
                return num1 ** num2;
            default:
                return "Invalid Operator";

        }
    } else {
        switch (operation) {    
            case '+':
                return num1 + num2;
            case '*':
                return num1 * num2;
            case '-':
                return num1 - num2;
            case '/':
                return num1 / num2;
            default:
                return "Invalid Operator";
        }
    }
}   
const num1 = parseFloat(prompt("Enter your first Number:"));
const num2 = parseFloat(prompt("Enter your second Number:"));
const operator = prompt("Enter the operator (+, *, -, /):");

const result = faultyCalculator(num1, num2, operator);

  alert(`Result: ${result}`); */

let random = Math.random();
let a = prompt("Enter First Number");
let c = prompt("Enter operation");
let b = prompt("Enter Second Number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    console.log(`The reault is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
