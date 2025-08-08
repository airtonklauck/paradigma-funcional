// function somar(a, b, fn) {
//     return fn(a + b)
// }

// function multiplicarPor(multiplicador) {
//     console.log('Chamou multiplicador')
//     return function funcao(numero, posicao) {
//         console.log(posicao)
//         return numero * multiplicador
//     }
// }

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].map(multiplicarPor(2)))

// const produtos = [
//     {
//         nome: 'Trabalhe 4 horas',
//         categoria: 'livro'
//     },
//     {
//         nome: 'Mackbook',
//         categoria: 'eletronicos'
//     },
//     {
//         nome: 'Segredos JS Ninja',
//         categoria: 'livro'
//     }
// ]

// const produtosPorCategoria = produtos.reduce((acc, produto) => {
//     return (!acc[produto.categoria])
//         ?
//         { ...acc, [produto.categoria]: [produto] }
//         :
//         { ...acc, [produto.categoria]: [...acc[produto.categoria], produto] }
// }, {})

// const produtosPorCategoriaRefatorado = produtos.reduce((acc, produto) =>
// ({
//     ...acc,
//     [produto.categoria]: [...(acc[produto.categoria] || []), produto]
// }),
//     {}
// )

// Unary -------------------------------------------

function unary(fn) {
    return function apenasUmArg(arg) {
        return fn(arg)
    }
}

console.log([1.5, 23.3, 4.6, 5.6, 7.88, 9.0, 4].map(unary(parseInt)))