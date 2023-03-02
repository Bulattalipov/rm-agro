import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function linksSlider() {
    const swiper = new Swiper('.links-list', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                spaceBetween: 20
            }
        },
        on: {
            init(swiper) {
                swiper.slides.forEach((slide, index) => {
                    if (slide.classList.contains('active')) {
                        const activeSlideDistance = slide.offsetLeft + slide.clientWidth;

                        if (activeSlideDistance > document.documentElement.clientWidth - swiper.$el[0].getBoundingClientRect().left) {
                            swiper.slideTo(index, 0);
                        }
                    }
                })
            }
        }
    })
}