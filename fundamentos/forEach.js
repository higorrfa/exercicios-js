nomes = [ 'higor', 'marcia', 'bulma']

nomes.forEach(nome => {
    console.log(nome)
});

carros = [{nome: 'ferrari', velocidade: 300}, {nome: 'fusca', velocidade: 50}, {nome: 'gol', velocidade: 100}]

carros.forEach(carro => {
    console.log(`Nome do carro: ${carro.nome}, velocidade: ${carro.velocidade}`)
})