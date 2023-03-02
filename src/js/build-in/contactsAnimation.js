import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function contactsAnimation() {
    const contacts = document.querySelector('.contacts-section');
    if (!contacts) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contacts-section',
            start: 'top 80%'
        }
    })

    tl.to('.contacts-section__inner', {
        duration: 1,
        'clip-path': 'inset(0% 0% 0% round 2rem)',
    }).from('.contacts-section__title', {
        yPercent: 100,
        duration: 1
    }, '=-0.8').from('.contacts-section__wrapper', {
        y: '15rem',
        duration: 1
    }, '=-1')
}