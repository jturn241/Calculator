const add = function() {
    return Math.round((arguments[0] + arguments[1]) * 100) / 100;
};

const subtract = function() {
    return Math.round((arguments[0] - arguments[1]) * 100) / 100;
};

const divide = function() {
    if(arguments[1] === 0) {
        alert("Don't do that!");
    } else {
    return Math.round((arguments[0] / arguments[1]) * 100) / 100;
    }
};

const multiply = function() {
    return Math.round((arguments[0] * arguments[1]) * 100) / 100;
};

const operate = function(callback,...arguments) {
    return callback(arguments[0], arguments[1]);
};

let displayValue = "";
let valueOne = "";
let valueTwo = "";
let sign = "";

const populateDisplay = function () {
    if(arguments[0] === 'delete' && displayValue != "") {
        displayValue = displayValue.slice(0, -1);
        document.getElementById("screen").innerHTML = displayValue; 
    } else if (arguments[0] != 'delete') {
    displayValue += arguments[0].toString();
    document.getElementById("screen").innerHTML = displayValue;
    }      
};

const deleteButton = function () {
    if(displayValue != "") {
        displayValue = displayValue.slice(0, -1);
        document.getElementById("screen").innerHTML = displayValue;
    } else {
        return;
    }
};

const equals = function () {
    if(valueOne != "" && sign != "") {
        operator('=')
    } else {
        return;
    }
};

const disableButton = function () {
    document.getElementById("disabled").disabled = true;
}

const operator = function () {
    if (valueOne === "") {
        valueOne = parseFloat(displayValue);
        displayValue = "";
        sign = arguments[0];
        document.getElementById("disabled").disabled = false;
    } else if(arguments[0] === '=' && valueOne != "") {
        valueTwo = parseFloat(displayValue);
        displayValue = operate(sign, valueOne, valueTwo);
        document.getElementById("screen").innerHTML = displayValue;
        valueOne = "";
        valueTwo = "";
        sign = "";
        document.getElementById("disabled").disabled = false;
    } else if (valueOne != "" && valueTwo === "") {
        valueTwo = parseFloat(displayValue);
        valueOne = operate(sign, valueOne, valueTwo);
        displayValue = valueOne;
        document.getElementById("screen").innerHTML = displayValue;
        valueTwo = "";
        displayValue = "";
        sign = arguments[0];
        document.getElementById("disabled").disabled = false;
    }
};


const clearScreen = function () {
    displayValue = "";
    valueOne = "";
    valueTwo = "";
    sign = "";
    document.getElementById("screen").innerHTML = displayValue;
    document.getElementById("disabled").disabled = false; 
};

document.addEventListener('keydown', function(event){
    if(event.key == '0') {
      populateDisplay(0);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '1') {
      populateDisplay(1);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '2') {
      populateDisplay(2);
    }
});


document.addEventListener('keydown', function(event){
    if(event.key == '3') {
      populateDisplay(3);
    }
});


document.addEventListener('keydown', function(event){
    if(event.key == '4') {
      populateDisplay(4);
    }
});


document.addEventListener('keydown', function(event){
    if(event.key == '5') {
      populateDisplay(5);
    }
});


document.addEventListener('keydown', function(event){
    if(event.key == '6') {
      populateDisplay(6);
    }
});


document.addEventListener('keydown', function(event){
    if(event.key == '7') {
      populateDisplay(7);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '8') {
      populateDisplay(8);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '9') {
      populateDisplay(9);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == 'Backspace') {
      deleteButton();
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '+') {
      operator(add);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '-') {
      operator(subtract);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '*') {
      operator(multiply);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == '/') {
      operator(divide);
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == 'Enter') {
        equals();
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == 'Delete') {
        clearScreen();
    }
});