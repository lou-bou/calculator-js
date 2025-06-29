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

let operand1;
let operand2;
let operator;
