// Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo deles.

let n1 = parseInt(prompt('Digite o primeiro número: '))
let n2 = parseInt(prompt('Digite o segundo número: '))

if (n1 > n2) {
    let aux = n1
    n1 = n2
    n2 = aux
}
for (let i = n1+1; i < n2; i++) {
    document.write(`${i}<br>`)
}