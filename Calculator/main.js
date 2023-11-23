/***** Targetting required elements *****/
const expressionField = document.getElementById("operandOne");
const operandInputField = document.getElementById("operandTwo");
const btns = document.querySelectorAll("button");

/***** Global variable declarations *****/
let choosen_operator = undefined;

/***** Event listeners *****/
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("numberBtn")) appendNumber(btn.value);
        else if (btn.classList.contains("operatorBtn")) {
            addOperator(btn.value);
            choosen_operator = btn.value;
        } else if (btn.classList.contains("clrBtn")) clearField();
        else if (btn.classList.contains("delBtn")) deleteCharacter();
        else if (btn.classList.contains("dot")) appendDot();
        else calculate();
    });
});

/***** Function declarations *****/

// Function for deleting a character at a time
function deleteCharacter() {
    operandInputField.value = operandInputField.value.slice(0, -1);
}

// Function to clear all the fields at once
function clearField() {
    expressionField.value = "";
    operandInputField.value = "";
}

const newFormatter = new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
});

// function for appending clicked number to the operandTwo field
function appendNumber(number) {
    if (expressionField.value !== '')
        expressionField.value += number
    operandInputField.value += number
}

// function for appending an operator to the operandOne field
function addOperator(operator) {
    // Preventing to add any operator when operandTwo is blank
    if (operandInputField.value === '') return;
    if (expressionField !== '')
        expressionField.value += operandInputField.value
    // Below three line of code is to move value of operandTwo to operandOne, clearing operandTwo and add operator to operandOne
    expressionField.value = operandInputField.value;
    expressionField.value += operator;
    operandInputField.value = "";
    // operandOne.value += operandTwo.value
}

// function for appending dot to the operandTwo field
function appendDot() {
    if (!operandInputField.value.includes("."))
        operandInputField.value === ""
            ? (operandInputField.value += "0.")
            : (operandInputField.value += ".");
}

// function for evaluating output and show into the operandTwo field
function calculate() {
    const operandOne_float = parseFloat(expressionField.value);
    const operandTwo_float = parseFloat(operandInputField.value);

    let computedOutput;

    switch (choosen_operator) {
        case "+":
            computedOutput = operandOne_float + operandTwo_float;
            break;
        case "-":
            computedOutput = operandOne_float - operandTwo_float;
            break;
        case "*":
            computedOutput = operandOne_float * operandTwo_float;
            break;
        case "/":
            computedOutput = operandOne_float / operandTwo_float;
            break;
        case "%":
            computedOutput = operandOne_float % operandTwo_float;
            break;
        default:
            return;
    }
    if (expressionField.value === '')
        expressionField.value += operandInputField.value;
    operandInputField.value = computedOutput;
}