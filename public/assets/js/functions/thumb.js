import EmblaCarousel from '../../../../gulp/node_modules/embla-carousel';

// Thumb
export const onThumbClick = (mainCarousel, thumbCarousel, index) => () => {
  if (!thumbCarousel.clickAllowed()) return;
  mainCarousel.scrollTo(index);
};

export const followMainCarousel = (mainCarousel, thumbCarousel) => () => {
  thumbCarousel.scrollTo(mainCarousel.selectedScrollSnap());
  selectThumbBtn(mainCarousel, thumbCarousel);
};

const selectThumbBtn = (mainCarousel, thumbCarousel) => {
  const previous = mainCarousel.previousScrollSnap();
  const selected = mainCarousel.selectedScrollSnap();
  thumbCarousel.slideNodes()[previous].classList.remove('is-selected');
  thumbCarousel.slideNodes()[selected].classList.add('is-selected');
};

// Embla
const mainCarouselWrap = document.getElementById('main-carousel');
const mainCarouselView = mainCarouselWrap.querySelector('.l-embla-viewport');
const mainCarousel = EmblaCarousel(mainCarouselView, {
  selectedClass: '',
  loop: false,
});

const thumbCarouselWrap = document.getElementById('thumb-carousel');
const thumbCarouselView = thumbCarouselWrap.querySelector('.l-embla-viewport');
const thumbCarousel = EmblaCarousel(thumbCarouselView, {
  selectedClass: '',
  containScroll: 'keepSnaps',
});

thumbCarousel.slideNodes().forEach((thumbNode, index) => {
  const onClick = onThumbClick(mainCarousel, thumbCarousel, index);
  thumbNode.addEventListener('click', onClick, false);
});

const syncThumbCarousel = followMainCarousel(mainCarousel, thumbCarousel);
mainCarousel.on('select', syncThumbCarousel);
thumbCarousel.on('init', syncThumbCarousel);
