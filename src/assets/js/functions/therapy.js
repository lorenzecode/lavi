import EmblaCarousel from '../../../../gulp/node_modules/embla-carousel';

export const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
  prevBtn.addEventListener('click', embla.scrollPrev, false);
  nextBtn.addEventListener('click', embla.scrollNext, false);
};

export const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
    else prevBtn.setAttribute('disabled', 'disabled');

    if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
    else nextBtn.setAttribute('disabled', 'disabled');
  };
};

export const setupDotBtns = (dotsArray, embla) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.classList.add('embla__dot');
    dotNode.addEventListener('click', () => embla.scrollTo(i), false);
  });
};

export const generateDotBtns = (dots, embla) => {
  const scrollSnaps = embla.scrollSnapList();
  const dotsFrag = document.createDocumentFragment();
  const dotsArray = scrollSnaps.map(() => document.createElement('button'));
  dotsArray.forEach((dotNode) => dotsFrag.appendChild(dotNode));
  dots.appendChild(dotsFrag);
  return dotsArray;
};

export const selectDotBtn = (dotsArray, embla) => () => {
  const previous = embla.previousScrollSnap();
  const selected = embla.selectedScrollSnap();
  dotsArray[previous].classList.remove('is-selected');
  dotsArray[selected].classList.add('is-selected');
};

const setupEmblaCarousel = (emblaNode, options) => {
  const viewPort = emblaNode.querySelector('.embla__viewport');
  const prevBtn = emblaNode.querySelector('.embla__button--prev');
  const nextBtn = emblaNode.querySelector('.embla__button--next');
  const dots = emblaNode.querySelector('.embla__dots');
  const embla = EmblaCarousel(viewPort, options);
  const dotsArray = generateDotBtns(dots, embla);
  const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
  const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

  setupPrevNextBtns(prevBtn, nextBtn, embla);
  setupDotBtns(dotsArray, embla);

  embla.on('select', setSelectedDotBtn);
  embla.on('select', disablePrevAndNextBtns);
  embla.on('init', setSelectedDotBtn);
  embla.on('init', disablePrevAndNextBtns);
};

const options = {
  loop: false,
  align: 'start',
};
const emblaNodes = [].slice.call(document.querySelectorAll('.embla'));
const emblaCarousels = emblaNodes.map((emblaNode) =>
  setupEmblaCarousel(emblaNode, options)
);
