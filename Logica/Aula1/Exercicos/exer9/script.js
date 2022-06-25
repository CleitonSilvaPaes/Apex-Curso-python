// Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
let n1 = parseFloat(prompt('Numero 1: '))
let n2 = parseFloat(prompt('Numero 2: '))
let n3 = parseFloat(prompt('Numero 3: '))

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        document.write(`${n1}
        ${n2}
        ${n3}`)
    } else {
        document.write(`${n1}
        ${n3}
        ${n2}`)
    }
} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        document.write(`${n2}
        ${n1}
        ${n3}`)
    } else {
        document.write(`${n2}
        ${n3}
        ${n1}`)
    }
} else if (n3 > n1 && n3 > n2) {
    if (n1 > n2){
        document.write(`${n3}
        ${n1}
        ${n2}`)
    } else {
        document.write(`${n3}
        ${n2}
        ${n1}`)
    }
}