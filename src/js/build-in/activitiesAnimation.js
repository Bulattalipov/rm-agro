import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function activitiesAnimation() {
    const activities = document.querySelector('.activities');
    if (!activities) return;

    const headerTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.activities',
            start: "top 70%",
        }
    });

    if (matchMedia('(max-width: 1024px)').matches) {

    } else {
        headerTl.from('.activities .section-header', {
            y: '20rem',
            duration: 1,
        }).from('.activities .activities-slider__title-wrapper', {
            y: '30rem',
            duration: 1,
        }, '=-0.9')
    }

    const sliderTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.activities .activities-slider',
            start: "top 80%",
        }
    });

    sliderTl.fromTo('.activities .activities-slider__content.active .activities-slider__img img', {
        scale: 0
    }, {
        duration: 1,
        scale: 1
    })
}