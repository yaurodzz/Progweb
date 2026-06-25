function calcularVolumeCilindro(raio, altura) {
    const pi = Math.PI;
    return pi * Math.pow(raio, 2) * altura;
}

const raio = parseFloat(prompt("Digite o raio do cilindro em metros:"));
const altura = parseFloat(prompt("Digite a altura do cilindro em metros:"));

const volume = calcularVolumeCilindro(raio, altura);
console.log("O volume do cilindro é: " + volume + " metros cúbicos.");