function menuShow() {
   let menuMobile = document.querySelector('.menu-mobile');
   if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./assets/icons8-cardápio.svg"
        } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./assets/icons8-excluir.svg";
        } 
        
}

