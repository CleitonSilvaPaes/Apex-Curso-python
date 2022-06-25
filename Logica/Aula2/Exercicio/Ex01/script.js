let notas = []
let soma = 0
for (let i = 0; i < 3; i++) {
    notas[i] = parseFloat(prompt('Digite a nota ' + (i) + ': '))
    soma += notas[i]
}
let media = soma / notas.length
document.write('A media das notas é: ' + media)