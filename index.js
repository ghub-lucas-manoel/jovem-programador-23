document.addEventListener('DOMContentLoaded', function() {
    const botaoPesquisa = document.getElementById('botaoPesquisa');
    const inputPesquisa = document.getElementById('inputPesquisa');
    const resultado = document.getElementById('resultado');

    botaoPesquisa.addEventListener('click', function() {
        const termoPesquisado = inputPesquisa.value;
        resultado.textContent = `Você pesquisou por: "${termoPesquisado}"`;
    });
});
function exibirMensagem (){
    document.getElementById("mensagemDigitada").innerHTML = document.getElementById("inputMensagem").value;

        
}
