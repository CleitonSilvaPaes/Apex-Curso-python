// Faça um programa que calcule o mostre a média de N notas.

let notas = []
let media = 0
let soma = 0
let n = parseInt(prompt('Digite a quantidade de notas: '))

for (let i = 0; i < n; i++) {
    notas[i] = parseFloat(prompt('Digite a nota: '))
    soma += notas[i]
}
media = soma / n
alert(`A média das notas é: ${media}`)