import './build-in/lazyload';

import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';
import initSliders from "./custom/initSliders";
import fancybox from "./build-in/fancybox";
import header from "./build-in/header";
import activitiesSlider from "./build-in/activitiesSlider";
import hoverButton from "./build-in/hoverButton";
import intro from "./build-in/intro";
import aboutAnimation from "./build-in/aboutAnimation";
import activitiesAnimation from "./build-in/activitiesAnimation";
import productsAnimation from "./build-in/productsAnimation";
import jobAnimation from "./build-in/jobAnimation";
import newsAnimation from "./build-in/newsAnimation";
import contactsAnimation from "./build-in/contactsAnimation";
import footerAnimation from "./build-in/footerAnimation";
import filterTags from "./build-in/filterTags";
import inputPlaceholder from "./build-in/inputPlaceholder";
import validation from "./build-in/validation";
import masks from "./build-in/masks";
import modals from "./build-in/modals";
import productSlider from "./build-in/productSlider";
import menuModalClose from "./build-in/menuModalClose";
import partnersSlider from "./build-in/partnersSlider";
import tagsSlider from "./build-in/tagsSlider";
import yandexMap from "./build-in/yandexMap";
import teamSlider from "./build-in/teamSlider";
import history from "./build-in/history";
import videoButton from "./build-in/videoButton";
import gallerySlider from "./build-in/gallerySlider";
import successSlider from "./build-in/successSlider";
import careerMoreButton from "./build-in/careerMoreButton";
import fileInputs from "./build-in/fileInputs";
import resetForms from "./build-in/resetForms";
import introAnimation from "./build-in/introAnimation";
import alignHeights from "./custom/alignHeights";
import features from "./build-in/features";
import linksSlider from "./build-in/linksSlider";
import numbersSlider from "./build-in/numbersSlider";
import featuresSlider from "./build-in/featuresSlider";
import modalMenu from "./build-in/modalMenu";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    initSliders();
    editableTextContainer();

    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    validation();
    modals();
    masks();
    fancybox();
    header();
    intro();
    introAnimation();
    aboutAnimation();
    productsAnimation();
    jobAnimation();
    newsAnimation();
    contactsAnimation();
    footerAnimation();
    filterTags();
    inputPlaceholder();
    productSlider();
    menuModalClose();
    partnersSlider();
    tagsSlider();
    yandexMap();
    teamSlider();
    history();
    videoButton();
    gallerySlider();
    successSlider();
    careerMoreButton();
    fileInputs();
    resetForms();
    modalMenu();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

document.fonts.ready.then((res) => {
    activitiesSlider();
    activitiesAnimation();
    linksSlider();
    hoverButton();
    numbersSlider();
    alignHeights('.features-slider', '.features-slider__content');
})

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    features();
    featuresSlider();
    setTimeout(() => {
        document.body.classList.add('animatable')
    }, 300);
});
