// Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

console.log('<h1>Eleição</h1>')
console.log('<h2>Candidatos</h2>')
let candidatoL = 0
let candidatoM = 0
let candidatoR = 0
let invalido = 0
let n = parseInt(prompt('Digite o número de eleitores: '))

for (let i = 0; i < n; i++) {
    let voto = parseInt(prompt(`
    1 para votar no candidato L
    2 para votar no candidato M
    3 para votar no candidato R: `))
    if (voto == 1) {
        candidatoL++
    } else if (voto == 2) {
        candidatoM++
    } else if (voto == 3) {
        candidatoR++
    } else {
        invalido++
    }
}
console.log('<h2>Resultado</h2>')
document.write(`Total de Eleitores: ${n}<br>`)
document.write(`Candidato L: ${candidatoL} votos<br>`)
document.write(`Candidato M: ${candidatoM} votos<br>`)
document.write(`Candidato R: ${candidatoR} votos<br>`)
document.write(`Total de votos inválidos: ${invalido}<br>`)

