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


function gerarChave() {

    let codigo = '';
    for(let i = 0, n = charset.length; i < tamanhoElement.value; ++i){
        codigo += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(codigo)
    containerChave.classList.remove("hide");
    chave.innerHTML = codigo;
    novaChave = codigo;

}

function copiaChave(){
    alert("Chave de Segurança copiada com sucesso!!!")
    navigator.clipboard.writeText(novaChave);
}

var ss = 0;
var tempoCron = 1000;
var cron;
