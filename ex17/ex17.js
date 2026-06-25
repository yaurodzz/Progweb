function gerarNomeDeJogador(nome) {
    let simbolos = ["!", "@", "#", "$", "%", "&", "*"];
    
    let numeroAleatorio = Math.floor(Math.random() * 1000);
    let simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];

    return nome + numeroAleatorio + simboloAleatorio;
}

alert(gerarNomeDeJogador("tictoria"));
alert(gerarNomeDeJogador("rodz"));
alert(gerarNomeDeJogador("joao"));