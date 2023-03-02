import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function partnersSlider() {
    const swipers = document.querySelectorAll('.partners-slider__slider');

    swipers.forEach(swiper => {
        const slides = swiper.querySelectorAll('.swiper-slide');
        if (slides.length < 7) {
            new Swiper(swiper, {
                slidesPerView: "auto",
            })
        } else {
            new Swiper(swiper, {
                loop: true,
                loopAdditionalSlides: 10,
                freeMode: {
                    enabled: true,
                    momentum: false
                },
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: !!swiper.dataset.reverse
                },
                slidesPerView: "auto",
                speed: 6000,
            })
        }
    })
}