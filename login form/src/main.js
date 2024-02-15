function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message-error");
    messageElement.classList.add('form__message--${type}');
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent="";
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}
function isValidPassword(password) {
   
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
}
function containsSpecialCharacter(password) {
    const specialCharacterRegex = /[!@#$%^&*]/;
    return specialCharacterRegex.test(password);
}

function containsUppercaseLetter(password) {
    const uppercaseLetterRegex = /[A-Z]/;
    return uppercaseLetterRegex.test(password);
}

function containsNumber(password) {
    const numberRegex = /[0-9]/;
    return numberRegex.test(password);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 4) {
                setInputError(inputElement, "Username must be at least 4 characters in length");

            }
            if (e.target.id === "signupEmail" && !isValidEmail(e.target.value)) {
                setInputError(inputElement, "Invalid email address");
            }
            if (e.target.id === "signupPassword") {
            const password = e.target.value;
            if (password.length < 8) {
                setInputError(inputElement, "Password must be at least 8 characters long");
            } else if (!containsSpecialCharacter(password)) {
                setInputError(inputElement, "Password must contain a special character");
            } else if (!containsUppercaseLetter(password)) {
                setInputError(inputElement, "Password must contain an uppercase letter");
            } else if (!containsNumber(password)) {
                setInputError(inputElement, "Password must contain a number");
            }
        }
            if (e.target.id === "confirmPassword") {
                const passwordInput = document.getElementById("signupPassword");
                if (passwordInput.value !== e.target.value) {
                    setInputError(inputElement, "Passwords do not match");
                }
            }
        });
        inputElement.addEventListener("input", e=>{
            clearInputError(inputElement);
        });
    });


}); 