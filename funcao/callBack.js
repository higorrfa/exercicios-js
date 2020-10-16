// testando uma funcao callback

const nomes = ["higor", "marcia", "bulma"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

nomes.forEach(imprimir)

const notas = [5, 6, 7, 8, 10, 0, 2, 6, 8, 20]

// filtrando notas menores que 7 em um array

// sem callback

let notasBaixas = []

for (i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas)