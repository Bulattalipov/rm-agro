import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function numbersSlider() {
    if (matchMedia('(min-width: 1025px)').matches) return;

    const swiper = new Swiper('.features-slider', {
        slidesPerView: "auto",
        spaceBetween: 0,
        breakpoints: {
            641: {
                spaceBetween: 50
            }
        }
    })
}