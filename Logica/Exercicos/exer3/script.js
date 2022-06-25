// Criar uma calculadora, onde o usuario informa 2 números e a operação matemática que ele quer e depois mostrar o resultado na tela.
let n1 = parseFloat(prompt('Numero 1: '));
let n2 = parseFloat(prompt('Numero 2: '));
let opcao = prompt('Operação Desejada \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão')

if (opcao == '1') {
    document.write('Soma ' + (n1 + n2))
}
else if (opcao == '2') {
    document.write('Subtração ' + (n1 - n2))
}
else if (opcao == '3') {
    document.write('Multiplicação ' + (n1 * n2))
}
else if (opcao == '4') {
    document.write('Divisão ' + (n1 / n2))
}
else {
    alert('Opção Invalido')
}