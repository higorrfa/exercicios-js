function calculaDelta(a, b, c) {
   return Math.pow(b,2) - (4 * a * c)
}

function bhaskara(a, b, c) {

    let delta = calculaDelta(a, b, c)
    
    if (delta < 0) {
        return "Delta negativo"
    }

    valor1 = (-b + Math.sqrt(delta)) / 2 * a
    valor2 = (-b - Math.sqrt(delta)) / 2 * a

    return [valor1, valor2]

}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))