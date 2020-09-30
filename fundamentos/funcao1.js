// sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(10, 1)

// com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(1, 2))