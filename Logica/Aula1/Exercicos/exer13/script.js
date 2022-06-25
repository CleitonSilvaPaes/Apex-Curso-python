let saque = parseFloat(prompt("Digite o valor do saque: "))

nCedulas = [100, 50, 20, 10, 5, 2, 1]
for (let i in nCedulas) {
    let qtdCedula = parseInt(saque / nCedulas[i])
    saque %= nCedulas[i]
    document.write(`${qtdCedula} cédula(s) de R$ ${nCedulas[i]}.00<br>`)
}