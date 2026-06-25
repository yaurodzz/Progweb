function dataPorExtenso(data) {
    let partes = data.split("/");

    let dia = Number(partes[0]);
    let mes = Number(partes[1]);
    let ano = Number(partes[2]);

    let dias = [
        "", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",
        "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete",
        "dezoito", "dezenove", "vinte", "vinte e um", "vinte e dois", "vinte e três",
        "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete",
        "vinte e oito", "vinte e nove", "trinta", "trinta e um"
    ];

    let meses = [
        "", "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    let anoExtenso = "";

    if (ano === 2000) {
        anoExtenso = "dois mil";
    } else if (ano < 2100) {
        let resto = ano - 2000;

        let numeros = [
            "", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",
            "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis",
            "dezessete", "dezoito", "dezenove"
        ];

        let dezenas = [
            "", "", "vinte", "trinta", "quarenta", "cinquenta",
            "sessenta", "setenta", "oitenta", "noventa"
        ];

        if (resto < 20) {
            anoExtenso = "dois mil e " + numeros[resto];
        } else {
            let dezena = Math.floor(resto / 10);
            let unidade = resto % 10;

            anoExtenso = "dois mil e " + dezenas[dezena];

            if (unidade > 0) {
                anoExtenso = anoExtenso + " e " + numeros[unidade];
            }
        }
    } else {
        anoExtenso = "dois mil e cem";
    }

    return dias[dia] + " de " + meses[mes] + " de " + anoExtenso;
}

console.log(dataPorExtenso(prompt("Digite uma data no formato DD/MM/AAAA:")));