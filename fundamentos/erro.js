function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

function tratarErroELancar(erro) {
    throw new Error('...')
}

const obj = {nome: 'Roberto'}

imprimirNomeGritando(obj)

