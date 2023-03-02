import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function productsAnimation() {
    const products = document.querySelector('.products');
    if (!products) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.products',
            start: "top 80%",
        }
    })

    tl.from('.products .section-header', {
        y: '20rem',
        duration: 1,
    }).from('.products__list', {
        y: '20rem',
        duration: 1,
    }, '=-0.9')
}