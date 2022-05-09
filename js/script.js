const submitButton = document.querySelector('.form__btn');
const formBlocks = document.querySelector('.form__blocks');
const errorInputs = document.querySelectorAll('.password');

let errorCheck = 0;

submitButton.addEventListener('click', (e) => {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#confirm');
    if (password && passwordConfirm) {
        const currentPassword = password.value;
        const currentPasswordConfirm = passwordConfirm.value;
        if (currentPassword != currentPasswordConfirm && !errorCheck) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Passwords are not match!';
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = '12px';
            errorMessage.style.position = 'absolute';
            errorMessage.classList = "error-message";
            formBlocks.appendChild(errorMessage);
            errorInputs.forEach(errorInput => errorInput.classList.add('error'));
            errorCheck = 1;
            e.preventDefault();
        } else {
            
        }
    }
});

window.addEventListener('click', (e) => {
    if (e.target != submitButton && formBlocks.lastElementChild.classList.contains('error-message')) {
        formBlocks.lastElementChild.remove();
        errorInputs.forEach(errorInput => errorInput.classList.remove('error'));
        errorCheck = 0;
    }
});