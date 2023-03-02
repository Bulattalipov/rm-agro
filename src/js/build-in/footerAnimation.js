import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function footerAnimation() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%'
        }
    })

    tl.from('.footer__logo', {
        duration: 1,
        y: '7rem',
        ease: 'power3.out'
    }).from('.footer__row', {
        duration: 1,
        stagger: 0.2,
        y: '7rem',
        ease: 'power3.out'
    }, '=-1')
}