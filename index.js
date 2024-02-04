function criptografar() {
    const textarea = document.getElementById('texto_textarea')
    let texto = textarea.value
    texto = texto.toLowerCase()
    let textoNovo = ""
    let campo_h2 = document.getElementById('textoNovo')
    let campo_paragrafo = document.getElementById('texto02')
    let botaoCopiar = document.getElementById('botao_03')

    if (texto == "" || texto.length == 0) {
        campo_h2.textContent = "Nenhuma mensagem encontrada"
        campo_paragrafo.style.display = 'block';
        botaoCopiar.style.display = 'none';
    } else {
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                textoNovo += "ai"
            } else if (texto[i] == "e") {
                textoNovo += "enter"
            } else if (texto[i] == "i") {
                textoNovo += "imes"
            } else if (texto[i] == "o") {
                textoNovo += "ober"
            } else if (texto[i] == "u") {
                textoNovo += "ufat"
            } else {
                textoNovo += texto[i]
            }
        }

        campo_h2.textContent = textoNovo
        campo_paragrafo.style.display = 'none';
        botaoCopiar.style.display = 'block';
    }
}

function descriptografar() {
    const textarea = document.getElementById('texto_textarea')
    let texto = textarea.value
    texto = texto.toLowerCase()
    let textoNovo = ""
    let campo_h2 = document.getElementById('textoNovo')
    let campo_paragrafo = document.getElementById('texto02')
    let botaoCopiar = document.getElementById('botao_03')


    if (texto == "" || texto.length == 0) {
        campo_h2.textContent = "Nenhuma mensagem encontrada"
        campo_paragrafo.style.display = 'block';
        botaoCopiar.style.display = 'none';

    } else {
        textoNovo = texto.replace(/ai/g, 'a');
        textoNovo = textoNovo.replace(/enter/g, 'e');
        textoNovo = textoNovo.replace(/imes/g, 'i');
        textoNovo = textoNovo.replace(/ober/g, 'o');
        textoNovo = textoNovo.replace(/ufat/g, 'u');

        campo_h2.innerText = textoNovo
        campo_paragrafo.style.display = 'none';
        botaoCopiar.style.display = 'block';
    }
}

function copiarTexto() {
    let campo_h2 = document.getElementById('textoNovo')
    let areaDeTransferencia = document.createElement('textarea');

    areaDeTransferencia.value = campo_h2.innerText;

    document.body.appendChild(areaDeTransferencia);
    areaDeTransferencia.select();
    document.execCommand('copy');
    document.body.removeChild(areaDeTransferencia);

    let botaoCopiar = document.getElementById('botao_03')
    botaoCopiar.disabled = true;
}

