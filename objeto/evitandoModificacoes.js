// usando Object.preventExtensions podemos criar um objeto em que não podemos adicionar novos atributos
// mas consegue excluir e alterar atributos existentes

const produto = Object.preventExtensions({
    nome: 'borracha', preco: 20, tag: 123123
})

console.log(produto)

produto.descricao = 'testando'

console.log(produto)

// usando Object.seal podemos criar um objeto em que não podemos adicionar novos atributos
// nem excluir, mas podemos alterar

const pessoa = Object.seal({
    nome: 'Higor', idade: 22
})

delete pessoa.nome
pessoa.altura = 180

console.log(pessoa)

pessoa.idade = 23

console.log(pessoa)

// usando Object.freeze nao podemos fazer nenhuma alteraçao no objeto, seja adicionar, alterar ou deletar
