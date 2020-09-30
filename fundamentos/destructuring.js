const Pessoa = {
    nome: 'Higor',
    altura: 1.80,
    idade: 22,
    endereco: {
        rua: 'Luiza Bezerra Motta',
        numero: '950'
    }


}

const {nome, altura} = Pessoa

console.log(nome, altura.toFixed(2))

const {nome: n, altura: a} = Pessoa

console.log(n, a)

const {endereco: {rua, numero}} = Pessoa

console.log(rua, numero)

//////////////////////////////////////////////////


