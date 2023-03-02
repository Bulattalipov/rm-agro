export default function hoverButton() {
    const buttons = document.querySelectorAll('.js-hover-button');

    buttons.forEach(button => {
        const clone = button.nextElementSibling.classList.contains('js-hover-button-clone') ? button.nextElementSibling : null;
        if (!clone) return;

        console.log(clone.offsetWidth);

        button.style.setProperty('--button-width', clone.offsetWidth + 'px');
    })
}