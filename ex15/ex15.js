function verdadeOuMentira(frase) {
    let sorteio = Math.floor(Math.random() * 2);

    if (sorteio === 0) {
        return '"' + frase + '" -> Mentira!';
    } else {
        return '"' + frase + '" -> Verdade!';
    }
}
console.log(verdadeOuMentira("O céu é verde"));
console.log(verdadeOuMentira("JavaScript é uma linguagem de programação"));
console.log(verdadeOuMentira("Gatos sabem dirigir carros"));