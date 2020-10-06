// arguments é um array que contem os argumentos que foram passados como parametro

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2))
console.log(soma(1, 2, 4, 5, 6, 7, 8, 9, 10))