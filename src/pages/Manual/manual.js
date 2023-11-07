document.addEventListener("DOMContentLoaded", function () {
    const menuToggleIcon = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".navbar-collapse");

    menuToggleIcon.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});