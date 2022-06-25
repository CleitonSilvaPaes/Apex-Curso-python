// Faça um programa onde peça para o usuario informar 3 numeros, e depois mostre qual o MAIOR numero entre eles.
let n1 = parseFloat(prompt("Numero 1: "));
let n2 = parseFloat(prompt("Numero 2: "));
let n3 = parseFloat(prompt("Numero 3: "));

if (n1 > n2 && n1 > n3) {
    document.write('Numero 1 é o MAIOR')
}
else if (n2 > n3 && n2 > n1) {
    document.write('Numero 2 é o MAIOR')
}
else if (n3 > n1 && n3 > n2) {
    document.write('Numero 3 é o MAIOR')
}
else {
    document.write('Todas iguais')
}