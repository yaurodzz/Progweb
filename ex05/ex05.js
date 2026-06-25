function traduzirGiria(frase) {
    frase = frase.replace("Estou", "Tô");
    frase = frase.replace("muito", "mt");
    frase = frase.replace("feliz", "felizona");
    return frase;
}

frase = prompt("Digite uma frase:");
const fraseTraduzida = traduzirGiria(frase);
console.log("Frase traduzida: " + fraseTraduzida);