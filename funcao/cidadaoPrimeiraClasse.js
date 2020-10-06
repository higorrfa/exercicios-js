// declarar de forma literal

function func1() {
    return "funcao literal"
}

console.log(func1())

// armazenar como um atributo de objeto

const obj = {}

obj.latir = function () {return "auau"}

console.log(obj.latir())

// armazenar em um array

const array = [function (a, b) { return a + b}]

console.log(array[0](1,2))

// uma funcao pode conter/retornar um valor

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
