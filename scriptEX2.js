let memory = 0;

function appendNumber(value) {
    document.getElementById('result').innerText += value;
}

function setOperator(operator) {
    document.getElementById('result').innerText += operator;
}

function clearResult() {
    document.getElementById('result').innerText = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').innerText);
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}
function squared(value) {
    document.getElementById('result').innerText += '**2';
}

function squareRoot() {
    try {
        const result = eval(document.getElementById('result').innerText);
        // Calculates square root of the result
        const result1 = Math.sqrt(result);

        // Update the result displayed
        document.getElementById('result').innerText = result1;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}

function logBaseTen(value) {
    const result = eval(document.getElementById('result').innerText);
    // Calculates square root of the result
    const result1 = Math.log10(result);
    // Update the result displayed
    document.getElementById('result').innerText = result1;
}

function logBaseTwo(value) {
    const result = eval(document.getElementById('result').innerText);
    // Calculates square root of the result
    const result1 = Math.log2(result);
    // Update the result displayed
    document.getElementById('result').innerText = result1;
}

function naturalLog(value) {
    const result = eval(document.getElementById('result').innerText);
    // Calculates square root of the result
    const result1 = Math.log(result);
    // Update the result displayed
    document.getElementById('result').innerText = result1;
}

function appendDecimal() {
    const currentResult = document.getElementById('result').innerText;
    // Check if the current result is 'Error', and clear it if necessary
    if (currentResult === 'Error') {
        clearResult();
    }

    // Check if the current result is empty or the last character is an operator
    // If true, append '0.' to start a new decimal number
    if (currentResult === '' || /[+\-*/]$/.test(currentResult)) {
        document.getElementById('result').innerText += '0.';
    }
    // Otherwise, append the decimal point if there isn't already one
    else if (!currentResult.includes('.')) {
        document.getElementById('result').innerText += '.';
    }
}

function factorial() {
    const result = parseInt(document.getElementById('result').innerText);
    let result1 = 1;
    //let for the result1 variable because it needs to be updated inside the loop.
    for (let i = result; i > 0; i--) {
        result1 *= i;
    }
    // Update the result displayed
    document.getElementById('result').innerText = result1;
}

function inverse() {
    const result = parseFloat(document.getElementById('result').innerText);
    if (result !== 0) {
        const result1 = 1 / result;
        document.getElementById('result').innerText = result1;
    } else {
        clearResult();
    }
}

function absolute() {
    const result = parseFloat(document.getElementById('result').innerText);
    let result1;

    if (result < 0) {
        result1 = (-1) * result;
    } else {
        result1 = result;
    }

    // Update the result displayed
    document.getElementById('result').innerText = result1;
}

function powerOfTen(value) {
    const result = eval(document.getElementById('result').innerText);
    // Calculates square root of the result
    const result1 = 10**result;
    // Update the result displayed
    document.getElementById('result').innerText = result1;
}

function plusMinus() {
    const result = parseFloat(document.getElementById('result').innerText);
    document.getElementById('result').innerText = -result;
}

function exponential() {
    const result = parseFloat(document.getElementById('result').innerText);
    const resultExp = Math.exp(result);
    document.getElementById('result').innerText = resultExp;
}

function calculatePercentage() {
    const result = parseFloat(document.getElementById('result').innerText);
    const resultPercentage = result / 100;
    document.getElementById('result').innerText = resultPercentage;
}

function deleteLastCharacter() {
    const currentResult = document.getElementById('result').innerText;
    
    // Check if the result is not empty
    if (currentResult.length > 0) {
        // Remove the last character
        const updatedResult = currentResult.slice(0, -1);
        document.getElementById('result').innerText = updatedResult;
    }
}

// Memory functions

// Function to clear the memory
function memoryClear() {
    memory = 0;
}

// Function to recall the value stored in memory and append it to the result
function memoryRecall() {
    document.getElementById('result').innerText += memory;
}

// Function to add the current result to the memory
function memoryAdd() {
    // Get the current result as a numeric value
    const currentResult = parseFloat(document.getElementById('result').innerText);
    
    // Add the current result to the memory, handling NaN cases
    memory += isNaN(currentResult) ? 0 : currentResult;
}

// Function to subtract the current result from the memory
function memorySubtract() {
    // Get the current result as a numeric value
    const currentResult = parseFloat(document.getElementById('result').innerText);
    
    // Subtract the current result from the memory, handling NaN cases
    memory -= isNaN(currentResult) ? 0 : currentResult;
}

function blankButton() {
    // This function does nothing, as it is intended to be a blank button
}

// Function to append a number to the result
function appendNumber(value) {
    document.getElementById('result').innerText += value;
}
