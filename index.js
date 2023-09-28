const imagemMenu = document.getElementById("imgMenu");
const Menu = document.getElementById("menuHamb");
const menuLista = document.getElementById("list");
const menuAberto = document.getElementById("menAberto");

let menuVisivel = false;

imagemMenu.addEventListener("click", () => {
    menuVisivel = !menuVisivel;

    if (menuVisivel) {
        menuLista.classList.add("visible");
        menuAberto.src = "_imagens/menuAberto.png";
    } else {
        menuLista.classList.remove("visible");
        menuAberto.src = "_imagens/retangulos-de-menu.png";
    }
});

const caixaTexto = document.getElementById("procurar");
const pesquisaFeita = document.getElementById("pesquisaFeita");

function mostrarPesquisa() {
    pesquisaFeita.innerHTML = caixaTexto.value;
}

// Mostrar mensagem indicando em qual página o usuário está.
function mostrarMensagem(texto) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = `Você está em ${texto}`;
    mensagem.style.display = "block";
}
