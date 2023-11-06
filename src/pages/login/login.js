$("#botaoEnviarDados").on("click", () => {
    const serviceID = "service_jwaztme";
    const templateID = "template_5geoutm";
    const templateParams ={
         email: $("#inputEmail").val(),
        comentario: $("#inputComentario").val()
    }
    
    return emailjs.send(serviceID, templateID, templateParams)
    .then((obj,params) => {
        alert("Seus dados foram enviados com sucesso. A equipe responderá em breve")
        $("#inputEmail").val("");
        $("#inputComentario").val("");
    
   })
   .catch((err) => {
    alert("Houve um erro inesperado, estamos trabalhando pra resolver.")

   });

   
});
