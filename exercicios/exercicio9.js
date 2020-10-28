function corrigirNota(nota) {
    let notaArredondada = arredondar(nota)

    if (notaArredondada >= 40) {
        return notaArredondada
    } else {
        return  "Reprovado"
    }


}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(corrigirNota(38))