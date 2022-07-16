
while(true)
{
    n1 = parseFloat(prompt("Digite um numero: "))
    if (n1 >= 0 && n1 <= 10)
    {
        document.write('Nota: ' + n1 + '<br>')
        break
    }
    document.write("Numero invalido")
}