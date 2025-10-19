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
        case "x":
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

function splitInput(input) {

    // Split the input by spaces
    const parts = input.split(" ").slice(0, 3); // Take first 3 elements

    // Check that we have at least 2 elements (operator at index 1)
    if (parts.length < 2) return null;

    // Define valid operators
    const validOperators = ["+", "-", "x", "/"];

    // Check if parts[1] is an operator
    if (!validOperators.includes(parts[1])) {
        return null;
    }

    return parts;
}

let firstNumber;
let secondNumber;
let operator;

// Event handling

calculator = document.querySelector(".calculator");
input = document.querySelector(".input");
output = document.querySelector(".output");

calculator.addEventListener("click", (e) => {
    
    switch (e.target.textContent)
    {
        case("="):
            let variables = splitInput(input.textContent);
            
            firstNumber = Number(variables[0]);
            operator = variables[1];
            secondNumber = Number(variables[2]);

            output.textContent = operate(operator, firstNumber, secondNumber);
            input.textContent = "";

            break;

        case("D"):
            input.textContent = input.textContent.slice(0, -1);
            break;

        case("AC"):
            input.textContent = "";
            output.textContent = "";
            break;

        case("/"):
        case("x"):
        case("-"):
        case("+"):
            input.textContent = `${input.textContent} ${e.target.textContent} `;
            break;

        case("G"):
        case("%"):
            break;

        default:
            input.textContent = input.textContent + e.target.textContent;
            break;
    }
    
})