function Carro(velocidadeMaxima = 200, delta = 5) {
    
    // atributo privado
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

ferrari = new Carro(500, 20)

ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(ferrari.velocidadeAtual) // undefined
