// Faça um programa onde peça para o usuario informar 3 numeros, e depois mostre qual o MENOR numero entre eles.
let numero = parseFloat(prompt('Numero 1: '))
let numero2 = parseFloat(prompt('Numero 2: '))
let numero3 = parseFloat(prompt('Numero 3: '))

if (numero < numero2 && numero < numero3) {
    document.write('Numero 1 eh o MENOR ')
} else if (numero2 < numero3 && numero2 < numero){
    document.write('Numero 2 eh o MENOR ')
} else if (numero3 < numero2 && numero3 < numero) {
    document.write('Numero 3 eh o MENOR ')
} else {
    document.write('Numeros são iguais')
}