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


function testCase1() {
    let n1 = 4
    let n2 = "a"
    let operation = "/"

    return testWithInterface(n1, n2, operation, "erro", 1)
}

function testCase2() {
    let n1 = 4
    let n2 = 0
    let operation = "/"

    return testWithInterface(n1, n2, operation, "erro", 2)
}
function testCase3() {
    let n1 = 0
    let n2 = 2
    let operation = "/"

    return testWithInterface(n1, n2, operation, "erro", 3)

}

function testCase4() {
    let n1 = 4
    let n2 = 8
    let operation = "a"

    return testWithInterface(n1, n2, operation, "erro", 4)

}
function testCase5() {
    let n1 = 4
    let n2 = null;
    let operation = "-"

    return testWithInterface(n1, n2, operation, 4, 5)

}
function testCase6() {
    let n1 = .1
    let n2 = .2
    let operation = "+"

    return testWithInterface(n1, n2, operation, .3, 6)
}
function testCase7() {
    let n1 = 6
    let n2 = 4
    let operation = "-"

    return testWithInterface(n1, n2, operation, 2, 7)
}
function testCase8() {
    let n1 = 5
    let n2 = 2
    let operation = "/"

    return testWithInterface(n1, n2, operation, 2.5, 8)
}
function testCase9() {
    let n1 = 6
    let n2 = .2
    let operation = "*"

    return testWithInterface(n1, n2, operation, 1.2, 9)
}

function testCase10() {
    let n1 = .3
    let n2 = 3
    let operation = "/"

    return testWithInterface(n1, n2, operation, .1, 10)
}

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