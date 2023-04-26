// globals
let solution = 0;
let dispValue = 0;
let operation = "";
let num = "";
let opCount=0;
let eqCount = 0;
let storeEqual = 0;

initializeNumberButtons();
initializeOperator();
initializeEqual(); 
initializeDeletes();

//event listener for digit (0-9) buttons
function initializeNumberButtons() {
    const digits = document.querySelectorAll(".digit");
        digits.forEach(digit => {
            digit.addEventListener("click", function() {
                num = num + digit.id;
                
                //displays the number as the user clicks 
                document.getElementById("calcdisplay").innerHTML = num; 
        });
    });
}

//event listener for operator buttons
function initializeOperator() {
    const operations = document.querySelectorAll(".operator");

    operations.forEach(operator => {
        operator.addEventListener("click", function() {
            
            if (opCount === 0) {
                dispValue = parseInt(num);
                operation = operator.id;
                document.getElementById("calchistory").innerHTML = dispValue + " " + operation;
                num="";
                opCount ++;
            }
            else if (opCount > 0 && eqCount > 0) {
                
                operation = operator.id;
                document.getElementById("calchistory").innerHTML = storeEqual + " " + operation;
                document.getElementById("calcdisplay").innerHTML = ""; 
                dispValue = storeEqual;
                num = "";
                eqCount = 0;
            }
             else {
                solution = operate(operation,  parseFloat(dispValue), parseFloat(num));
                operation = operator.id;
                document.getElementById("calchistory").innerHTML = solution + " " + operation;
                document.getElementById("calcdisplay").innerHTML = ""; 
                dispValue = solution;
                num = "";
            }
        });
    });
}

//event listener for equal button
function initializeEqual() {
    const equals = document.querySelector(".equals");

    equals.addEventListener("click", function() {
            solution = operate(operation, parseFloat(dispValue), parseFloat(num));
            document.getElementById("calchistory").innerHTML = dispValue + " " + operation + " " + num + " ="; 
            document.getElementById("calcdisplay").innerHTML = solution; 
            num = "";
            storeEqual = solution; 
            eqCount ++;
        });
}

//event listener for clear and delete buttons
function initializeDeletes() {
    const removes = document.querySelectorAll(".bigbutton");

     removes.forEach(removal => {
        removal.addEventListener("click", function() {
            document.getElementById("calchistory").innerHTML = "";
            document.getElementById("calcdisplay").innerHTML = ""; 
            num = "";
            dispValue = 0;
            digCount = 0;
            opCount = 0;
            eqCount = 0;
        });
    });
}

//takes an operator and 2 numbers and calls one of the above functions
function operate(operation, first, second) {
    let result = 0;

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
        if (second === 0) {
            alert("Dividing by 0 returns undefined result");
            return;
        }
        result = first / second;
        result = result.toFixed(2);
    }
 
    console.log(first + " " + operation + " " + second + " = " + result);
    return result; 
}