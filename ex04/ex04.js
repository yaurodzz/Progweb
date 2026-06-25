function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}

const numero = parseInt(prompt("Digite um número:"));
const resultado = verificarParImpar(numero);
alert(resultado);