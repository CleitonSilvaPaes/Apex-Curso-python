// Peça para o Cliente escolher entre quatro pedidos sendo eles

// Pizza = R$12,00 Pão de Queijo = R$ 4,00 Macarrão R$ 16,00 Pastel = R$ 4,50

// Após a escolha pergunte quanto o cliente estará dando de valor ao caixa.

// Ao final do programa calcule se o Cliente precisa de troco ou não e informe o valor do troco caso necesário.
let troco = 0
let cardapio = prompt('1 - Pizza = R$12,00\n2 - Pão de Queijo = R$ 4,00\n3 - Macarrão R$ 16,00\n4 - Pastel = R$ 4,50')
let dinheiro = parseFloat(prompt('Dinheiro: '))

if (cardapio == '1'){
    if (dinheiro == 12){
        document.write(`Compra efetuada com sucesso.`)
    } else if (dinheiro > 12){
        troco = dinheiro - 12
        document.write(`Troco para o cliente: R$${troco.toFixed(2)}`)
    } else {
        document.write(`Compra não efetuada`)
    }
} else if (cardapio == '2'){
    if (dinheiro == 4){
        document.write(`Compra efetuada com sucesso.`)
    } else if (dinheiro > 4){
        troco = dinheiro - 4
        document.write(`Troco para o cliente: R$${troco.toFixed(2)}`)
    } else {
        document.write(`Compra não efetuada`)
    }
} else if (cardapio == '3'){
    if (dinheiro == 16){
        document.write(`Compra efetuada com sucesso.`)
    } else if (dinheiro > 16){
        troco = dinheiro - 16
        document.write(`Troco para o cliente: R$${troco.toFixed(2)}`)
    } else {
        document.write(`Compra não efetuada`)
    }
} else if (cardapio == '4'){
    if (dinheiro == 4.5){
        document.write(`Compra efetuada com sucesso.`)
    } else if (dinheiro > 4.5){
        troco = dinheiro - 4.5
        document.write(`Troco para o cliente: R$${troco.toFixed(2)}`)
    } else {
        document.write(`Compra não efetuada`)
    }
}