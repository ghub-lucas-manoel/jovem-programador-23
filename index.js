const caixaTexto = document.getElementById("procurar");
const pesquisaFeita = document.getElementById("pesquisaFeita");

function mostrarPesquisa() {
    pesquisaFeita.innerHTML = caixaTexto.value;
}

function mostrarMensagem(nomeDaPagina) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = `Você está em ${nomeDaPagina}`;
    mensagem.style.display = "block";
}
