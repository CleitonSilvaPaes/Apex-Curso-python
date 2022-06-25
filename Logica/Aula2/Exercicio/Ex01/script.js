let n2 = parseFloat(prompt())
let n3 = parseFloat(prompt())
let n1 = parseFloat(prompt())

let notas = [n1, n2, n3]

let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length
alert("A media das notas é: " + media)