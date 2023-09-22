"use strict";

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "3RR0R";
            break;
    }
};
function updateVars(id) {
    if (id === "clear") {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        result = "";
    }
    if (id === "=") {
        result = operate(firstOperand, secondOperand, operator);
    }

    if (operator === "" && id != "+" && id != "-" && id != "*" && id != "/" && id != "=") {
        firstOperand += id;
    } else if (id === "+" || id === "-" || id === "*" || id === "/") {
        operator = id;
    }
    updateDisplay();
}

function updateDisplay() {
    if (result === "") {
        document.getElementById("disp").textContent = firstOperand + operator + secondOperand;
    } else {
        document.getElementById("disp"). textContent = result;
    }
}

