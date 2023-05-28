//botão mobile

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

//display texto sessão Interesses

const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'plantas': 'Sou apaixonada por plantas e atualmente cultivo mais de 40 espécies de plantas em casa! Minhas preferidas são as folhagens e as suculentas.',
    'livros': 'Meu hobby predileto é a leitura. Meus livros favoritos são os de autoajuda e desenvolvimento pessoal baseados em estudos científicos.'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}
