function numeroPorExtensoReais(valor) {
    let partes = String(valor).split(".");

    let reais = Number(partes[0]);
    let centavos = partes[1];

    if (centavos === undefined) centavos = "00";
    if (centavos.length === 1) centavos = centavos + "0";

    let numeros = [
        "zero", "um", "dois", "três", "quatro", "cinco",
        "seis", "sete", "oito", "nove", "dez",
        "onze", "doze", "treze", "catorze", "quinze",
        "dezesseis", "dezessete", "dezoito", "dezenove"
    ];

    let dezenas = [
        "", "", "vinte", "trinta", "quarenta", "cinquenta",
        "sessenta", "setenta", "oitenta", "noventa"
    ];

    function converterAte99(n) {
        if (n < 20) return numeros[n];

        let d = Math.floor(n / 10);
        let u = n % 10;

        if (u === 0) return dezenas[d];

        return dezenas[d] + " e " + numeros[u];
    }

    function converterAte999(n) {
        if (n < 100) return converterAte99(n);

        let c = Math.floor(n / 100);
        let resto = n % 100;

        let centenas = [
            "", "cento", "duzentos", "trezentos", "quatrocentos",
            "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"
        ];

        if (n === 100) return "cem";

        if (resto === 0) return centenas[c];

        return centenas[c] + " e " + converterAte99(resto);
    }

    function converterNumero(n) {
        if (n < 1000) return converterAte999(n);

        let mil = Math.floor(n / 1000);
        let resto = n % 1000;

        let textoMil = (mil === 1) ? "mil" : converterAte999(mil) + " mil";

        if (resto === 0) return textoMil;

        return textoMil + " e " + converterAte999(resto);
    }

    let textoReais = converterNumero(reais);
    let textoCentavos = converterAte99(Number(centavos));

    let resultado = "";

    if (reais === 1) {
        resultado = textoReais + " real";
    } else {
        resultado = textoReais + " reais";
    }

    resultado = resultado + " e " + textoCentavos + " centavos";

    return resultado;
}

console.log(numeroPorExtensoReais("1.74"));
console.log(numeroPorExtensoReais("3251.90"));
console.log(numeroPorExtensoReais("10.05"));