tipoDeTriangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado3 == lado1) {
        console.log('Equilátero')
    } else if (lado1 != lado2 && lado2 != lado3) {
        console.log('Escaleno')
    } else {
        console.log('Isósceles')
    }
}

tipoDeTriangulo(1,2,3)
tipoDeTriangulo(2,2,2)
tipoDeTriangulo(2,2,3)