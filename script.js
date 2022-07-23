function addition(x, y) {
    let result = x + y;
    result = Number(result);
    return result.toFixed(2);
}

function subtraction(x, y) {
    let result = x - y;
    result = Number(result);
    return result.toFixed(2);
}

function multiplication(x, y) {
    let result = x * y;
    result = Number(result);
    return result.toFixed(2);
}

function division(x, y) {
    if (y == 0) {
        return 'ERROR, dividing by 0';
    }
    let result = x / y;
    result = Number(result);
    return result.toFixed(2);
}

function operate(o, firstNumber, secondNumber) {
    let result;
    switch(o) {
        case('×'):
            result = multiplication(firstNumber, secondNumber);
            break;
        case('÷'):
            result = division(firstNumber, secondNumber);
            break;
        case('+'):
            result = addition(firstNumber, secondNumber);
            break;
        case('−'):
            result = subtraction(firstNumber, secondNumber);
            break;
        default:
            break;
    }
    return result;
}

function populateDisplay(x) {
    display.innerText += x.innerText;
    displayView += x.innerText;
}





const display = document.getElementById('numbers');
const keys = document.querySelectorAll('.value');
const equals = document.getElementById('equals');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const back = document.getElementById('backspace');

let temp = '';
let displayView = '';
let op = '';
let first = '';
let second = '';
let result = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        populateDisplay(key);
        temp += key.innerText;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (first == '') {
            first = temp;
        } else {
            second = temp;
            result = operate(op, Number(first), Number(second));
            first = result;
        }
        
        temp = '';
        op = operator.innerText;
        populateDisplay(operator);
    })
});

equals.addEventListener('click', () => {
    if(first =='') {
        return;
    }
    second = Number(temp);
    result = operate(op, Number(first), Number(second));
    display.innerText = result;
});

clear.addEventListener('click', () => {
    temp = '';
    op = '';
    first = '';
    second = '';
    displayView = '';
    display.innerText = '';
});


backspace.addEventListener('click', () => {
    if ("×" == displayView.slice(-1) || "÷" == displayView.slice(-1) ||
    "+" == displayView.slice(-1) || "−" == displayView.slice(-1)) {
        op = '';
    }
    temp = temp.slice(0, -1);
    displayView = displayView.slice(0, -1);
    display.innerText = displayView;
})