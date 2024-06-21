let display = document.getElementById('output');
let currentInput = '';
let memory = 0;

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function appendFunction(func) {
    currentInput += func;
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        updateDisplay('Error');
    }
}

function updateDisplay(value = currentInput) {
    display.textContent = value;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function mc() {
    memory = 0;
}

function mPlus() {
    memory += parseFloat(currentInput);
}

function mMinus() {
    memory -= parseFloat(currentInput);
}

function mr() {
    currentInput = memory.toString();
    updateDisplay();
}