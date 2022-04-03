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
        const floatingSliceLen = floatingSlice.length
        return floatingSliceLen
    }
    return 0
}


function calculate(n1, n2, operation) {
    const fOperation = operations[operation]


    if (fOperation) {
        return fOperation(n1, n2)
    }
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
    const result = calculate(n1, n2, operation)
    displayResult(result)
    clearForm()
}

function main() {
    form.addEventListener('submit', handleFormSubmit)
}

main()
