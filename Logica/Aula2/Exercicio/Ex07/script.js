// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.

let pares = 0
let impares = 0

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt('Digite um número: '))
    if (numero % 2 == 0) {
        pares++
    } else {
        impares++
    }
}
alert(`${pares} números pares e ${impares} números ímpares`)