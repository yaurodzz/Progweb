function verdadeOuMentira(frase) {
    let sorteio = Math.floor(Math.random() * 2);

    if (sorteio === 0) {
        return '"' + frase + '" -> Mentira!';
    } else {
        return '"' + frase + '" -> Verdade!';
    }
}
alert(verdadeOuMentira("O céu é verde"));
alert(verdadeOuMentira("JavaScript é uma linguagem de programação"));
alert(verdadeOuMentira("Gatos sabem dirigir carros"));