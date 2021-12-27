function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    switch (operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*': 
            return a * b;
        case '/':
            return a / b;
        default:
            return NaN;
    }
}