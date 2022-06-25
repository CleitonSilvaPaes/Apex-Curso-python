// O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.
let maior = 0
let menor = 0
let contador = 0
let temperatura = []
let soma = 0
while (true) {
    temperatura[contador] = parseFloat(prompt('Digite a temperatura: '))
    soma += temperatura[contador]
    if (temperatura[contador] == -1000) {
        break
    }
    if (contador == 0) {
        maior = temperatura[contador]
        menor = temperatura[contador]
    } else if (temperatura[contador] > maior) {
        maior = temperatura[contador]
    } else if (temperatura[contador] < menor) {
        menor = temperatura[contador]
    }
    contador++
}
let media = soma / contador
document.write('A maior temperatura é: ' + maior + '<br>')
document.write('A menor temperatura é: ' + menor + '<br>')
document.write('A media das temperaturas é: ' + media)
// Compare this snippet from Apex/Logica/Aula2/Exercicio/Ex02/script.js: