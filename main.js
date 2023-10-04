"use strict";

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (+b === 0) {
        alert("Don't break the universe!");
        return 0;
    } else {
        return a / b;
    }
}
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
}
function updateVars(id) {
    if (id === "clear") {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        result = "";
    } else if (id.match(/\d/) && operator === "") {
        firstOperand += id;
    } else if (id.match(/[\/\*\+\-]/)) {
        if (firstOperand !== "" && operator !== "" && secondOperand !== "") {
            result = operate(firstOperand, secondOperand, operator);
            if (result % 1 !== 0) {
                result = result.toFixed(2);
            }
            firstOperand = result;
            operator = id;
            secondOperand = "";
            updateDisplay();
            result = "";
        } else {
            operator = id;
        } 
    } else if (id.match(/\d/) && operator !== "") {
        secondOperand += id;
    } else if (id === "=") {
        result = operate(firstOperand, secondOperand, operator);
        if (result % 1 !== 0) {
            result = result.toFixed(2);
        }
        firstOperand = result;
        operator = "";
        secondOperand = "";
    } 
    updateDisplay();
    result = "";
}
function updateDisplay() {
    if (result === "") {
        document.getElementById("disp").textContent = firstOperand + " " + operator + " " + secondOperand;
    } else {
        document.getElementById("disp"). textContent = result;
    }
}

