import EmblaCarousel from '../../../../gulp/node_modules/embla-carousel';

// Autoplay
const autoplay = (embla, interval) => {
  let timer = 0;

  const play = () => {
    stop();
    requestAnimationFrame(() => (timer = window.setTimeout(next, interval)));
  };

  const stop = () => {
    window.clearTimeout(timer);
    timer = 0;
  };

  const next = () => {
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
    play();
  };

  return { play, stop };
};

// Nav
const setupPrevNextBtns = (prevBtn, nextBtn, emblaSlide) => {
  prevBtn.addEventListener('click', emblaSlide.scrollPrev, false);
  nextBtn.addEventListener('click', emblaSlide.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, emblaSlide) => {
  return () => {
    if (emblaSlide.canScrollPrev()) prevBtn.removeAttribute('disabled');
    else prevBtn.setAttribute('disabled', 'disabled');

    if (emblaSlide.canScrollNext()) nextBtn.removeAttribute('disabled');
    else nextBtn.setAttribute('disabled', 'disabled');
  };
};

//Dot
const setupDotBtns = (dotsArray, emblaSlide) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.addEventListener('click', () => emblaSlide.scrollTo(i), false);
  });
};

const generateDotBtns = (dots, emblaSlide) => {
  const template = document.getElementById('embla-dot-template').innerHTML;
  dots.innerHTML = emblaSlide
    .scrollSnapList()
    .reduce((acc) => acc + template, '');
  return [].slice.call(dots.querySelectorAll('.l-embla-dot'));
};

const selectDotBtn = (dotsArray, emblaSlide) => () => {
  const previous = emblaSlide.previousScrollSnap();
  const selected = emblaSlide.selectedScrollSnap();
  dotsArray[previous].classList.remove('is-selected');
  dotsArray[selected].classList.add('is-selected');
};

//Slide
const wrapSlide = document.querySelector('#l-slide');
const viewPortSlide = wrapSlide.querySelector('.l-embla-viewport');
const prevBtn = wrapSlide.querySelector('.l-embla-btn-prev');
const nextBtn = wrapSlide.querySelector('.l-embla-btn-next');
const dots = document.querySelector('.l-embla-dots');

const optionsSlide = {
  loop: true,
};
const emblaSlide = EmblaCarousel(viewPortSlide, optionsSlide);
const autoplayer = autoplay(emblaSlide, 4000);
const dotsArray = generateDotBtns(dots, emblaSlide, autoplayer);
const setSelectedDotBtn = selectDotBtn(dotsArray, emblaSlide, autoplayer);
const disablePrevAndNextBtns = disablePrevNextBtns(
  prevBtn,
  nextBtn,
  emblaSlide
);
setupPrevNextBtns(prevBtn, nextBtn, emblaSlide);
setupDotBtns(dotsArray, emblaSlide);
emblaSlide.on('select', setSelectedDotBtn);
emblaSlide.on('select', disablePrevAndNextBtns);
emblaSlide.on('init', setSelectedDotBtn);
emblaSlide.on('init', disablePrevAndNextBtns);

emblaSlide.on("pointerDown", autoplayer.stop);
emblaSlide.on("init", autoplayer.play);
