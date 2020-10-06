// melhor forma de setar parametros como padrao

function soma(a = 0, b = 0, c = 0) {
    return a + b + c
}

console.log(soma())
console.log(soma(1, 1, 1))
console.log(soma(1, 2, 3))
