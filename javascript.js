let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const digitButtons = document.querySelectorAll('.digits')
const operatorButtons = document.querySelectorAll('.operators')
const decimalButton = document.getElementById('decimal')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const screenCurrent = document.getElementById('screen-current')
const screenPrevious = document.getElementById('screen-previous')


digitButtons.forEach((digit) => {
    digit.addEventListener('click', () => appendNumber(digit.dataset.number))
})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => console(operator.dataset.operator))
})



function appendNumber(number) {
    screenCurrent.textContent += number
}

function setOperation(operator) {
 // needing to store first operand here
}



function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

// function operate(operator, num1, num2) {
//     return operator(num1, num2)
// }