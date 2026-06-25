function criarSuperHeroi(nome) {
    let palavrasPoder = ["Super", "Mega", "Ultra", "Incrível", "Fantástico", "Veloz", "Sombrio", "Invencível"];
    let animais = ["Tigre", "Águia", "Lobo", "Leão", "Falcão", "Pantera", "Dragão", "Hiena"];

    let indicePoder = Math.floor(Math.random() * palavrasPoder.length);
    let indiceAnimal = Math.floor(Math.random() * animais.length);

    let nomeHeroi = palavrasPoder[indicePoder] + " " + animais[indiceAnimal];

    return nome + " agora é o " + nomeHeroi + "!";
}

console.log(criarSuperHeroi("rodz"));
console.log(criarSuperHeroi("tic"));
console.log(criarSuperHeroi("jota"));