function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('formcontato-input-container--invalido')
        input.parentElement.querySelector('.formcontato-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('formcontato-input-container--invalido')
        input.parentElement.querySelector('.formcontato-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

/* forEach sobre todos os inputs, executando a função valida sobre cada um */
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode estar vazio.',
    },

    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.'
    }
}

var textArea = document.querySelector('.formcontato-textarea')

textArea.addEventListener('blur', (evento) => {
    valida(evento.target)
})