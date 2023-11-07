document.addEventListener("DOMContentLoaded", function () {
    
    const loginForm = document.getElementById("login-form");


    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log("Nome de Usuário: " + username);
        console.log("Senha: " + password);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggleIcon = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".navbar-collapse");

    menuToggleIcon.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});