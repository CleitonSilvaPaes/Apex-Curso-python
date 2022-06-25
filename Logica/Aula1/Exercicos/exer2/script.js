// Ex02
media = 0
nota1 = parseFloat(prompt('Nota 1: '))
nota2 = parseFloat(prompt('Nota 2: '))
nota3 = parseFloat(prompt('Nota 3: '))
media = nota1 + nota2 + nota3
media /= 3
if (media > 7) {
    document.write('Aprovado media: ' + media)
}
else if (media < 7) {
    document.write('Reprovado media: ' + media)
}
else {
    document.write('Sua Media e exatamente: ' + media)
}
