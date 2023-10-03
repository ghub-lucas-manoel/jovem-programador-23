var perfilClicado = false;

function ExibirMenuLogin()
{
    var menu = document.querySelector("div.menu-login");

    if (perfilClicado == false)
    {
        perfilClicado = true;
        menu.style.display = 'flex';
    }
    else {
        perfilClicado = false;
        menu.style.display = 'none';
    }
}

function Pesquisar()
{
    var sectionResultado = document.getElementById("section-resultado");
    sectionResultado.classList.remove("resultado-pesquisa");

    var pesquisa = document.getElementById("texto-pesquisa");
    var pesquisa = pesquisa.value.toLowerCase();


    var resultadoImpresso = document.getElementById("resultado");
    
    sectionResultado.classList.add("resultado-pesquisa");

    document.getElementById("titulo-resultado").innerHTML = "Resultado:";

    resultadoImpresso.innerHTML = pesquisa;
}

function ExibirNome()
{
    var resultadoImpresso = document.getElementById("nomeDigitado");

    resultadoImpresso.classList.remove("label-resultado");

    var span = document.getElementById("span-pesquisa");

    span.style.color="white";

    resultadoImpresso.innerHTML = "";

    var pesquisa = document.getElementById("inputNome").value;

    resultadoImpresso.style.color="white";

    resultadoImpresso.classList.add("label-resultado");

    resultadoImpresso.innerHTML = pesquisa;
}