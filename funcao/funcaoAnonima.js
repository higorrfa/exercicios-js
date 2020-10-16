const soma = function(a, b) {
    return a + b
}

// soma como funcao padrao

const resultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b))
}

resultado(1, 2)
resultado(10, 2)

// passando uma funcao de subtraçao como parametro

resultado(10, 2, function (a, b) {
    return a - b
})

// arrow function de multiplicacao

resultado(10, 2, (a, b) => a * b)

// definindo uma funçao como atributo de um objeto

const pessoa = {

    falar1: () => {
        return "oi"
    } 

    , falar2: () => "oi"

    , falar3: function () {
        return "oi"
    }
}

console.log(pessoa.falar1())
console.log(pessoa.falar2())
console.log(pessoa.falar3())
