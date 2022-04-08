const form = document.querySelector('.form')
const inputN1 = document.querySelector('input#n1')
const inputN2 = document.querySelector('input#n2')
const inputOperation = document.querySelector('input#operation')
const resultField = document.querySelector('.result')

function clearForm() {
    inputN1.value = ''
    inputN2.value = ''
    inputOperation.value = ''
}

const operations = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
    '*': (n1, n2) => n1 * n2,
    '/': (n1, n2) => n1 / n2,
}

function getDecimalsCount(n) {
    const strN = n.toString()
    if (strN.includes('.')) {
        const floatingSlice = strN.split('.')[1]
        return floatingSlice.length
    }
    return 0
}

function precisionRound(number, precision) {
    var factor = 10 ** precision
    return Math.round(number * factor) / factor;
}


function calculate(n1, n2, operation) {
    const fOperation = operations[operation]

    if (fOperation) {
        const precision = Math.max(1, getDecimalsCount(Math.min(n1, n2)))
        return precisionRound(fOperation(n1, n2), precision * 10)
    }
    return ''
}

function getFormData() {
    const n1 = Number(inputN1.value)
    const n2 = Number(inputN2.value)
    const operation = inputOperation.value

    return {
        n1,
        n2,
        operation
    }
}

function displayResult(result) {
    resultField.textContent = result
}

function handleFormSubmit(e) {
    e.preventDefault()
    const { n1, n2, operation } = getFormData()
    clearForm()
    const result = calculate(n1, n2, operation)
    displayResult(`${n1}${operation}${n2} = ${result}`)
}

function main() {
    form.addEventListener('submit', handleFormSubmit)
}

main()
