import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function filterTags() {
    if (!matchMedia('(max-width: 768px)').matches) return;

    const swiper = new Swiper('.js-filter-tags', {
        slidesPerView: "auto",
        spaceBetween: 14,
    })
}

window.initFilterTags = filterTags;