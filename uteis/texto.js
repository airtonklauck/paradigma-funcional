function paraJson(dados) {
    return dados.json()
}

function paraMaiusculo(texto) {
    return texto.toUpperCase()
}

function apararEspacosBordas(texto) {
    return texto.trim()
}

export default {
    paraJson,
    paraMaiusculo,
    apararEspacosBordas
}