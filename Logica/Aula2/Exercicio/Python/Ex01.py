# Crie um programa aonde você peça para o usuario informar 3 notas e armazene elas em uma lista, depois faça a soma entre elas e mostre a media.

notas = []
soma = 0
for i in range(3):
    notas.append(float(input("Digite a nota: ")))
    soma += notas[i]
media = soma / 3
print("A media é: ", media)