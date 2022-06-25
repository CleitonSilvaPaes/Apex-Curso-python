// Faça um programa que peça o sexo da pessoa F ou M e a sua altura.E mostre o peso ideal da pessoa.

// Calculo: Masculino: (72.7 * altura) - 58 Calculo: Feminino: (62.1 * altura) - 44.7

let sexo = parseFloat(prompt(`1 - Masculino
2 - Feminino`))
let altura = parseFloat(prompt('Digite sua altura EX: 1.70'));

if (sexo == 1) {
    imc = (72.7 * altura) - 58
    document.write(`Seu imc = ${imc}`)
} else if (sexo == 2) {
    imc = (62.1 * altura) - 44
    document.write(`Seu imc = ${imc}`)
} else {
    document.write(`Opção invalida`)
}