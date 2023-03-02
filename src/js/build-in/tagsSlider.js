import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export  default function tagsSlider() {
    if (!matchMedia('(max-width: 768px)').matches) return;

    const swipers = document.querySelectorAll('.directions-single__types-tags');

    swipers.forEach(swiper => {
        new Swiper(swiper, {
            slidesPerView: "auto",
            spaceBetween: 10,
        })
    })
}