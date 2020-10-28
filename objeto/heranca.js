const avo = {atributo1: 'a'}
const pai = {__proto__: avo, atributo2: 'b'}
const filho = {__proto__: pai, atributo3: 'c'}

// setando um prototipo depois de criar um objeto

const bisavo = {atributo4: 'd'}

Object.setPrototypeOf(avo, bisavo)

console.log(avo.atributo4)

