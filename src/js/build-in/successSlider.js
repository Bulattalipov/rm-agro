import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function successSlider() {
    const success = document.querySelector('.career__success');
    if (!success) return

    const swiper = new Swiper('.career__success-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        observer: true,
        navigation: {
            nextEl: success.querySelector('.js-next-slide'),
            prevEl: success.querySelector('.js-prev-slide'),
        },
        breakpoints: {
            769: {
                spaceBetween: 50,
            },
            1025: {
                spaceBetween: 80,
            }
        }
    })

    window.successSwiper = swiper;

    swiper.on('slideNextTransitionEnd', () => {
        const previousSlide = swiper.slides[swiper.previousIndex];
        const button = previousSlide.querySelector('.career__success-button');
        const textContainer = previousSlide.querySelector('.career__success-text-block');

        const hiddenText = textContainer.querySelector('.career__success-hidden-text');
        if (!hiddenText) return

        if (!hiddenText.classList.contains('hide')) {
            hiddenText.classList.add('hide');

            button.querySelector('span').textContent = 'Читать полностью'
            button.querySelector('img').style.transform = 'rotate(0deg)';
        }
    })

    swiper.on('slidePrevTransitionEnd', () => {
        const nextSlide = swiper.slides[swiper.activeIndex + 1];
        const button = nextSlide.querySelector('.career__success-button');
        const textContainer = nextSlide.querySelector('.career__success-text-block');

        const hiddenText = textContainer.querySelector('.career__success-hidden-text');
        if (!hiddenText) return

        if (!hiddenText.classList.contains('hide')) {
            hiddenText.classList.add('hide');
            button.querySelector('span').textContent = 'Читать полностью'
            button.querySelector('img').style.transform = 'rotate(0deg)';
        }
    })
}

window.initSuccessSlider = successSlider;