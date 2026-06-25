function gerarHistoriaEngracada(nome, lugar, objeto) {
    return nome + " foi para " + lugar +
        ", mas no caminho encontrou um(a) " + objeto +
        " gigante que resolveu fazer amizade com ele(a)!";
}

console.log(gerarHistoriaEngracada(prompt("Digite um nome:"), prompt("Digite um lugar:"), prompt("Digite um objeto:")));
