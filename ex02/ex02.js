function calcularIdadeNoFuturo(nome, idadeAtual, anos) {
    const idadeFutura = idadeAtual + anos;
    return `${nome} terá ${idadeFutura} anos daqui a ${anos} anos!`;
}

const nome = prompt("Digite o seu nome:");
const idadeAtual = parseInt(prompt("Digite a sua idade atual:"));
const anos = parseInt(prompt("Digite a quantidade de anos que deseja adicionar:"));

console.log(calcularIdadeNoFuturo(nome, idadeAtual, anos));
