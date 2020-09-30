console.log(1 / 0) // Não dá erro, js permite esse tipo de operação e retorna Infinity

console.log('10' / 5) // Não dá erro, js pega o valor numérico da string e faz a operaçào

console.log('test' * 2) // Resultado será NaN

console.log(0.1 + 0.7) // Resultado não será 0.8 e sim 0.79999...

// console.log(10.toString())
// Gera erro pois não é possível fazer esse tipo de chamada pelo literal

console.log((10).toString()) // Forma correta de chamar a função