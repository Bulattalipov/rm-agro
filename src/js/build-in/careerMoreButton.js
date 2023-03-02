export default function careerMoreButton() {
    const buttons = document.querySelectorAll('.career__success-button');
    const textContainers = document.querySelectorAll('.career__success-text-block');

    textContainers.forEach(container => {
        const hiddenText = document.querySelector('.career__success-hidden-text');

        if (!hiddenText.textContent.trim()) {
            container.nextElementSibling.remove();
        }
    })

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const textContainer = button.previousElementSibling;
            const hiddenText = textContainer.querySelector('.career__success-hidden-text');
            if (!hiddenText) return

            if (hiddenText.classList.contains('hide')) {
                hiddenText.classList.remove('hide');
                button.querySelector('span').textContent = 'Cкрыть текст'
                button.querySelector('img').style.transform = 'rotate(180deg)';
            } else {
                hiddenText.classList.add('hide');
                button.querySelector('span').textContent = 'Читать полностью'
                button.querySelector('img').style.transform = 'rotate(0deg)';

                const slider = button.closest('.career__success-slider');
                const sliderTopOffset = slider.getBoundingClientRect().top + window.pageYOffset;

                if (matchMedia('(max-width: 1024px)').matches) {
                    window.scrollTo({
                        top: sliderTopOffset + 300,
                        behavior: 'smooth',
                    });
                } else {
                    window.scrollTo({
                        top: sliderTopOffset - 300,
                        behavior: 'smooth',
                    });
                }
            }

            window.successSwiper.init();
            window.successSwiper.update();
            window.successSwiper.updateSize();
            window.successSwiper.updateAutoHeight(200);
        })
    })
}