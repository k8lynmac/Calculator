function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2; 
}

let num1 = "";

//event listener for digit (0-9) buttons
function initializeNumberButtons() {
    //an array of length 10 for numbers 0-9
    const digits = document.querySelectorAll(".digit");

    //iterating through each position and listening for user click
    digits.forEach(digit => {
        digit.addEventListener("click", function() {
            num1 = num1 + digit.id;
            console.log(num1); 
        });
    });
}

//event listener for operator buttons
function initializeOperator() {
    //an array of length 4 for operators
    const operations = document.querySelectorAll(".operator");

    //iterating through each position and listening for user click
    operations.forEach(operator => {
        operator.addEventListener("click", function() {
            console.log(operator.id); 
        });
    });
}

//event listener for equal button
function initializeEqual() {
    const equals = document.querySelector(".equals");

    //listening for user click
    equals.addEventListener("click", function() {
            console.log(equals.id); 
        });
}

//event listener for clear button
function initializeDeletes() {
    const removes = document.querySelectorAll(".bigbutton");

     //iterating through each position and listening for user click
     removes.forEach(removal => {
        removal.addEventListener("click", function() {
            console.log(removal.id); 
        });
    });
}


initializeNumberButtons();
initializeOperator();
initializeEqual(); 
initializeDeletes();


function display() {

}

let addOp = "+";
let subOp = "-";
let multOp = "*";
let divOp = "/";

//takes an operator and 2 numbers and calls one of the above functions
function operate(operator, num1, num2) {
    let result = 0;

    if (operator === addOp) {
        result = add(num1, num2);
    }
    else if (operator === subOp) {
        result = subtract(num1, num2);
    }
    else if (operator === multOp) {
        result = multiply(num1, num2);
    }
    else if (operator === divOp) {
        result = divide(num1, num2);
    }
    return result; 
}

