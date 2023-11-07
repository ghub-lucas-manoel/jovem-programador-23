// JavaScript para o formulário de suporte
$("#botaoEnviarDados").on("click", () => {
    const serviceID = "service_aztm1cn";
    const templateID = "template_dc79h3a";
    const templateParams = {
        nomeCompleto: $("#inputNome").val(),
        email: $("#inputEmail").val(),
        telefone: $("#inputTelefone").val(),
        assunto: $("#inputAssunto").val()
    }

    return emailjs.send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            $("#inputNome").val("");
            $("#inputEmail").val("");
            $("#inputTelefone").val("");
            $("#inputAssunto").val("");
            alert("Seus dados foram enviados com sucesso. A equipe responsável fará o contato assim que possível.");
        })
        .catch((err) => {
            alert("Houve um erro inesperado e seus dados não puderam ser enviados. Por favor, tente novamente mais tarde.");
        });
});
