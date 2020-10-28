function statusFruta(fruta) {
    switch(fruta) {
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Fruta invalida'         
    }
}

console.log(statusFruta('kiwi'))
console.log(statusFruta('maçã'))
console.log(statusFruta('melancia'))
console.log(statusFruta('uva'))
