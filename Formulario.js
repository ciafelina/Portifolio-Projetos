function validarCampos(event) {


    var CamposNome
    var CamposEmail
    var CamposTelefone

    event.preventDefault()

    // Seleciona os campos do formulário
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const Name = document.getElementById('Name').value

    //Span dos campos
    const SpanNome = document.querySelector('.Formulario .VerificaNome')
    const SpanEmail = document.querySelector('.Formulario .VerificaEmail')
    const SpanTelefone = document.querySelector('.Formulario .VerificaTelefone')

    

    // Expressão regular para validar e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Expressão regular para validar telefone (formato de 10 ou 11 dígitos)
    const telefoneRegex = /^\d{10,11}$/



    if (Name.trim() === '') {
        SpanNome.style.display = 'block'
        CamposNome = 'N'
    }else{
        SpanNome.style.display = 'none'
        CamposNome = 'S'
    }

    // Validação do e-mail
    if (!emailRegex.test(email) || (email.trim() === '')) {
        SpanEmail.style.display = 'block'
        CamposEmail = 'N'
    }else{
        SpanEmail.style.display = 'none'
        CamposEmail = 'S'
    }

    // Validação do telefone
    if (!telefoneRegex.test(telefone) || (telefone.trim() === '')) {
        SpanTelefone.style.display = 'block'
        CamposTelefone = 'N'
    }else{
        SpanTelefone.style.display = 'none'
        CamposTelefone = 'S'
    }

    if (CamposTelefone === 'N' || (CamposEmail === 'N') || (CamposNome === 'N')) {
        return
    }else{
        const Nome = document.getElementById('Name').value
        const Email = document.getElementById('email').value
        const Telefone = document.getElementById('telefone').value
        const Menssagem = document.getElementById('Menssagem').value

        emailjs.init('KWExJyJeWRbv9zisYWAQi'); 

        // Envia o e-mail usando o EmailJS
        emailjs.send('service_cs4ccth','template_3rmodua',{
            from_name: Nome,
            from_email: Email,
            message: Menssagem
        }).then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert('E-mail enviado com sucesso!');
        }, function(error) {
            console.log('Erro ao enviar e-mail:', error);
            alert('Erro ao enviar e-mail.');
        });
        }   
    //location.reload()
}