// usando spread no objeto

const test = { nome: 'test', idade: 20}
const clone = { altura: 1.80, ...test}  // todos atributos de test estão sendo espalhados em clone

console.log(clone)

// usando spread no array

const array = [4, 5, 6, 7]  
const arrayClone = [1, 2, 3, ...array, 8, 9, 10]

console.log(arrayClone)