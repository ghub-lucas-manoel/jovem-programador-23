const caixaTexto = document.getElementById("procurar");
const pesquisaFeita = document.getElementById("pesquisaFeita");

function mostrarPesquisa() {
    pesquisaFeita.innerHTML = caixaTexto.value;
}

function mostrarMensagem(nomeDaPagina) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = `Você está em ${nomeDaPagina}`;
    mensagem.style.display = "block";
}

$("#botaoEnviarFeedback").on("click", () => {
    const serviceID = "service_fxvb77a";
    const templateID = "template_ebgb6rh";
    const templateParams = {
        nome: $("#inputNome").val(),
        telefone: $("#inputTelefone").val(),
        feedback: $("#inputFeedback").val(),
    };

    return emailjs
        .send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            nome: $("#inputNome").val("");
            telefone: $("#inputTelefone").val("");
            Feedback: $("#inputFeedback").val("");
            alert(
                "Seu Feedback foi enviado com sucesso, agradecemos e boas compras!"
            );
        })
        .catch((err) => {
            alert(
                "Houve um erro inesperado, por favor tente novamente! Se o erro persistir, espere alguns minutos para tentar novamente."
            );
        });
});
