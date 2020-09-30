const test1 = {
    nome: 'Higor'
}

const test2 = test1 // nesse tipo de atribuiçao estou dando a test2 o endereço de memoria de test 1
                    // ou seja, se eu alterar test1 tbm altero test2

const test3 = {
    nome: test1.nome // o nome em test3 nao muda pq criei outro objeto a partir dos atributos de test1
                     // e nao apenas atribui a referencia
}

test1.nome = 'mudou'

console.log(test1, test2, test3)

