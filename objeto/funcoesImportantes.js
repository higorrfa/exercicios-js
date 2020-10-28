const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)

// Object.assign
// Concatenando outros objetos em um único objeto

const obj1 = {a: 1}
const obj2 = {b: 3}
const obj3 = {c: 3, a: 4} // claro tenha algum atributo de nome igual, o valor do último é sobrescrito

const objFinal = Object.assign(obj1, obj2, obj3)

console.log(objFinal)

