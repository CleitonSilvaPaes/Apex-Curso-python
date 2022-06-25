# Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

eleitores = int(input("Digite o número de eleitores: "))
candidato1 = 0
candidato2 = 0
candidato3 = 0
invalido = 0
for i in range(eleitores):
    voto = int(input("Digite o número do candidato: "))
    if voto == 1:
        candidato1 += 1
    elif voto == 2:
        candidato2 += 1
    elif voto == 3:
        candidato3 += 1
    else:
        invalido += 1
print(f"O candidato 1 recebeu {candidato1} votos.")
print(f"O candidato 2 recebeu {candidato2} votos.")
print(f"O candidato 3 recebeu {candidato3} votos.")
print(f"Foram inválidos {invalido} votos.")

