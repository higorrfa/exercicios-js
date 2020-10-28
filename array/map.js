numeros = [1, 2, 3, 4, 5]

let resultado = numeros.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = (e) => e + 10
const triplo = (e) => e * 3

console.log(numeros.map(soma10))
console.log(numeros.map(triplo))