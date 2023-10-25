function sendFeedback(event) {
    event.preventDefault();

    if (!inputsAreValidity(event)) return;
    $('#send-feedback-btn').attr('disabled', true);

    const serviceId = 'service_bxb9fwm';
    const templateId = 'template_mmxc57h';
    const templateParams = {
        from_name: $('#feedback-author').val(),
        content: $('#feedback-content').val()
    };

    return emailjs.send(serviceId, templateId, templateParams)
        .then(() => {
            $('#feedback-author').val('');
            $('#feedback-email').val('');
            $('#feedback-content').val('');

            $('#modal-header').children('h5').text('Sucesso');
            $('#modal-body').children('p').text('deu certo');
            $('#modal-footer').children('button').removeClass('btn-danger').addClass('btn-success');
            return;
        })
        .catch(() => {
            $('#modal-header').children('h5').text('Falha');
            $('#modal-body').children('p').text('deu Ruim');
            $('#modal-footer').children('button').removeClass('btn-sucess').addClass('btn-danger');
            return;
        })
        .finally(() => {
            $('#feedbackModal').modal();
            return $('#send-feedback-btn').attr('disabled', false);
        });
}

function inputsAreValidity(event) {
    if (!$('.needs-validation')[0].checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        $('.needs-validation').addClass('was-validated');
        return false;
    }

    $('.needs-validation').removeClass('was-validated');
    return true;
}

$('#send-feedback-btn').on('click', sendFeedback);
