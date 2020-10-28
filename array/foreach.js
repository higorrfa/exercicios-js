const nomes = ['higor', 'marcia', 'bulma']

nomes.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

nomes.forEach(nome => console.log(nome))