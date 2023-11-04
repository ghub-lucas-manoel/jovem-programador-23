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

$("#botaoEnviarDados").on("click", (event) => {//() => {} função anônima
    //TODO: Checar se campos estão validos
    if(!inputSaoValidos(event)) return;

    $("#botaoEnviarDados").attr("disabled", true);

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
            $("#modalHeader").children('h5').text("Confirmação de Envio do Report de Erro");
            $("#modalBody").children('p').text("Seu report foi enviado com sucesso. A equipe responsável embreve entrarará em contato.");
            $("#modalFooter").children('button').removeClass("btn-danger").addClass("btn-success");

            //alert("Seu comentário foi enviado com sucesso. A equipe responsável embreve irá liberá-lo para ser exibido na página.")
            return;
        })
        .catch((err) => {
            $("#modalHeader").children('h5').text("Erro no Envio de Dados");
            $("#modalBody").children('p').text("Houve um erro inesperado e seus dados não puderam ser enviados. Por favor, tente novamente mais tarde.");
            $("#modalFooter").children('button').removeClass("btn-success").addClass("btn-danger");

            //alert("Houve um erro inesperado e seu comentário não pode ser enviados. Por favor, tente novamente mais tarde.")
            return;
        })
        .finally(() => {//independente do sucesso ou falha, esse passo será executado
            $("#modalReportErro").modal();
            return $("#botaoEnviarDados").attr("disabled", false);
        })
});

function inputSaoValidos(event) {
    if (!$('.needs-validation')[0].checkValidity())
    {
        event.preventDefault();
        event.stopPropagation();
        $('.needs-validation').addClass('was-validated');
        return false;
    }
    $('.needs-validation').removeClass('was-validated');
    return true;
}