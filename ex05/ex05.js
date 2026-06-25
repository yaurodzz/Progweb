function traduzirGiria(frase) {
    frase = frase.replace("estou", "Tô");
    frase = frase.replace("muito", "mt");
    frase = frase.replace("feliz", "felizona");
    return frase;
}

frase = prompt("Digite uma frase:");
const fraseTraduzida = traduzirGiria(frase);
alert("Frase traduzida: " + fraseTraduzida);