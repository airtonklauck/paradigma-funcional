
// UNARY
// [1.5, 23.3, 4.6, 5.6, 7.88, 9.0, 4].map(unaria(parseInt))
function unaria(fn) {
    return function apenasUmArg(arg) {
        return fn(arg)
    }
}

// IDENTITY
// function somar(a, b, fn = identidade) {
//     return fn(a + b)
// }
function identidade(arg) {
    return arg
}

// APPLY
// function somar(a, b, fn = identidade) {
//     return fn(a + b)
// }

// function geraResultado(fn) {
//     return fn([10, 20])
// }

// console.log(geraResultado(deArrayParaArg(somar)))
function deArrayParaArgs(fn) {
    return argsArr => fn(...argsArr)
}

// UNAPPLY
// function somar([param1, param2]) {
//     return param1 + param2
// }

// function geraResultado(fn) {
//     return fn(10, 20)
// }

// console.log(geraResultado(deArgParaArray(somar)))
function deArgsParaArray(fn) {
    return (...args) => fn(args)
}

// PARTIAL
// function soma(a, b, c, d, e) {
//     return a + b + c + d + e
// }
// const faltam3 = parcial(soma, 1, 2)
// const falta1 = parcial(faltam3, 2, 3)
// const concluir = falta1(1)
// console.log(concluir)

// function somar(a, b) {
//     return a + b
// }

// const valoresMais10 = [10, 20, 30].map(parcial(somar, 50))

// console.log(valoresMais10)

function parcial(fn, ...args) {
    return (...novosArgs) => fn(...args, ...novosArgs)
}

function compor(...fns) {
    return arg => fns.reduceRight((acc, fnAtual) => fnAtual(acc), arg)
}

function pipe(...fns) {
    return arg => fns.reduce((acc, fnAtual) => fnAtual(acc), arg)
}

function comporPromisses(...fns) {
    return arg =>
        fns.reduceRight((acc, fnAtual) =>
            Promise.resolve(acc).then(fnAtual),
            arg
        )
}

function pipePromisses(...fns) {
    return arg =>
        fns.reduce((acc, fnAtual) =>
            Promise.resolve(acc)
                .then(fnAtual),
            arg
        )
}

// MAP
function map(fn) {
    return arr => arr.map(fn)
}

function filter(fn) {
    return arr => arr.filter(fn)
}

function prop(prop) {
    return obj => obj[prop]
}



export default {
    unaria,
    identidade,
    deArrayParaArgs,
    deArgsParaArray,
    parcial,
    compor,
    pipe,
    comporPromisses,
    pipePromisses,
    map,
    filter,
    prop
}