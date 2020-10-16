function criarPessoa(nome, idade, altura) {
    return {
        nome: nome,
        idade: idade,
        altura: altura
    }
}

higor = criarPessoa('Higor', 22, 180)

console.log(higor)