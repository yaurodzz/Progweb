function embaralharTexto(texto) {
    texto = texto.toLowerCase();

    let letras = texto.split("");

    for (let i = 0; i < letras.length; i++) {
        let indiceAleatorio = Math.floor(Math.random() * letras.length);

        let temp = letras[i];
        letras[i] = letras[indiceAleatorio];
        letras[indiceAleatorio] = temp;
    }

    return letras.join("");
}
console.log(embaralharTexto("script"));
console.log(embaralharTexto("JavaScript"));
console.log(embaralharTexto("Programacao"));