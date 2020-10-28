function analisaPontos(stringPontos) {
    
    pontos = stringPontos.split(' ')
    
    let menorValor = 0
    let maiorValor = 0
    let recordes = 0

    for (let i = 1; i < pontos.length; i++) {
        if (Number(pontos[i]) > Number(pontos[maiorValor])) {
            maiorValor = i
            recordes++
           
        } else if (Number(pontos[i]) < Number(pontos[menorValor])) {
            menorValor = i
        }
    }

    return [recordes, menorValor + 1]
}

let pontos = '10 20 20 25 8 3 0 30 1' // 3,7
console.log(analisaPontos(pontos))

pontos = '10 9 8 7 6' 
console.log(analisaPontos(pontos)) // 0,5

pontos = '20 10 30' // 1,2
console.log(analisaPontos(pontos))

