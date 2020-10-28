const produtos = [
    {nome: 'notebook', preco: 1500},
    {nome: 'ipad', preco: 3000},
    {nome: 'geladeira', preco: 5000}
]

const resultado = produtos.map(produto => produto.preco).reduce(function(acumulador, atual) {
    return acumulador + atual
}) 

console.log(resultado)