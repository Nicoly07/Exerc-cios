function ex7() {
    principal7() 
}
// função testada
function principal7() {
    var soma = 0
    var contador = 0
    var numero = Number(prompt(`Informe um número`))
    do {
        contador++
        soma = soma + numero
        var numero = Number(prompt(`Informe outro número. Digite um número negativo para encerrar!`))
    }
    while (numero >= 0)

    console.log(`A média dos números é: ${soma/contador}`)
}
ex7()