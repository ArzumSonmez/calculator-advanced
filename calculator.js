let currentInput = '';
let previousInput = '';
let operator = '';
let result = '';

function appendNumber(number) {
currentInput += number;
updateDisplay(); // Update the display with new input
}

// Function to update the display
function updateDisplay() {
    document.querySelector('.js-result').textContent = currentInput;
}

//function to get the chosen operator
function getOperator (op) {
  if (currentInput === '') return; 
    operator = op;
    previousInput = currentInput; //giving currentInput to previousInput so we can add new nummber to currentInput
    currentInput = ''; // clearing current input for the next number
}

function calculation() {
  if (operator === '/' && currentInput === 0) {
  result = 'Error'; // Prevent division by zero
  }
  if (operator === '+') {
   result =  parseFloat(previousInput) + parseFloat(currentInput);
  } else if (operator === '-') {
    result =  parseFloat(previousInput) - parseFloat(currentInput);
  } else if (operator === '*') {
    result =  parseFloat(previousInput) * parseFloat(currentInput);
  } else if (operator === '/') {
    result =  parseFloat(previousInput) / parseFloat(currentInput);
  }

  currentInput = result.toString(); // Storing the result for further calculations
  previousInput = ''; // Clearing previous input
  operator = ''; // Clearing operator
  updateDisplay(); // Showing the result that we got
}
  //Function for clear button
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay(); // Clear the result display
}