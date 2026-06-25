function tempo_total(horas, minutos) {
    return (horas * 60) + minutos;
}

const horas = parseInt(prompt("Digite a quantidade de horas jogadas:"));
const minutos = parseInt(prompt("Digite a quantidade de minutos jogados:"));

const total = tempo_total(horas, minutos);
alert("O tempo total jogado em minutos é: " + total);