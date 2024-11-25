function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

//Loop
    let sorteados = [];
    let numero;

for ( let i = 0; i < quantidade; i++) {
numero = obternumeroaleatorio(de, ate);


//garante que nao repita o numero
while (sorteados.includes(numero)) {
    numero = obternumeroaleatorio(de, ate);
}

sorteados.push(numero);
}

//innerHTML e um tipo de input para o html
let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
//STATUS DO BOTAO
alterarStatusBotao();

}
//Gera numeros inteiros ddentro do min e max
function obternumeroaleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
//MUDAR STATUS DO BOTAO
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
//Reiniciar o jogo todo
function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}