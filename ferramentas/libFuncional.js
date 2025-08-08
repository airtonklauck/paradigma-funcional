
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

// Ex 2 ------------------------------------

function paraJson(dados) {
    return dados.json()
}

const reqCarrinho = parcial(
    fetch,
    'http://localhost/api/airton-klauck/15-anos-thais',
    {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzYW9JZCI6IjY4OTI2ZmVlMTM3ZDBlZDliZjFjMGQ5MyIsInRpcG8iOiJhY2Nlc3MiLCJfaWQiOiIkMmEkMTAka0QvUGhZcTVuMTFsb3hORHNiVDRrdXkucmdUZkcyemNFem5sSWFPNDNtYXJZYWRrNWVGNUciLCJ1cmxFdmVudG8iOiIxNS1hbm9zLXRoYWlzIiwidXJsRXN0dWRpbyI6ImFpcnRvbi1rbGF1Y2siLCJpYXQiOjE3NTQ0Mjc3ODQsImV4cCI6MTc4NTk2Mzc4NH0.lfGpr7MOh3qPtlmze2g----ifg8WgwvSHHHAo5mEFi0',
            // 'Content-Type': ''
        }
    }
)

const precoItens = map()

reqCarrinho()
    .then(paraJson)
    .then(dados => dados.carrinho.itens.map(item => item.tamanhoPrecoEscolhido.precoImagem))
    .then(console.log)

function parcial(fn, ...args) {
    return (...novosArgs) => fn(...args, ...novosArgs)
}

// MAP
function map(fn) {
    return arr => arr.map(fn)
}



export default {
    unaria,
    identidade,
    deArrayParaArgs,
    deArgsParaArray,
    parcial,
    map
}