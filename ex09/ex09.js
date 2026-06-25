function desenharRetangulo(linhas, colunas) {
    for (let i = 1; i <= linhas; i++) {
        let texto = "";

        for (let j = 1; j <= colunas; j++) {
            if ((i === 1 || i === linhas) && (j === 1 || j === colunas)) {
                texto = texto + "+";
            } else if (i === 1 || i === linhas) {
                texto = texto + "-";
            } else if (j === 1 || j === colunas) {
                texto = texto + "|";
            } else {
                texto = texto + " ";
            }
        }

        console.log(texto);
    }
}

desenharRetangulo(5, 10);