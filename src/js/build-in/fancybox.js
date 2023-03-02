import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        Image: {
            zoom: false,
            Panzoom: {
                ratio: 3
            },
        },
    })
}