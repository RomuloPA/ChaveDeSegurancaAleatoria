let tamanhoElement = document.querySelector("#tamanho");
let segundosElement = document.querySelector("#segundos");
let botaobuttonElement = document.querySelector("#botao");

let tamanhoChave = document.querySelector("#valor");
let tempoSegundos = document.querySelector("#tempo");
let chave = document.querySelector("#chave");

let containerChave = document.querySelector("#container-chave");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let novaChave = '';

tamanhoChave.innerHTML = tamanhoElement.value;

tamanho.oninput = function() {
    tamanhoChave.innerHTML = this.value;
}

tempoSegundos.innerHTML = segundosElement.value;

segundos.oninput = function() {
    tempoSegundos.innerHTML = this.value;
}





