function test(result, expectedResult, n){
    if(result !== expectedResult){
        return `Teste ${n} falhou`
    }
    return `Teste ${n} funcionou`
}


function testCase1(){
    let n1 = 4
    let n2 = "a"
    let operacao = "/"

    let result = calculate(n1, n2, operacao)
    return test(result, "erro", 1)
}

function testCase2(){
    let n1 = 4
    let n2 = 0
    let operacao = "/"

    let result = calculate(n1, n2, operacao)
    return test(result, "erro", 2)
}
function testCase3(){
    let n1 = 0
    let n2 = 2
    let operacao = "/"

    let result = calculate(n1, n2, operacao)
    return test(result, "erro", 3)
}

function testCase4(){
    let n1 = 4
    let n2 = 8
    let operacao = "a"

    let result = calculate(n1, n2, operacao)
    return test(result, "erro", 4)
}
function testCase5(){
    let n1 = 4
    let n2 = null;
    let operacao = "-"

    let result = calculate(n1, n2, operacao)
    return test(result, 4, 5)
}
function testCase6(){
    let n1 = .1
    let n2 = .2
    let operacao = "+"

    let result = calculate(n1, n2, operacao)
    return test(result, .3, 6)
}
function testCase7(){
    let n1 = 6
    let n2 = 4
    let operacao = "-"

    let result = calculate(n1, n2, operacao)
    return test(result, 2, 7)
}
function testCase8(){
    let n1 = 5
    let n2 = 2
    let operacao = "/"

    let result = calculate(n1, n2, operacao)
    return test(result, 2.5, 8)
}
function testCase9(){
    let n1 = 6
    let n2 = .2
    let operacao = "*"

    let result = calculate(n1, n2, operacao)
    return test(result, 1.2, 9)
}

function testCase10(){
    let n1 = .3
    let n2 = 3
    let operacao = "/"

    let result = calculate(n1, n2, operacao)
    return test(result, .1, 10)
}

function showTestResult(result){
    document.querySelector('p.test-result').textContent = result
}

function configTestsButtons(){
    const tests = [testCase1, testCase2, testCase3, testCase4, testCase5, testCase6, testCase7, testCase8, testCase9, testCase10]
    for(let i = 0; i<10; i++){
        document.querySelector(`button.run-test-${i+1}`).addEventListener('click', () => showTestResult(tests[i]()))
    }
}

document.querySelector('button.run-test-1').addEventListener('click', ()=> showTestResult(testCase1()))