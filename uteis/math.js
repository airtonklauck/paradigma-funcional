function somar(arr) {
    return arr.reduce((acc, valorCorrente) => acc + valorCorrente, 0)
}

function adicionar(num) {
    return entrada => entrada + num
}

function multiplicar(fator) {
    return num => num * fator
}

function ehPar(num) {
    return num % 2 === 0
}

function ehImpar(num) {
    return num % 2 !== 0
}

function maiorQue(a) {
    return b => b > a
}

function maiorOuIgualQue(a) {
    return b => b >= a
}

function menorQue(a) {
    return b => b < a
}

function menorOuIgualQue(a) {
    return b => b <= a
}

export default {
    somar,
    adicionar,
    multiplicar,
    ehPar,
    ehImpar,
    maiorQue,
    maiorOuIgualQue,
    menorQue,
    menorOuIgualQue
}