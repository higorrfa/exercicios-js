// usando notaçao literal

const obj1 = {
    teste: 'teste'
}

// usando new

const obj2 = new Object

// funçao construtora

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

// funcao factory

function criarFuncionario(nome, salarioBase, faltas = 0) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)
