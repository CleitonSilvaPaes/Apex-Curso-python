let n1 = parseFloat(prompt());
let n2 = parseFloat(prompt());
let n3 = parseFloat(prompt());
let n4 = parseFloat(prompt());
let n5 = parseFloat(prompt());

function funcaoParaTela(num) {
    document.write(`<hr>`);
    document.write(`5 numeros abaixo do ${num}`);
    document.write(`<br>`);
    document.write(`${num - 1} ${num - 2} ${num - 3} ${num - 4} ${num - 5}\n`);
    document.write('<br>');
    document.write(`5 numeros acima do ${num}`);
    document.write(`<br>`);
    document.write(`${num + 1} ${num + 2} ${num + 3} ${num + 4} ${num + 5}\n`);
    document.write(`<br>`);
    document.write(`Dobro do numero ${num}`);
    document.write('<br>');
    document.write(`${num * 2}`);
}


if (n1 % 2 == 0) {
    funcaoParaTela(n1);
}
if (n2 % 2 == 0) {
    funcaoParaTela(n2)
} 
if (n3 % 2 == 0) {
    funcaoParaTela(n3)
} 
if (n4 % 2 == 0) {
    funcaoParaTela(n4)
} 
if (n5 % 2 == 0) {
    funcaoParaTela(n5)
}
