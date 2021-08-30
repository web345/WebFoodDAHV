const loginSingin = document.querySelector(".login__singin");
const loginSignup = document.querySelector(".login__signup");
const loginCreate = document.querySelector(".login__create ");
const loginRegister = document.querySelector(".login__register");
const loginButton = document.querySelector(".login__button");

loginSingin.addEventListener("click", function(e) {
    loginCreate.classList.remove("none");
    // loginCreate.classList.add("block");
    loginRegister.classList.add("none");
});

loginSignup.addEventListener("click", function(e) {
    loginCreate.classList.add("none");
    loginRegister.classList.remove("none");
});

/// Validate Form
const sweetAlert = document.querySelector(".sweet-alert");
const spanTxt = document.querySelector(".span-txt");
const iconMessage = document.querySelector(".icon-message");
const iconEye = document.querySelectorAll(".icon-eye");
const alertClose = document.querySelector(".alert-close");
alertClose.addEventListener("click", function(e) {
    sweetAlert.classList.remove("show");
});

loginRegister.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = e.target.value;
    const user = this.elements["user"].value.trim();
    const password = this.elements["pass"].value.trim();

    if (user.length < 2) {
        sweetAlert.classList.add("show");
        iconMessage.classList.remove("fa-check");
        iconMessage.classList.add("fa-times");
        spanTxt.textContent =
            "Please enter your name and have more than 2 characters";
        return;
    } else {
        sweetAlert.classList.remove("show");
    }
    if (password.length < 8) {
        sweetAlert.classList.add("show");
        spanTxt.textContent = "Please enter a password with 8 characters";
        return;
    } else {
        sweetAlert.classList.remove("show");
    }
    sweetAlert.classList.add("show");
    iconMessage.classList.add("fa-check");
    iconMessage.classList.remove("fa-times");
    spanTxt.textContent = "System login successful";
});

// show password
iconEye.forEach((item) =>
    item.addEventListener("click", function(e) {
        const input = this.previousElementSibling;
        const inputType = input.getAttribute("type");
        if (inputType === "password") {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    })
);

loginCreate.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = e.target.value;
    const user = this.elements["user"].value.trim();
    const password = this.elements["pass"].value.trim();
    const email = this.elements["email"].value.trim();
    const regexEmail =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (user.length < 2) {
        sweetAlert.classList.add("show");
        iconMessage.classList.remove("fa-check");
        iconMessage.classList.add("fa-times");
        spanTxt.textContent =
            "Please enter your name and have more than 2 characters";
        return;
    } else {
        sweetAlert.classList.remove("show");
    }
    if (regexEmail.test(email)) {
        sweetAlert.classList.remove("show");
    } else {
        spanTxt.textContent = "Please enter correct email format";
        sweetAlert.classList.add("show");
        iconMessage.classList.remove("fa-check");
        iconMessage.classList.add("fa-times");
        return;
    }
    if (password.length < 8) {
        sweetAlert.classList.add("show");
        spanTxt.textContent = "Please enter a password with 8 characters";
        return;
    } else {
        sweetAlert.classList.remove("show");
    }
    sweetAlert.classList.add("show");
    iconMessage.classList.add("fa-check");
    iconMessage.classList.remove("fa-times");
    spanTxt.textContent = "Successfully registered the system";
});

const userForm = document.querySelector(".user-form");
const loginClose = document.querySelector(".login-close");

const loginForm = document.querySelector(".login");

userForm.addEventListener("click", function(e) {
    loginForm.classList.add("active-form");
});

loginClose.addEventListener("click", function(e) {
    loginForm.classList.remove("active-form");
});