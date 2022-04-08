function test(result, expectedResult, n) {
    if (result !== expectedResult) {
        return `❌ Teste ${n} falhou (resultado esperado: "${expectedResult}")`
    }
    return `✔ Teste ${n} funcionou`
}

function testWithInterface(n1, n2, operation, expectedResult, n) {
    document.querySelector('input#n1').value = n1
    document.querySelector('input#n2').value = n2
    document.querySelector('input#operation').value = operation

    const { n1: formN1, n2: formN2, operation: formOperation } = getFormData()
    const result = calculate(formN1, formN2, formOperation)
    document.querySelector('p.result').textContent = result

    return test(result, expectedResult, n)
}

function testCaseFactory(n1, n2, operation, expectedResult, n) {
    const fn = () => {
        return testWithInterface(n1, n2, operation, expectedResult, n)
    }
    return fn
}

const testCase1 = testCaseFactory(4, "a", "/", "erro", 1)
const testCase2 = testCaseFactory(4, 0, "/", "erro", 2)
const testCase3 = testCaseFactory(0, 2, "/", "erro", 3)
const testCase4 = testCaseFactory(4, 8, "a", "erro", 4)
const testCase5 = testCaseFactory(4, null, "-", 4, 5)
const testCase6 = testCaseFactory(.1, .2, "+", .3, 6)
const testCase7 = testCaseFactory(6, 4, "-", 2, 7)
const testCase8 = testCaseFactory(5, 2, "/", 2.5, 8)
const testCase9 = testCaseFactory(6, .2, "*", 1.2, 9)
const testCase10 = testCaseFactory(.3, 3, "/", .1, 10)


function showTestResult(result) {
    document.querySelector('p.test-result').textContent = result
}

function configTestsButtons() {
    const tests = [testCase1, testCase2, testCase3, testCase4, testCase5, testCase6, testCase7, testCase8, testCase9, testCase10]
    for (let i = 0; i < 10; i++) {
        document.querySelector(`button.run-test-${i + 1}`).addEventListener('click', () => showTestResult(tests[i]()))
    }
}

configTestsButtons()