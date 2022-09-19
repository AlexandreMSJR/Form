const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password-two');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
});

function validateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    console.log(email.value.match(mailformat))
    if (email.value.match(mailformat)) {
        return true;
    }
}

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordtwoValue = passwordtwo.value.trim();
    console.log(emailValue)
    if (usernameValue === "") {
        errorValidation(username, "Preencha esse campo");
    } else {
        successValidation(username, "Dados cadastrados");
    }

    if (!validateEmail(email)) {
        errorValidation(email, "Email inválido!");
    } else {
        successValidation(email, "");
    }

    if (passwordValue === "") {
        errorValidation(password, "Preencha esse campo");
    } else if (passwordValue.length < 8) {
        errorValidation(password, "Senha com menos de 8 caracteres");
    } else {
        successValidation(password, "");
    }

    if (passwordtwoValue === "") {
        errorValidation(passwordtwo, "Preenchea esse campo")
    } else if (passwordValue !== passwordtwoValue) {
        errorValidation(passwordtwo, "Senhas diferentes")
    } else {
        successValidation(passwordtwo, "")
    }


}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;
    formControl.className = 'form-control error'
};

function successValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'form-control success'
}