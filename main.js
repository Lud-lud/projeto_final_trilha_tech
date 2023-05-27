const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
let hamburguer = document.querySelector('.icon');

function toggleMenu() {
    nav.classList.toggle('active');
    menuShow();
}

btnMobile.addEventListener('click', toggleMenu);

function menuShow() {
    
    if (nav.classList.contains('active')) {
        hamburguer.src = "./assets/icons8-excluir.svg";
    } else {
        hamburguer.src = "./assets/icons8-cardápio.svg";
    }
}