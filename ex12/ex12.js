function sortearGanhador(nomes) {
    let indiceSorteado = Math.floor(Math.random() * nomes.length);

    return "O ganhador é " + nomes[indiceSorteado] + "!";
}

console.log(sortearGanhador(["artur", "joao", "rodz", "rodrigao"]));
console.log(sortearGanhador(["lajes", "pe", "rodriguinho", "superrodrigo"]));