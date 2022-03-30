const formulario = document.querySelector('.formulario')
const inputN1 = document.querySelector('input#n1')
const inputN2 = document.querySelector('input#n2')
const inputOperacao = document.querySelector('input#operacao')
const txtResultado = document.querySelector('.resultado')

function limparFormulario(){
    inputN1.value = ''
    inputN2.value = ''
    inputOperacao.value = ''
}

const calculadora = {
    '+': (n1, n2) => n1+n2, 
    '-': (n1, n2) => n1-n2, 
    '*': (n1, n2) => n1*n2, 
    '/': (n1, n2) => n1/n2,
}

function calcular(n1, n2, operacao){
    const fOperacao = calculadora[operacao]
    if(fOperacao){
        return fOperacao(n1, n2)
    }
}

function handleFormSubmit(e) {
    e.preventDefault()
    const n1 = Number(inputN1.value)
    const n2 = Number(inputN2.value)
    const operacao = inputOperacao.value
    const resultado = calcular(n1, n2, operacao)
    txtResultado.textContent = resultado
    limparFormulario()
}

formulario.addEventListener('submit', handleFormSubmit)