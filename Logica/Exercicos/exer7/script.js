// Peça para informar 3 notas do alunos e sua quantidade de faltas para o aluno aprovar é necessario que ele tenha media acima de 7 e faltas menor que 50.

let media = 0
let nota1 = parseFloat(prompt('Digite a nota 1: '))
let nota2 = parseFloat(prompt('Digite a nota 2: '))
let nota3 = parseFloat(prompt('Digite a nota 3: '))
media = nota1 + nota2 + nota3
media /= 3
let falta = parseFloat(prompt('Digite a faltas do aluno: '))

if (media >= 7 && falta < 50) {
    document.write('Aprovado com media: ' + media + ' e todas as faltas do aluno: ' + falta)
} else {
    document.write('Reprovado com media: '+ media + ' e todas as faltas do aluno: ' + falta)
}
