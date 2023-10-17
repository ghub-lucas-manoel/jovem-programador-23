
$("#botaoEnviarDados").on("click", () => {


    var dadosPessoas = {
        nome: "Lucas Manoel",
        idade: 20,
        cidade: "Chapeté",
        dinheiroNoBanco: 1000.05,
        temCarro: true,
        tipoSanguineo: "AB+"
    }

    return console.log(dadosPessoas);

    const serviceID = "service_i77z57q";
    const templateID = "template_2fvt7v5";
    // const templateParams = 

    return emailjs.send(serviceID, templateID, templateParams);
    
});