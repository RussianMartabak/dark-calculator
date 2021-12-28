const display = document.querySelector('#display');
let tempOperators = [];
let numbers = [];
let tempValue = 0;
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
    
    let operators = [...display.textContent.matchAll(/[\+÷\-x]+/g)];
    //find the last item
    let lastItem = operators[operators.length - 1];
    if (lastItem) {
        tempOperators.push(lastItem['0']);
    }
    console.log(tempOperators)
    //put all the operators and numbers to their respective arrays
        
}));

commenceButton.addEventListener('click', ev => {
    let tempNumbers = [...display.textContent.matchAll(/\d+/g)];
    tempNumbers = tempNumbers.map(e => parseFloat(e['0']));
    
    display.textContent = tempValue;
    console.log(tempNumbers);
    tempValue = 0;
    //compute using the two array, the limit is on the number so surplus operator is ignored
    //clean up
    if(numbers.length !== 0) numbers.splice(0, numbers.length);
    if(tempOperators.length !== 0) tempOperators.splice(0, tempOperators.length);

})

clearButton.addEventListener('click', ev => {
    display.textContent = 0;
    tempValue = 0;
})

opButton.forEach(e => e.addEventListener('click', (ev) => {
    let operator = ev.target.textContent;
    (display.textContent === '0') ? display.textContent = operator : display.textContent += operator}));

//the fun stuff, add the operator to display, save the value to 0 array

function roundTwo(i){
    if ((i * 10) % 10 !== 0){
        return Math.round(i * 100) / 100;
    } else {
        return i;
    }
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
                
                return 'no';
            }
            return a / b;
        default:
            return NaN;
    }
}