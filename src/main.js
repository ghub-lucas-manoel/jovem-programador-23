function sendFeedback(event) {
    event.preventDefault();

    const serviceId = 'service_bxb9fwm';
    const templateId = 'template_mmxc57h';
    const templateParams = {
        from_name: $('#feedback-author').val(),
        content: $('#feedback-content').val()
    };

    return emailjs.send(serviceId, templateId, templateParams)
        .then((obj, params) => {
            $('#feedback-author').val('');
            $('#feedback-content').val('');

            $('#modal-header').children('h5').text('Sucesso');
            $('#modal-body').children('p').text('deu certo');
            $('#modal-footer').children('button').removeClass('btn-danger').addClass('btn-success');
            return;
        })
        .catch((err) => {
            $('#modal-header').children('h5').text('Falha');
            $('#modal-body').children('p').text('deu Ruim');
            $('#modal-footer').children('button').removeClass('btn-sucess').addClass('btn-danger');
            return;
        })
        .finally(() => {
            return $('#feedbackModal').modal();
        });
}

$('#send-feedback-btn').on('click', sendFeedback);