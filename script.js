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
    return Number((x / y).toFixed(7));
}

function operate(operand1, operand2, operator) {
    operand1 = parseInt(operand1)
    operand2 = parseInt(operand2)
    
    switch (operator) {
        case "+":
            return add(operand1, operand2);

        case "-":
            return subtract(operand1, operand2);

        case "*":
            return multiply(operand1, operand2);

        case "/":
            return divide(operand1, operand2);
    }
}

function selectDigit(digit) {
    digit.addEventListener(("click"), () => {
        selected += digit.textContent;
        display.textContent = selected;
    });
}

function clearInput() {
    selected = "";
    operand1 = "";
    operand2 = "";
    operator = "";
}

function clearButton() {
    clear.addEventListener(("click"), () => {
        clearInput();
        display.textContent = selected;
        next_operand = 1;
    })
}

let operand1 = "";
let operand2 = "";
let operator = "";
let next_operand = 1;
let op1_selected = false;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator"); // = not included
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
let selected = "";
let result;

digits.forEach((digit) => {
    selectDigit(digit);
});

clearButton();

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (selected != "" && op1_selected == false && next_operand == 1) {
            operand1 = selected;
            operator = op.textContent;
            selected = "";
            console.log(operand1);
            console.log(operator);
            next_operand = 2;
        } else if (selected != "") {
            if (selected == "0" && operator == "/") {
                display.textContent = "ERROR!";
                clearInput();
                next_operand = 1;
            } else {
                operand2 = selected;
                selected = "";
                operand1 = operate(operand1, operand2, operator);
                display.textContent = operand1;
                operator = op.textContent;
                console.log(operand2);
                console.log(operator);
                console.log(operand1);
                next_operand = 2;
            }
            
        }
    });
});

equal.addEventListener("click", () => {
    if (next_operand == 2 && selected != "") {
        if (selected == "0") {
            display.textContent = "ERROR!";
        } else {
            operand2 = selected;
            result = operate(operand1, operand2, operator);
            display.textContent = result;
            console.log(operand2);
            console.log(result);
        }
        next_operand = 1;
        clearInput();
    }
});


