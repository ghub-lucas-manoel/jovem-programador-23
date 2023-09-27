const pesquisado = document.getElementById("pesquisado");
const pesquisaFeita = document.getElementById("pesquisaFeita");

function mostrarPesquisa() {
    pesquisaFeita.innerHTML = pesquisado.value;
}
