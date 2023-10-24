$("#botaoEnviarFeedback").on("click", () => {
    const serviceID = "service_um6w40g";
    const templateID = "template_g5lnlpo";
    const templateParams = {
        feedback: $("#inputFeedback").val(),
        nomeCompleto: $("#inputNome").val(),
        email: $("#inputEmail").val(),
        telefone: $("#inputTelefone").val()
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            $("#inputFeedback").val("");
            $("#inputNome").val("");
            $("#inputEmail").val("");
            $("#inputTelefone").val("");

            $("#modalFeedback").children('.modal-header').text("Confirmação de Envio de Dados");
            $("#modalFeedback").children('.modal-body').text("Seus dados foram enviados com sucesso. A equipe responsável fará o contato assim que possível.");
            $("#modalFeedback").children('.modal-footer').find('button').removeClass("btn-danger").addClass("btn-success");
            return;
        })
        .catch((err) => {
            $("#modalFeedback").children('.modal-header').text("Erro no Envio de Dados");
            $("#modalFeedback").children('.modal-body').text("Houve um erro inesperado. Por favor, tente novamente mais tarde!");
            $("#modalFeedback").children('.modal-footer').find('button').removeClass("btn-success").addClass("btn-danger");
            return;
        })
        .finally(() => {
            $("#modalFeedback").modal();
            return;
        });
});
