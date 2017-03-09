import Modal from './modal';

$(function () {
    const ESC = 27;

    let contactForm = $('#contact_form'),
        contactButton = $('button.contact'),
        modal = new Modal($('div.contact'));

    $(document).on('click', 'button.contact', (e) => {
        e.preventDefault();
        contactForm.trigger('reset');
        modal.show();
    });

    $(document).on('click', 'a.cancel', (e) => {
        e.preventDefault();
        modal.hide();
    });

    $(document).on('keyup', (e) => {
        if (e.keyCode === ESC) modal.hide();
    });

    $(document).on('submit', '#contact_form', (e) => {
        e.preventDefault();

        if (!$('#contact_name', contactForm).val()) {
            toastr.warning('Please enter your name.');
            return;
        }

        if (!$('#contact_email', contactForm).val()) {
            toastr.warning('Please enter your email.');
            return;
        }

        if (!$('#contact_message', contactForm).val()) {
            toastr.warning('Please leave me a message.');
            return;
        }

        $.ajax({
            url: contactForm.attr('action'),
            data: contactForm.serialize(),
            method: "POST",
            dataType: 'json'
        }).then((result) => {
            toastr.success('I\'ll be in touch shortly', 'Thanks');
            setTimeout(() => modal.hide(), 2000);
        }, function (fail) {
            toastr.error('Sorry, your message could not be sent. Please email me at emarref@gmail.com.');
        });
    });
});