🧮 Calculator Project
Project Steps
1. Set Up Your Project
    Create a new GitHub repository for your calculator project.
    
    Clone the repository to your local machine.
    
    Set up your basic file structure:
    
    index.html  
    style.css  
    script.js
    
    Link your CSS and JavaScript files in your HTML file.

2. Create Basic Math Functions
    In your JavaScript file, create and test the following functions in your browser’s console:
    
    add(a, b)  
    subtract(a, b)  
    multiply(a, b)  
    divide(a, b)

    Each function should take two numbers and return the correct result.

3. Define Operation Variables
    A calculator operation consists of:
    - a number
    - an operator
    - another number
    
    Create three variables to represent these values.
    You’ll use them later to update your calculator’s display and perform calculations.

4. Create the Operate Function
    Write a new function named operate(operator, num1, num2) that:
    - Takes an operator and two numbers as parameters.
    - Calls one of your basic math functions depending on the operator provided.
    
    Example:
    operate("+", 3, 5) → calls add(3, 5)

5. Build the Calculator Interface (HTML)
    In your HTML file:
    - Create buttons for digits (0–9)
    - Create buttons for operators (+, -, ×, ÷, =)
    - Add a display area to show numbers and results
    - Add a “Clear” button

    Tip: Use placeholder (dummy) numbers in the display initially to check your layout.

6. Style the Calculator (CSS)
    Use CSS to style your calculator for clarity and readability.
    - Align buttons in a grid or flexbox layout
    - Make sure the display stands out
    - Style operator buttons differently if desired

7. Add Display Functionality (JS)
    Write JavaScript functions that:
    - Update the display when number buttons are clicked.
    - Store the displayed number in a variable for later use.
    
    Example:
    Clicking “3” → display shows 3  
    Clicking “5” after → display shows 35

8. Implement the Calculation Logic
    Connect your buttons to calculator functionality:
    - Store the first number when an operator is pressed.
    - Store the second number when input continues after the operator.
    - When “=” is pressed, call the operate() function using the stored values.
    - Display the result on the screen.

    After operate() runs, update the display with the result.

    Note: This is the hardest part — take your time to figure out the correct logic flow.

9. Handle Edge Cases and Bugs
    Make sure your calculator behaves correctly in these scenarios:
    
    - Only evaluate one pair of numbers at a time.  
      Example:
      12 + 7 = → displays 19  
      Pressing “-” then “1” → should calculate 19 - 1
    
    - Round long decimal results to fit the display.
    
    - Pressing “=” before entering both numbers or an operator should not break the calculator.
    
    - The “Clear” button should fully reset all stored data and the display.
    
    - Division by zero should not crash your calculator — instead, display a funny or friendly error message.
    
    - Prevent consecutive operators from triggering unwanted evaluations.  
      Example:  
      2 + + → should not evaluate to 4.
    
    - When a result is displayed, pressing a new digit should start a new calculation instead of appending digits to the result.

10. Test and Debug
    Use browser developer tools to verify:
    - CSS and JS files are properly linked.
    - No console errors appear.
    - The correct DOM elements are generated and updated.

    Use console.log() statements to test your variable values and logic during development.

11. Extra Credit (Optional)
    Add the following advanced features if you’d like an extra challenge:

    • Decimal Input:
      - Add a “.” button to allow users to input floating point numbers.
      - Prevent multiple decimals in one number (e.g., 12.3.56 ❌).
      - Disable the decimal button if there’s already a decimal in the display.

    • Backspace:
      - Add a “Backspace” button to remove the last digit or operator.

    • Keyboard Support:
      - Allow users to type numbers and operators directly from their keyboard.
      - Include support for Enter (=), Backspace, and Escape (clear).