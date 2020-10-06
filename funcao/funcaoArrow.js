// funcao anonima

let dobro = function (a) {
    return 2 * a
}

// arrow function que faz o mesmo da anterior

dobro = a => {
    return a * 2
}

// simplificando a funcao em apenas uma linha

dobro = a => a * 2

//// fazendo mais exemplos

let test = () => {
    return "test"
}

test = () => "test"

console.log(test())