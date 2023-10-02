const imagemMenu = document.getElementById("imgMenu");
const Menu = document.getElementById("menu");
const menuLista = document.getElementById("list");
const menus = document.getElementById("menAberto");

let menuVisivel = false;

const caixaTexto = document.getElementById("procurar");
const pesquisaFeita = document.getElementById("pesquisaFeita");

function mostrarPesquisa() {
    pesquisaFeita.innerHTML = caixaTexto.value;
}

function mostrarMensagem(texto) {
    mensagem.textContent = `Você está na página ${texto}.`;
    mensagem.className = `${classeCor}`;
    mensagem.style.display = "block";
}
