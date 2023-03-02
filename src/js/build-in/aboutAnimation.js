import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function aboutAnimation() {
    const about = document.querySelector('.about');
    const featuresSlider = document.querySelector('.features-slider');
    if (!featuresSlider) return;

    if (about) {
        const headerTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: "top 80%",
            }
        });

        headerTl.from('.about .section-header', {
            y: '20rem',
            duration: 1,
            ease: "power1.out"
        }).from('.about__top', {
            y: '20rem',
            duration: 1,
            ease: "power1.out"
        }, '=-1')
    }



    const sliderTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.features-slider',
            start: "top 95%",
        }
    });

    if (matchMedia('(max-width: 640px)').matches) {
        sliderTl.from('.features-slider', {
            yPercent: 10,
            duration: 3,
            ease: "power3.out"
        })
    } else {
        sliderTl.from('.features-slider', {
            xPercent: 60,
            duration: 3,
            ease: "power3.out"
        }).from('features-slider__slide-img-block', {
            width: '20rem',
            duration: 3,
            ease: "power3.out"
        }, '=-3')
    }
}