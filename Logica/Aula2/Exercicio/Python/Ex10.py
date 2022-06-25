# O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

maior = -1000
menor = 1000
temperatura = []

while True:
    n = int(input("Digite a temperatura: "))
    if n == -1000:
        break
    temperatura.append(n)
    if n > maior:
        maior = n
    if n < menor:
        menor = n

print(f"A maior temperatura é {maior}")
print(f"A menor temperatura é {menor}")
media = sum(temperatura) / len(temperatura)
print(f"A média é {media}")