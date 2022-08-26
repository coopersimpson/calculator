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

// window.addEventListener('keydown', handleKeyboardInput)
// equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
// deleteButton.addEventListener('click', deleteNumber)
// decimalButton.addEventListener('click', appendPoint)

digitButtons.forEach((digit) => {
    digit.addEventListener('click', () => appendNumber(digit.dataset.number))
})
operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => setOperation(operator.dataset.operator))
})

//////

function resetScreen() {
    screenCurrent.textContent = ''
    shouldResetScreen = false
}

function appendNumber(number) {
    if (screenCurrent.textContent === '0' || shouldResetScreen) {
        resetScreen()
    }
    screenCurrent.textContent += number
}

function setOperation(operator) {
    // if (currentOperation !== null) evaluate()
    firstOperand = screenCurrent.textContent
    currentOperation = operator
    screenPrevious.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

function clear() {
    screenCurrent.textContent = '0'
    screenPrevious.textContent =''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
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