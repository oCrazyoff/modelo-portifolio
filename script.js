// Menu mobile
const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('nav a');

const menu = document.querySelector('nav');

btnMenu.addEventListener('click', () => {
    abrirMenu();
});

btnFechar.addEventListener('click', () => {
    fecharMenu();
});

overlay.addEventListener('click', () => {
    fecharMenu();
});

function abrirMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
}

function fecharMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        fecharMenu();
    });
});

// header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});