// `Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.`

while(true){
    let nome = prompt('Digite o nome de usuário: ')
    let senha = prompt('Digite a senha: ')
    if(nome == senha){
        alert('Nome de usuário e senha não podem ser iguais!')
    } else {
        break
    }
}