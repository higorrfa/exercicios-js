const sequencia = {
    _valor: 1, // convençao

    get valor() {return this._valor},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
        
}