let numeroDigitado = "";

function teclar(num) {
    let somTecla = document.getElementById("tecla-som");
    somTecla.play();
    
    if (numeroDigitado.length < 2) {
        numeroDigitado += num;
        document.getElementById("numero").innerText = numeroDigitado;
    }
}

function limpar() {
    numeroDigitado = "";
    document.getElementById("numero").innerText = "";
    document.getElementById("mensagem").innerText = "";
}

function confirmar() {
    let somFim = document.getElementById("fim-som");
    somFim.play();
    
    if (numeroDigitado.length === 2) {
        document.getElementById("mensagem").innerText = "Voto confirmado!";
    } else {
        document.getElementById("mensagem").innerText = "Número inválido!";
    }
}

