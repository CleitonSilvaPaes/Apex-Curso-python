# Faça um programa que calcule o mostre a média de N notas.
soma = 0
contador = 0
while(True):
    n = int(input("Digite um número: "))
    if n == -1:
        break
    soma += n
    contador += 1
media = soma / contador
print(f"A média é {media}")