let valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    let valor = 'Local'
    minhaFuncao()
}

exec() // o valor retornado será o definido no escopo global


