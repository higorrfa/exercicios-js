const vacinados = new Map()
vacinados.set('Higor', {vacinado: false})
vacinados.set('Bulma', {vacinado: true})

console.log(vacinados.get('Higor'))
console.log(vacinados.get('Bulma'))
console.log(vacinados)

const chavesVariadas = new Map([
    [function() {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((chave, valor) => {
    console.log(chave, valor)
})

