// Functions

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(operator, firstNumber, secondNumber) 
{
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            // Prevent dividing by 0
            if (secondNumber === 0) {
                return "Error";
            }
            return divide(firstNumber, secondNumber);
        default:
            return "Invalid operator";
    }
}

let firstNumber;
let secondNumber;
let operator;