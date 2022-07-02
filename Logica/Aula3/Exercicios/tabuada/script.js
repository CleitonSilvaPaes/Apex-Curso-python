function linhaTabuada(tabuada, pos) {
    document.write(`${tabuada} x ${pos} = ${(tabuada*pos)} <br>`)
}

let numeroTabuada = parseInt(prompt("Digite o numero"))

for (let i = 1; i <= 10; i++){
    linhaTabuada(numeroTabuada, i)
}