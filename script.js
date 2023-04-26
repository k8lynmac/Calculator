let num = "";

//event listener for digit (0-9) buttons
function initializeNumberButtons() {
    //an array of length 10 for numbers 0-9
    const digits = document.querySelectorAll(".digit");
    

    //iterating through each position and listening for user click
    digits.forEach(digit => {
        digit.addEventListener("click", function() {
            num = num + digit.id;
            //displays the number as the user clicks 
            document.getElementById("calcdisplay").innerHTML = num; 
        });
    });
}

let dispValue = 0;
let operation = "";

//event listener for operator buttons
function initializeOperator() {
    //an array of length 4 for operators
    const operations = document.querySelectorAll(".operator");

    //iterating through each position and listening for user click
    operations.forEach(operator => {
        operator.addEventListener("click", function() { 
            dispValue = parseInt(num);
            operation = operator.id;
            console.log(dispValue + operation);
            document.getElementById("calchistory").innerHTML = dispValue + " " + operator.id;
            num="";
        });
    });
}

//event listener for equal button
function initializeEqual() {
    const equals = document.querySelector(".equals");

    //listening for user click
    equals.addEventListener("click", function() {
            let solution = operate(operation, dispValue, parseInt(num)); 
            document.getElementById("calchistory").innerHTML = dispValue + " " + operation + " " + num + " ="; 
            document.getElementById("calcdisplay").innerHTML = solution; 
        });
}

//event listener for clear and delete buttons
function initializeDeletes() {
    const removes = document.querySelectorAll(".bigbutton");

     //iterating through each position and listening for user click
     removes.forEach(removal => {
        removal.addEventListener("click", function() {
            document.getElementById("calchistory").innerHTML = "";
            document.getElementById("calcdisplay").innerHTML = ""; 
            num="";
        });
    });
}

initializeNumberButtons();
initializeOperator();
initializeEqual(); 
initializeDeletes();

//takes an operator and 2 numbers and calls one of the above functions
function operate(operation, first, second) {
    let result = 0;
    console.log(first + " " + operation + " " + second);

    if (operation === "+") {
        result = first + second;
    }
    else if (operation === "-") {
        result = first - second;
    }
    else if (operation === "x") {
        result = first * second;
    }
    else if (operation === "/") {
        result = first / second;
    }
    return result; 
}