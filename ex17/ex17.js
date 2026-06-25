function gerarNomeDeJogador(nome) {
    let simbolos = ["!", "@", "#", "$", "%", "&", "*"];
    
    let numeroAleatorio = Math.floor(Math.random() * 1000);
    let simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];

    return nome + numeroAleatorio + simboloAleatorio;
}

console.log(gerarNomeDeJogador("tictoria"));
console.log(gerarNomeDeJogador("rodz"));
console.log(gerarNomeDeJogador("joao"));