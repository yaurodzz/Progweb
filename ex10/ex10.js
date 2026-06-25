
function converterHora(hora24) {
    let partes = hora24.split(":");

    let hora = Number(partes[0]);
    let minuto = partes[1];

    let periodo;

    if (hora >= 12) {
        periodo = "P.M.";
    } else {
        periodo = "A.M.";
    }

    if (hora === 0) {
        hora = 12;
    } else if (hora > 12) {
        hora = hora - 12;
    }

    return hora + ":" + minuto + " " + periodo;
}

let continuar = true;

while (continuar) {
    let hora24 = prompt("Digite uma hora no formato HH:MM:");

    console.log("Hora convertida:", converterHora(hora24));

    let resposta = prompt("Deseja converter outra hora? (s/n)");

    if (resposta !== "s" && resposta !== "S") {
        continuar = false;
    }
}