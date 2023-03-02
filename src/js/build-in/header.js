import { disableBodyScroll as lockScroll, clearAllBodyScrollLocks as unlockScroll } from 'body-scroll-lock';

export default function header() {
    const header = document.querySelector('.header');
    const headerContainer = document.querySelector('.header-container');
    const intro = document.querySelector('.intro');
    const pageHeader = document.querySelector('.page-header');
    const error = document.querySelector('.error');
    const burger = document.querySelector('.header__burger');

    burger.addEventListener('click', (e) => {
        if (!header.classList.contains('header--burgered')) {
            lockScroll(headerContainer, {
                reserveScrollBarGap: true,
            });
        } else {
            unlockScroll();
        }

        header.classList.toggle('header--burgered');
        headerContainer.classList.toggle('active');
    });

    if (intro) {
        intro.style.setProperty('--header-height', header.clientHeight + 'px');
    } else if (pageHeader) {
        pageHeader.style.setProperty('--header-height', header.clientHeight + 'px');
    } else if (error) {
        error.style.setProperty('--header-height', header.clientHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--header-height', header.clientHeight + 'px');
    }

    /*window.addEventListener('scroll', () => {
        let scrollDistance = document.documentElement.getBoundingClientRect().top;
        if (scrollDistance <= -25) {
            if (header.classList.contains('header--white')) return;
            header.classList.add('header--white');
        } else {
            header.classList.remove('header--white');
        }
    });*/
}