const display = document.querySelector('#display');
let tempOperator;
let tempValue = 0;
let displayLength;
let calcStatus = false; //if a calculation is complete, true, else false so user can't prematurely click =
//number buttons
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
const opButton = document.querySelectorAll('.op')
const commenceButton = document.querySelector('#commence');

//number button populate the displayn
numberButtons.forEach(e => e.addEventListener('click', (ev) => {
    let number = ev.target.textContent;
    (display.textContent === '0') ? display.textContent = number : display.textContent += number; 
    //get the second number without the operator
    let operatorLoc = display.textContent.match(/[\+÷\-x]+/);
    if (operatorLoc){
        let nextNumber = display.textContent.slice(operatorLoc.index + 1);
        console.log(nextNumber);
        tempValue = operate(tempOperator, parseFloat(tempValue), parseFloat(nextNumber));
    };
    displayLength = display.textContent.length;
    
}));

commenceButton.addEventListener('click', ev => {
    display.textContent = tempValue;
    
})

clearButton.addEventListener('click', ev => {
    display.textContent = 0;
    tempValue = 0;
})

opButton.forEach(e => e.addEventListener('click', (ev) => {
    let operator = ev.target.textContent;
    
    tempValue = parseFloat(display.textContent);
    tempOperator = operator;
    
    (display.textContent === '0') ? display.textContent = operator : display.textContent += operator}));

//the fun stuff, add the operator to display, save the value to 0 array

function roundTwo(i){
    return Math.round(i * 100) / 100;
}


function operate(operator, a, b){
    switch (operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x': 
            return a * b;
        case '÷':
            if (b === 0) {
                alert('DO NOT DIVIDE BY ZERO!');
                return;
            }
            return a / b;
        default:
            return NaN;
    }
}