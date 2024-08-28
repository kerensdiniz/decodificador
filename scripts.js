const substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografar(texto) {
    return texto.split('').map(caractere => substituicoes[caractere] || caractere).join('');
}

function descriptografar(texto) {
    for (let [letra, substituicao] of Object.entries(substituicoes)) {
        const regex = new RegExp(substituicao, 'g');
        texto = texto.replace(regex, letra);
    }
    return texto;
}

function mostrarImagem() {
    document.getElementById('imagemIlustracao').style.display = 'block';
}

function esconderImagem() {
    document.getElementById('imagemIlustracao').style.display = 'none';
}

function copiarTexto() {
    const mensagemSaida = document.getElementById('mensagemSaida').innerText;
    navigator.clipboard.writeText(mensagemSaida).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}

document.getElementById('botaoCriptografar').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto').value;
    const mensagemSaida = document.getElementById('mensagemSaida');
    const botaoCopiar = document.getElementById('botaoCopiar');

    if (inputTexto) {
        mensagemSaida.innerHTML = `<strong>${criptografar(inputTexto)}</strong>`;
        esconderImagem(); 
        botaoCopiar.style.display = 'block'; // Exibe o botão de copiar
    } else {
        mensagemSaida.innerHTML = 'Nenhuma mensagem encontrada';
        mostrarImagem(); 
        botaoCopiar.style.display = 'none'; // Esconde o botão de copiar
    }
});

document.getElementById('botaoDescriptografar').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto').value;
    const mensagemSaida = document.getElementById('mensagemSaida');
    const botaoCopiar = document.getElementById('botaoCopiar');

    if (inputTexto) {
        mensagemSaida.innerHTML = `<strong>${descriptografar(inputTexto)}</strong>`;
        esconderImagem(); 
        botaoCopiar.style.display = 'block'; // Exibe o botão de copiar
    } else {
        mensagemSaida.innerHTML = 'Nenhuma mensagem encontrada';
        mostrarImagem(); 
        botaoCopiar.style.display = 'none'; // Esconde o botão de copiar
    }
});

document.getElementById('botaoCopiar').addEventListener('click', copiarTexto);