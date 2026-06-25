function somarArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

const numeros = [];
for (let i = 0; i < 4; i++) {
    const numero = parseFloat(prompt("Digite um número:"));
    numeros.push(numero);
}

const resultado = somarArray(numeros);
console.log("A soma dos números é: " + resultado);
