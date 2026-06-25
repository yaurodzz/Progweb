function estaVazio(vetor) {
    if (vetor.length === 0) {
        return true;
    }
    return false;
}

function maiorValor(vetor) {
    if (vetor.length === 0) {
        return -1;
    }

    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return maior;
}

function menorValor(vetor) {
    if (vetor.length === 0) {
        return -1;
    }

    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    return menor;
}

function valorMedio(vetor) {
    if (vetor.length === 0) {
        return -1;
    }

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }

    return soma / vetor.length;
}

let vetorVazio = [];
let vetorNumeros = [10, 20, 30, 40, 50];

console.log("Array vazio:");
console.log("Está vazio?", estaVazio(vetorVazio));
console.log("Maior valor:", maiorValor(vetorVazio));
console.log("Menor valor:", menorValor(vetorVazio));
console.log("Valor médio:", valorMedio(vetorVazio));

console.log("");

console.log("Array com elementos:");
console.log("Está vazio?", estaVazio(vetorNumeros));
console.log("Maior valor:", maiorValor(vetorNumeros));
console.log("Menor valor:", menorValor(vetorNumeros));
console.log("Valor médio:", valorMedio(vetorNumeros));