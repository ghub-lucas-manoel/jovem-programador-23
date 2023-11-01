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

$("#botaoEnviarComentario").on("click", (event) => {

    if (!inputsSaoValidos(event)) return;

    $("#botaoEnviarComentario").attr("disabled", true);
    const serviceID = "service_4vfyaeg";
    const templateID = "template_touhztt";
    const templateParams = {
        comentario: $("#inputComentario").val()
    }
    return emailjs.send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            $("#inputComentario").val("");
            $("#modalHeader").children('h5').text("Confirmação de Envio de Comentário");
            $("#modalBody").children('p').text("Seu comentário foi enviado com sucesso. A equipe responsável embreve irá liberá-lo para ser exibido na página.");
            $("#modalFooter").children('button').removeClass("btn-danger").addClass("btn-success");
        })
        .catch((err) => {
            alert("")
            $("#modalHeader").children('h5').text("Erro no Envio de Comentário");
            $("#modalBody").children('p').text("Houve um erro inesperado e seu comentário não pode ser enviado. Por favor, tente novamente mais tarde.");
            $("#modalFooter").children('button').removeClass("btn-success").addClass("btn-danger");
        })
        .finally(() => {//independente do sucesso ou falha, esse passo será executado
            $("#modalInscricao").modal();
            return $("#botaoEnviarComentario").attr("disabled", false);
        })
});

$("#botaoEnviarDados").on("click", (event) => {

    if (!inputsSaoValidos(event)) return;

    $("#botaoEnviarDados").attr("disabled", true);
    const serviceID = "service_4vfyaeg";
    const templateID = "template_lpx04de";
    const templateParams = {
        nomeCompleto: $("#inputNome").val(),
        email: $("#inputEmail").val(),
        telefone: $("#inputTelefone").val()
    }
    return emailjs.send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            $("#inputNome").val("");
            $("#inputEmail").val("");
            $("#inputTelefone").val("");
            $("#modalHeader").children('h5').text("Confirmação de Envio de Cadastro");
            $("#modalBody").children('p').text("Seu pedido de cadastro foi enviado com sucesso. A equipe responsável efetuará seu cadastro em breve.");
            $("#modalFooter").children('button').removeClass("btn-danger").addClass("btn-success");
        })
        .catch((err) => {
            $("#modalHeader").children('h5').text("Erro no Envio de Cadastro");
            $("#modalBody").children('p').text("Houve um erro inesperado e seu pedido de cadastro não pode ser enviado. Por favor, tente novamente mais tarde.");
            $("#modalFooter").children('button').removeClass("btn-success").addClass("btn-danger");
        })
        .finally(() => {//independente do sucesso ou falha, esse passo será executado
            $("#modalInscricao").modal();
            return $("#botaoEnviarDados").attr("disabled", false);
        })
});

$("#botaoEnviarSugestao").on("click", (event) => {

    if (!inputsSaoValidos(event)) return;

    $("#botaoEnviarSugestao").attr("disabled", true);
    const serviceID = "service_4vfyaeg";
    const templateID = "template_touhztt";
    const templateParams = {
        comentario: $("#inputSugestao").val()
    }
    return emailjs.send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            $("#inputSugestao").val("");
            $("#modalHeader").children('h5').text("Confirmação de Envio de Sugestão");
            $("#modalBody").children('p').text("Sua Sugestão foi enviada com sucesso. Agradecemos pelo FeedBack!");
            $("#modalFooter").children('button').removeClass("btn-danger").addClass("btn-success");
        })
        .catch((err) => {
            $("#modalHeader").children('h5').text("Erro no Envio de Sugestão");
            $("#modalBody").children('p').text("Houve um erro inesperado e sua seugestão não pode ser enviada. Por favor, tente novamente mais tarde.");
            $("#modalFooter").children('button').removeClass("btn-success").addClass("btn-danger");
        })
        .finally(() => {//independente do sucesso ou falha, esse passo será executado
            $("#modalInscricao").modal();
            return $("#botaoEnviarSugestao").attr("disabled", false);
        })
});

function inputsSaoValidos(event) {
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