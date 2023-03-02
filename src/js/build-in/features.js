import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger]);

export default function features() {
    if (matchMedia('(max-width: 768px)').matches) return;

    const items = document.querySelectorAll('.features-slider__slide');

    items.forEach(item => {
        const title = item.querySelector('.features-slider__content h3');
        const titlePaddingRight = window.getComputedStyle(title, null).getPropertyValue("padding-right").slice(0, -2) * 1;
        const titleSpan = item.querySelector('.features-slider__content h3 span');
        const text = item.querySelector('.features-slider__content p');

        text.style.width = titlePaddingRight  + titleSpan.clientWidth + 'px';
    })

    

    gsap.utils.toArray('.js-section').forEach((section, index) => {
        const slides = section.querySelectorAll('.js-section-slide');

        if (window.matchMedia("(min-width: 1025px)").matches)
        {
            const w = section.querySelector('.js-section-wrapper');
            const [x, xEnd] = [0, section.offsetWidth - w.offsetWidth];
            if (xEnd === 0 || slides.length <= 2) return;
            gsap.fromTo(w, {x}, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    pin: section.closest('.narrow-container') || section.closest('.container'),
                    scrub: 1,
                }
            });
        }
    });
}