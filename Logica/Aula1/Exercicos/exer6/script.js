// Faça um programa que peça os 3 lados de um triangulo e mostre qual o tipo: Equilátero, isoceles, Escaleno

// Equilatero: 3 lados iguais Isosceles: 2 lados iguais e 1 diferente Escaleno: 3 lados diferentes

let lado1 = parseFloat(prompt("Primeiro lado do triangulo: "));
let lado2 = parseFloat(prompt("Segundo lado do triangulo: "));
let lado3 = parseFloat(prompt("Terceiro lado do triangulo: "));

if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
    document.write("Triangulo Equilatero")
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
    document.write("Triangulo Escaleno")
} else {
    document.write("Triangulo Isosceles")
}