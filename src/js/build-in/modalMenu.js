export default function modalMenu() {
    const modalMenu = document.querySelector('.modal-menu');

    const vh = window.innerHeight * 0.01;
    modalMenu.style.setProperty('--vh', `${vh}px`);
}