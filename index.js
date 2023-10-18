
$("#botaoEnviarDados").on("click", () => {
    const serviceID = "service_i77z57q";
    const templateID = "template_2fvt7v5";
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
            alert("Seus dados foram enviados com sucesso. A equipe responsável fará o contato assim que possível.");
        })
        .catch((err) => {
            alert("Houve um erro inesperado e seus dados não puderam ser enviados. Por favor, tente novamente mais tarde.");
        });    
});