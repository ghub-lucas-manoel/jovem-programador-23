var perfilClicado = false;

function exibirMenuLogin()
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

$("#botaoEnviarDados").on("click", () => {//() => {} função anônima

    const serviceID = "service_sebuy0b";
    const templateID = "template_h122i8n";
    const templateParams = {
        nomeUsuario : $("#nome-usuario").val(),
        emailUsuario : $("#email-usuario").val(),
        telefoneUsuario : $("#telefone-usuario").val()
    }
    return emailjs.send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            $("#nome-usuario").val("");
            $("#email-usuario").val("");
            $("#telefone-usuario").val("");
            alert("Seu comentário foi enviado com sucesso. A equipe responsável embreve irá liberá-lo para ser exibido na página.")
        })
        .catch((err) => {
            alert("Houve um erro inesperado e seu comentário não pode ser enviados. Por favor, tente novamente mais tarde.")
        });
});