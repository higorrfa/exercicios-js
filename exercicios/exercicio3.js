potencia = (base, expoente) => console.log(Math.pow(base, expoente))

potencia(2,2)

potencia = (base, expoente) => {
    resultado = 1
    
    for (let i = 0; i < expoente; i++) {
        resultado *= base
    }

    return resultado
}

console.log(potencia(3,3))
console.log(potencia(3,0))