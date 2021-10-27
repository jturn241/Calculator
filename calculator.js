const add = function() {
    return arguments[0] + arguments[1];
};

const subtract = function() {
    return arguments[0] - arguments[1];
};

const divide = function() {
    if(arguments[1] === 0) {
        alert("don't do that!");
    } else {
    return arguments[0] / arguments[1];
    }
};

const multiply = function() {
    return arguments[0] * arguments[1];
};

const operate = function(callback,...arguments) {
    return callback(arguments[0], arguments[1]);
};

let displayValue = "";
let valueOne = "";
let valueTwo = "";
let sign = "";

const populateDisplay = function () {
        displayValue += arguments[0].toString();
        document.getElementById("screen").innerHTML = displayValue;      
};

const equals = function () {
    if(valueOne != "" && sign != "") {
        operator('=')
    } else {
        return;
    }
};

const operator = function () {
    if (valueOne === "") {
        valueOne = parseFloat(displayValue);
        displayValue = "";
        sign = arguments[0];
    } else if(arguments[0] === '=' && valueOne != "") {
        valueTwo = parseFloat(displayValue);
        displayValue = operate(sign, valueOne, valueTwo);
        document.getElementById("screen").innerHTML = displayValue;
        valueOne = "";
        valueTwo = "";
        sign = "";
    } else if (valueOne != "" && valueTwo === "") {
        valueTwo = parseFloat(displayValue);
        valueOne = operate(sign, valueOne, valueTwo);
        displayValue = valueOne;
        document.getElementById("screen").innerHTML = displayValue;
        valueTwo = "";
        displayValue = "";
        sign = arguments[0];
    }
};


const clearScreen = function () {
    displayValue = "";
    valueOne = "";
    valueTwo = "";
    sign = "";
    document.getElementById("screen").innerHTML = displayValue;
};
