import EmblaCarousel from '../../../../gulp/node_modules/embla-carousel';

const wrapMenu = document.querySelector('#l-menu');
const viewPortMenu = wrapMenu.querySelector('.l-embla-viewport');
const BREAKPOINT = 768;
const optionsMenu = {
  draggable: window.innerWidth < BREAKPOINT,
  containScroll: 'trimSnaps',
};
const emblaMenu = EmblaCarousel(viewPortMenu, optionsMenu);
emblaMenu.on('resize', () => {
  const draggable = window.innerWidth < BREAKPOINT;
  emblaMenu.reInit({ draggable });
});

// Active menu
const menuLink = document.getElementsByClassName('link-menu');
for (let n = 0; n < menuLink.length; n++)
  menuLink[n].href === location.href && menuLink[n].classList.add('active');
