class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const higor = new Pessoa('Higor')

higor.falar()

const criarPessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const higor2 = criarPessoa('Higor')
higor2.falar()

function Pessoa2(nome) {
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

higor3 = new Pessoa('Higor')
higor3.falar()

