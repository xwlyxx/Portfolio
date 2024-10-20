document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar ul');

    // Toggle para abrir e fechar o menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
