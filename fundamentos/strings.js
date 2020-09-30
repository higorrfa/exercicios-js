const a = 'test'

console.log(a.charAt(2))
console.log(a.charAt(5)) // Mesmo estando fora do range, js não gera erros após esse tipo de operação
console.log(a.charCodeAt(2)) // Posição na tabela ASCII
console.log(a.indexOf('t'))
console.log(a.substring(0,2))
console.log(a.concat(' fail'))
console.log(a.replace(/\w/g,'f'))

console.log('a,b,c'.split(','))