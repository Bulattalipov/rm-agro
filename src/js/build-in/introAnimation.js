import gsap from 'gsap';

export default function introAnimation() {
    const intro = document.querySelector('.intro');
    if (!intro || !intro.closest('.animatable')) return;

    const tl = gsap.timeline();

    tl.to('.intro__title', {
        'clip-path': 'inset(0% 0% 0% 0%)',
        delay: 0.7,
        duration: 1.5,
        ease: "power3.out"
    }).from('.intro__footer', {
        transform: 'translateY(2rem)',
        opacity: 0,
        duration: 0.5
    }, '=-0.8').from('.intro .link-block', {
        transform: 'translateY(4rem)',
        opacity: 0,
        duration: 0.5,
    }, '=-0.2').from('.header', {
        transform: 'translateY(4rem)',
        opacity: 0,
        duration: 0.5
    }, '=-0.5')
}

window.initIntroAnimation = introAnimation;