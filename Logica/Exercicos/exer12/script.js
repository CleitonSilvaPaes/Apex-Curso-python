let salario = parseFloat(prompt('Digite o salario do funcionario: '))

if (salario <= 280) {
    document.write('<hr/>')
    document.write(`Salario atual: ${salario}`)
    document.write('<br/>')
    document.write('Percentual de aumento: 20%')
    document.write('<br/>')
    document.write(`Valor do Aumento: ${salario * 0.20}`)
    document.write('<br/>')
    document.write(`Novo salario: ${(salario * 0.20) + salario}`)
} else if (salario > 280 && salario <= 700){
    document.write('<hr/>')
    document.write(`Salario atual: ${salario}`)
    document.write('<br/>')
    document.write('Percentual de aumento: 15%')
    document.write('<br/>')
    document.write(`Valor do Aumento: ${salario * 0.15}`)
    document.write('<br/>')
    document.write(`Novo salario: ${(salario * 0.15) + salario}`)
} else {
    document.write('<hr/>')
    document.write(`Salario atual: ${salario}`)
    document.write('<br/>')
    document.write('Percentual de aumento: 10%')
    document.write('<br/>')
    document.write(`Valor do Aumento: ${salario * 0.10}`)
    document.write('<br/>')
    document.write(`Novo salario: ${(salario * 0.10) + salario}`)
    document.write('<hr/>')

}