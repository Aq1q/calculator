function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x/y;
}

function operate(operator, x, y) {
    let result;
    switch(operator) {
        case "+":
            result = addition(x, y);
            break;
        case "-":
            result = subtraction(x, y);
            break;
        case "*":
            result = multiplication(x, y);
            break;
        case "/":
            result = division(x, y);
            break;
    }
    return result;
}