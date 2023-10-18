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

function comentar() {
    const serviceID = "service_4vfyaeg";
    const templateID = "template_touhztt";
    const templateParams = {
        comentario: $("#inputComentario").val()
    }
    return emailjs.send(serviceID, templateID, templateParams)
        .then((obj, params) => {
            $("#inputComentario").val("");
            alert("Seu comentário foi enviado com sucesso. A equipe responsável embreve irá liberá-lo para ser exibido na página.")
        })
        .catch((err) => {
            alert("Houve um erro inesperado e seu comentário não pode ser enviados. Por favor, tente novamente mais tarde.")
        });
};