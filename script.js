function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            add(operand1, operand2);
            break;

        case "-":
            subtract(operand1, operand2);
            break;

        case "*":
            multiply(operand1, operand2);
            break;

        case "/":
            divide(operand1, operand2);
            break;
    }
}

function selectDigit(digit) {
    digit.addEventListener(("click"), () => {
        selected += digit.textContent;
        display.textContent = selected;
    });
}

function clearDisplay() {
    clear.addEventListener(("click"), () => {
        selected = "";
        display.textContent = selected;
    })
}

let operand1;
let operand2;
let operator;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const clear = document.querySelector("#clear");
let selected = "";

digits.forEach((digit) => {
    selectDigit(digit);    
    clearDisplay();
});