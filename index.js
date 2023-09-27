function exibirPesquisa() {
    document.getElementById("palavraDigitada").innerHTML = document.getElementById("pesquisarPalavra").value;
}
function mostrarMenu() {
    if (menuOculto.style.display == 'block')
    {
        menuOculto.style.display = 'none'
    } else
    {
        menuOculto.style.display = 'block';
    }
}