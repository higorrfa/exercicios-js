// quase um for each

for (let letra of 'Test') {
    console.log(letra)
}

const test = ['Higor', 'Bulma', 'Pan', 'Piccolo']

for (let nome of test) {
    console.log(nome)
}

const alturas = new Map([
    ['Higor', 180],
    ['Bulma', 25],
    ['Pan', 150],
    ['Piccolo', 210]
])

for (let nome of alturas.values()) {
    console.log(nome)
}

for (let altura of alturas.keys()) {
    console.log(altura)
}

for (let [nome, altura] of alturas.entries()) {
    console.log(nome, altura)
}
