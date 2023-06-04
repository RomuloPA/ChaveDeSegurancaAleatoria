tamanhoElement = document.getElementById("tamanho");
segundosElement = document.getElementById("segundos");
botaoElement = document.getElementById("botao");

tamanhoChave = document.getElementById("valor");
tempoSegundos = document.getElementById("tempo");
chave = document.getElementById("chave");

containerChave = document.getElementById("container-chave");

charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
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


function start() {
    cron = setInterval(() => { timer(); }, tempoCron);
}

function stop() {
    clearInterval(cron);
    ss = 0;

    document.getElementById('cronometro').innerText = '00';
}


function timer() {
    ss++; 

    if (ss == tempoSegundos.innerHTML) { 
        ss = 0; 
    }

    var format = (ss < 10 ? '0' + ss : ss);
    
    document.getElementById('cronometro').innerText = format;

    return format;
}