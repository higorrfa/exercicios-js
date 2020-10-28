const produtos = [
    {nome: 'notebook', preco: 1500},
    {nome: 'ipad', preco: 3000},
    {nome: 'geladeira', preco: 5000}
]

baratos = produtos.filter(function(e) {
    return e.preco <= 1500
})

console.log(baratos)

Array.prototype.filter2 = function(callback) {
    
}