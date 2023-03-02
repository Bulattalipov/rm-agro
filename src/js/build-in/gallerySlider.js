import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function gallerySlider() {
    const gallerySlider  = document.querySelector('.modal-gallery__slider-container');
    if (!gallerySlider) return;

    /* Инициализация слайдеров */

    const subSwiper = new Swiper('.modal-gallery__sub-slider', {
        slidesPerView: "auto",
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY
                if (diff < range || diff > -range) s.allowClick = true;
            }
        }
    })

    const swiper = new Swiper('.modal-gallery__slider', {
        spaceBetween: 10,
        thumbs: {
            swiper: subSwiper
        },
        breakpoints: {
            641: {
                spaceBetween: 0
            }
        },
        navigation: {
            nextEl: document.querySelector('.modal-gallery__slider').querySelector('.js-next-slide'),
            prevEl: document.querySelector('.modal-gallery__slider').querySelector('.js-prev-slide'),
        }
    })

    /* Lazy load для iframe */

    const iframes = document.querySelectorAll('.modal-gallery iframe')

    swiper.on('slideChange', () => {
        const currentIframe = swiper.slides[swiper.activeIndex].querySelector('iframe');

        iframes.forEach(iframe => iframe.src = '')

        if (currentIframe) {
            currentIframe.src = currentIframe.dataset.src;
        }
    })

    /* Смена ссылки на скачивание и размера файла при свайпе */

    const sizeDisplay = document.querySelector('.modal-gallery__size');
    const downloadLinkDisplay = document.querySelector('.modal-gallery__download');


    swiper.on('slideChange', changeModalContent);

    /* Синхронизация слайдера в модальном окне с нажатой карточкой */

    const images = document.querySelectorAll('.media__list--single .media__item');
    images.forEach((img, index) => {
        img.addEventListener('click', () => swiper.slideTo(index, 0))
        changeModalContent();
    })

    function changeModalContent() {
        const currentGraphic = swiper.slides[swiper.activeIndex].querySelector('img, iframe');
        if (!currentGraphic) return;

        if (currentGraphic.tagName.toLowerCase() === 'iframe') {
            downloadLinkDisplay.style.opacity = '0';
            sizeDisplay.style.opacity = '0';
        } else {
            downloadLinkDisplay.style.opacity = '1';
            sizeDisplay.style.opacity = '1';
        }

        sizeDisplay.innerHTML = currentGraphic.dataset.size;
        downloadLinkDisplay.setAttribute('href', currentGraphic.dataset.src);
    }
}

window.initGallerySlider = gallerySlider;