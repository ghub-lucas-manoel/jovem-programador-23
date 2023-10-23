function sendFeedback(event) {
    event.preventDefault();

    const serviceId = 'service_bxb9fwm';
    const templateId = 'template_mmxc57h';
    const templateParams = {
        from_name: $('#feedback-author').val(),
        content: $('#feedback-content').val()
    };

    emailjs.send(serviceId, templateId, templateParams)
        .then(function (response) {
            $('#feedback-author').val('');
            $('#feedback-content').val('');
            alert('Feedback enviado com Sucesso!');
        }, function (error) {
            alert('O envio do feedback falhou, tente novamente mais tarde');
        });
}

$('#send-feedback-btn').on('click', sendFeedback);