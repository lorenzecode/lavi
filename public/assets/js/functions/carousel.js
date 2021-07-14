// import EmblaCarousel from '../../../gulp/node_modules/embla-carousel';

// const wrapServices = document.querySelector('#l-services');
// const viewPortServices = wrapServices.querySelector('.l-embla-viewport');

// const optionsServices = {
//   loop: false,
//   containScroll: 'trimSnaps',
//   align: 'start',
// };
// const emblaServices = EmblaCarousel(viewPortServices, optionsServices);

import EmblaCarousel from '../../../../gulp/node_modules/embla-carousel';

// Nav
const setupPrevNextBtnsServices = (
  servicesPrevBtn,
  servicesNextBtn,
  emblaServices
) => {
  servicesPrevBtn.addEventListener('click', emblaServices.scrollPrev, false);
  servicesNextBtn.addEventListener('click', emblaServices.scrollNext, false);
};

const disablePrevNextBtnsServices = (
  servicesPrevBtn,
  servicesNextBtn,
  emblaServices
) => {
  return () => {
    if (emblaServices.canScrollPrev())
      servicesPrevBtn.removeAttribute('disabled');
    else servicesPrevBtn.setAttribute('disabled', 'disabled');

    if (emblaServices.canScrollNext())
      servicesNextBtn.removeAttribute('disabled');
    else servicesNextBtn.setAttribute('disabled', 'disabled');
  };
};

const wrapServices = document.querySelector('#l-services');
const viewPortServices = wrapServices.querySelector('.l-embla-viewport');
const servicesPrevBtn = wrapServices.querySelector('.l-embla-btn-prev');
const servicesNextBtn = wrapServices.querySelector('.l-embla-btn-next');

const optionsServices = {
  loop: false,
  containScroll: 'trimSnaps',
  align: 'start',
};
const emblaServices = EmblaCarousel(viewPortServices, optionsServices);

const disablePrevAndNextBtnsServices = disablePrevNextBtnsServices(
  servicesPrevBtn,
  servicesNextBtn,
  emblaServices
);
setupPrevNextBtnsServices(servicesPrevBtn, servicesNextBtn, emblaServices);
emblaServices.on('select', disablePrevAndNextBtnsServices);
emblaServices.on('init', disablePrevAndNextBtnsServices);
