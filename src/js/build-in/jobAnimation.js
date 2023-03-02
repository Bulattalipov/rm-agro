import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function jobAnimation() {
    const job = document.querySelector('.job');
    if (!job) return

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.job',
            start: 'top 80%'
        }
    })

    tl.to('.job__inner',{
        'clip-path': 'inset(0% 0% 0% round 2rem)',
        duration: 1,
    }).from('.job__title', {
        y: '20rem',
        duration: 1,
    }, '=-0.8').from('.job__slider', {
        y: '20rem',
        duration: 1,
    }, '=-1').from('.job__footer', {
        y: '15rem',
        duration: 1,
    }, '=-1')
}