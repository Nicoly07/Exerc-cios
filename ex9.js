function ex9(numero) {
    var soma = 0
    for (var i = numero; i >= 1; i--) {
        if (numero % i == 0) {
            soma = soma + i
        }
    }
    console.log(`A soma dos divisores é: ${soma}`)
}
ex9()