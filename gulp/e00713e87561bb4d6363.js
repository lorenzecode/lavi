/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/home/_0-menu.js":
/*!****************************************!*\
  !*** ../src/assets/js/home/_0-menu.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../gulp/node_modules/embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");

var wrapMenu = document.querySelector('#l-menu');
var viewPortMenu = wrapMenu.querySelector('.l-embla-viewport');
var BREAKPOINT = 768;
var optionsMenu = {
  draggable: window.innerWidth < BREAKPOINT,
  containScroll: 'trimSnaps'
};
var emblaMenu = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(viewPortMenu, optionsMenu);
emblaMenu.on('resize', function () {
  var draggable = window.innerWidth < BREAKPOINT;
  emblaMenu.reInit({
    draggable: draggable
  });
});

/***/ }),

/***/ "../src/assets/js/home/_1-slide.js":
/*!*****************************************!*\
  !*** ../src/assets/js/home/_1-slide.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../gulp/node_modules/embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");
 // Nav

var setupPrevNextBtns = function setupPrevNextBtns(prevBtn, nextBtn, emblaSlide) {
  prevBtn.addEventListener('click', emblaSlide.scrollPrev, false);
  nextBtn.addEventListener('click', emblaSlide.scrollNext, false);
};

var disablePrevNextBtns = function disablePrevNextBtns(prevBtn, nextBtn, emblaSlide) {
  return function () {
    if (emblaSlide.canScrollPrev()) prevBtn.removeAttribute('disabled');else prevBtn.setAttribute('disabled', 'disabled');
    if (emblaSlide.canScrollNext()) nextBtn.removeAttribute('disabled');else nextBtn.setAttribute('disabled', 'disabled');
  };
}; //Dot


var setupDotBtns = function setupDotBtns(dotsArray, emblaSlide) {
  dotsArray.forEach(function (dotNode, i) {
    dotNode.addEventListener('click', function () {
      return emblaSlide.scrollTo(i);
    }, false);
  });
};

var generateDotBtns = function generateDotBtns(dots, emblaSlide) {
  var template = document.getElementById('embla-dot-template').innerHTML;
  dots.innerHTML = emblaSlide.scrollSnapList().reduce(function (acc) {
    return acc + template;
  }, '');
  return [].slice.call(dots.querySelectorAll('.l-embla-dot'));
};

var selectDotBtn = function selectDotBtn(dotsArray, emblaSlide) {
  return function () {
    var previous = emblaSlide.previousScrollSnap();
    var selected = emblaSlide.selectedScrollSnap();
    dotsArray[previous].classList.remove('is-selected');
    dotsArray[selected].classList.add('is-selected');
  };
}; //Slide


var wrapSlide = document.querySelector('#l-slide');
var viewPortSlide = wrapSlide.querySelector('.l-embla-viewport');
var prevBtn = wrapSlide.querySelector('.l-embla-btn-prev');
var nextBtn = wrapSlide.querySelector('.l-embla-btn-next');
var dots = document.querySelector('.l-embla-dots');
var optionsSlide = {
  loop: true
};
var emblaSlide = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(viewPortSlide, optionsSlide);
var dotsArray = generateDotBtns(dots, emblaSlide);
var setSelectedDotBtn = selectDotBtn(dotsArray, emblaSlide);
var disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, emblaSlide);
setupPrevNextBtns(prevBtn, nextBtn, emblaSlide);
setupDotBtns(dotsArray, emblaSlide);
emblaSlide.on('select', setSelectedDotBtn);
emblaSlide.on('select', disablePrevAndNextBtns);
emblaSlide.on('init', setSelectedDotBtn);
emblaSlide.on('init', disablePrevAndNextBtns);

/***/ }),

/***/ "../src/assets/js/home/_2-carousel.js":
/*!********************************************!*\
  !*** ../src/assets/js/home/_2-carousel.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../gulp/node_modules/embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");
// import EmblaCarousel from '../../../gulp/node_modules/embla-carousel';
// const wrapServices = document.querySelector('#l-services');
// const viewPortServices = wrapServices.querySelector('.l-embla-viewport');
// const optionsServices = {
//   loop: false,
//   containScroll: 'trimSnaps',
//   align: 'start',
// };
// const emblaServices = EmblaCarousel(viewPortServices, optionsServices);
 // Nav

var setupPrevNextBtnsServices = function setupPrevNextBtnsServices(servicesPrevBtn, servicesNextBtn, emblaServices) {
  servicesPrevBtn.addEventListener('click', emblaServices.scrollPrev, false);
  servicesNextBtn.addEventListener('click', emblaServices.scrollNext, false);
};

var disablePrevNextBtnsServices = function disablePrevNextBtnsServices(servicesPrevBtn, servicesNextBtn, emblaServices) {
  return function () {
    if (emblaServices.canScrollPrev()) servicesPrevBtn.removeAttribute('disabled');else servicesPrevBtn.setAttribute('disabled', 'disabled');
    if (emblaServices.canScrollNext()) servicesNextBtn.removeAttribute('disabled');else servicesNextBtn.setAttribute('disabled', 'disabled');
  };
};

var wrapServices = document.querySelector('#l-services');
var viewPortServices = wrapServices.querySelector('.l-embla-viewport');
var servicesPrevBtn = wrapServices.querySelector('.l-embla-btn-prev');
var servicesNextBtn = wrapServices.querySelector('.l-embla-btn-next');
var optionsServices = {
  loop: false,
  containScroll: 'trimSnaps',
  align: 'start'
};
var emblaServices = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(viewPortServices, optionsServices);
var disablePrevAndNextBtnsServices = disablePrevNextBtnsServices(servicesPrevBtn, servicesNextBtn, emblaServices);
setupPrevNextBtnsServices(servicesPrevBtn, servicesNextBtn, emblaServices);
emblaServices.on('select', disablePrevAndNextBtnsServices);
emblaServices.on('init', disablePrevAndNextBtnsServices);

/***/ }),

/***/ "../src/assets/js/home/_3-thumb.js":
/*!*****************************************!*\
  !*** ../src/assets/js/home/_3-thumb.js ***!
  \*****************************************/
/*! exports provided: onThumbClick, followMainCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onThumbClick", function() { return onThumbClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followMainCarousel", function() { return followMainCarousel; });
/* harmony import */ var _gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../gulp/node_modules/embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");
 // Thumb

var onThumbClick = function onThumbClick(mainCarousel, thumbCarousel, index) {
  return function () {
    if (!thumbCarousel.clickAllowed()) return;
    mainCarousel.scrollTo(index);
  };
};
var followMainCarousel = function followMainCarousel(mainCarousel, thumbCarousel) {
  return function () {
    thumbCarousel.scrollTo(mainCarousel.selectedScrollSnap());
    selectThumbBtn(mainCarousel, thumbCarousel);
  };
};

var selectThumbBtn = function selectThumbBtn(mainCarousel, thumbCarousel) {
  var previous = mainCarousel.previousScrollSnap();
  var selected = mainCarousel.selectedScrollSnap();
  thumbCarousel.slideNodes()[previous].classList.remove('is-selected');
  thumbCarousel.slideNodes()[selected].classList.add('is-selected');
}; // Embla


var mainCarouselWrap = document.getElementById('main-carousel');
var mainCarouselView = mainCarouselWrap.querySelector('.l-embla-viewport');
var mainCarousel = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(mainCarouselView, {
  selectedClass: '',
  loop: false
});
var thumbCarouselWrap = document.getElementById('thumb-carousel');
var thumbCarouselView = thumbCarouselWrap.querySelector('.l-embla-viewport');
var thumbCarousel = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(thumbCarouselView, {
  selectedClass: '',
  containScroll: 'keepSnaps'
});
thumbCarousel.slideNodes().forEach(function (thumbNode, index) {
  var onClick = onThumbClick(mainCarousel, thumbCarousel, index);
  thumbNode.addEventListener('click', onClick, false);
});
var syncThumbCarousel = followMainCarousel(mainCarousel, thumbCarousel);
mainCarousel.on('select', syncThumbCarousel);
thumbCarousel.on('init', syncThumbCarousel);

/***/ }),

/***/ "../src/assets/js/sobre/_0-menu.js":
/*!*****************************************!*\
  !*** ../src/assets/js/sobre/_0-menu.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../gulp/node_modules/embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");

var wrapMenu = document.querySelector('#l-menu');
var viewPortMenu = wrapMenu.querySelector('.l-embla-viewport');
var BREAKPOINT = 768;
var optionsMenu = {
  draggable: window.innerWidth < BREAKPOINT,
  containScroll: 'trimSnaps'
};
var emblaMenu = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(viewPortMenu, optionsMenu);
emblaMenu.on('resize', function () {
  var draggable = window.innerWidth < BREAKPOINT;
  emblaMenu.reInit({
    draggable: draggable
  });
});

/***/ }),

/***/ "../src/assets/js/sobre/_3-thumb.js":
/*!******************************************!*\
  !*** ../src/assets/js/sobre/_3-thumb.js ***!
  \******************************************/
/*! exports provided: onThumbClick, followMainCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onThumbClick", function() { return onThumbClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followMainCarousel", function() { return followMainCarousel; });
/* harmony import */ var _gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../gulp/node_modules/embla-carousel */ "./node_modules/embla-carousel/embla-carousel.esm.js");
 // Thumb

var onThumbClick = function onThumbClick(mainCarousel, thumbCarousel, index) {
  return function () {
    if (!thumbCarousel.clickAllowed()) return;
    mainCarousel.scrollTo(index);
  };
};
var followMainCarousel = function followMainCarousel(mainCarousel, thumbCarousel) {
  return function () {
    thumbCarousel.scrollTo(mainCarousel.selectedScrollSnap());
    selectThumbBtn(mainCarousel, thumbCarousel);
  };
};

var selectThumbBtn = function selectThumbBtn(mainCarousel, thumbCarousel) {
  var previous = mainCarousel.previousScrollSnap();
  var selected = mainCarousel.selectedScrollSnap();
  thumbCarousel.slideNodes()[previous].classList.remove('is-selected');
  thumbCarousel.slideNodes()[selected].classList.add('is-selected');
}; // Embla


var mainCarouselWrap = document.getElementById('main-carousel');
var mainCarouselView = mainCarouselWrap.querySelector('.l-embla-viewport');
var mainCarousel = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(mainCarouselView, {
  selectedClass: '',
  loop: false
});
var thumbCarouselWrap = document.getElementById('thumb-carousel');
var thumbCarouselView = thumbCarouselWrap.querySelector('.l-embla-viewport');
var thumbCarousel = Object(_gulp_node_modules_embla_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(thumbCarouselView, {
  selectedClass: '',
  containScroll: 'keepSnaps'
});
thumbCarousel.slideNodes().forEach(function (thumbNode, index) {
  var onClick = onThumbClick(mainCarousel, thumbCarousel, index);
  thumbNode.addEventListener('click', onClick, false);
});
var syncThumbCarousel = followMainCarousel(mainCarousel, thumbCarousel);
mainCarousel.on('select', syncThumbCarousel);
thumbCarousel.on('init', syncThumbCarousel);

/***/ }),

/***/ "./node_modules/embla-carousel/embla-carousel.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/embla-carousel/embla-carousel.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Alignment(params) {
  var viewSize = params.viewSize,
      align = params.align;
  var predefined = {
    start: start,
    center: center,
    end: end
  };

  function start() {
    return 0;
  }

  function center(n) {
    return end(n) / 2;
  }

  function end(n) {
    return viewSize - n;
  }

  function percent() {
    return viewSize * Number(align);
  }

  function measure(n) {
    if (typeof align === 'number') return percent();
    return predefined[align](n);
  }

  var self = {
    measure: measure
  };
  return self;
}

function Animation(callback) {
  var animationFrame = 0;

  function ifAnimating(active, cb) {
    return function () {
      if (active === !!animationFrame) cb();
    };
  }

  function start() {
    animationFrame = window.requestAnimationFrame(callback);
  }

  function stop() {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  var self = {
    proceed: ifAnimating(true, start),
    start: ifAnimating(false, start),
    stop: ifAnimating(true, stop)
  };
  return self;
}

function Axis(axis) {
  var scroll = axis === 'y' ? 'y' : 'x';
  var cross = axis === 'y' ? 'x' : 'y';

  function measure(node) {
    var _a = node.getBoundingClientRect(),
        width = _a.width,
        height = _a.height;

    return scroll === 'x' ? width : height;
  }

  var self = {
    cross: cross,
    measure: measure,
    scroll: scroll
  };
  return self;
}

function map(value, iStart, iStop, oStart, oStop) {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}
function mathSign(n) {
  return !n ? 0 : n / Math.abs(n);
}
function deltaAbs(valueB, valueA) {
  return Math.abs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (Math.abs(valueB) <= Math.abs(valueA)) return 0;
  var diff = deltaAbs(Math.abs(valueB), Math.abs(valueA));
  return Math.abs(diff / valueB);
}
function roundToDecimals(decimalPoints) {
  var pow = Math.pow(10, decimalPoints);
  return function (n) {
    return Math.round(n * pow) / pow;
  };
}
function debounce(callback, time) {
  var timeout = 0;
  return function () {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(callback, time) || 0;
  };
}
function groupArray(array, size) {
  var groups = [];

  for (var i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}
function arrayKeys(array) {
  return Object.keys(array).map(Number);
}
function removeClass(node, className) {
  var cl = node.classList;
  if (className && cl.contains(className)) cl.remove(className);
}
function addClass(node, className) {
  var cl = node.classList;
  if (className && !cl.contains(className)) cl.add(className);
}

function Counter(params) {
  var start = params.start,
      limit = params.limit,
      loop = params.loop;
  var min = limit.min,
      max = limit.max;
  var type = loop ? 'loop' : 'constrain';
  var withinLimit = limit[type];
  var counter = withinLimit(start);

  function get() {
    return counter;
  }

  function set(n) {
    counter = withinLimit(n);
    return self;
  }

  function add(n) {
    if (n !== 0) {
      var sign = mathSign(n);
      set(get() + sign);
      return add(n + sign * -1);
    }

    return self;
  }

  function clone() {
    return Counter({
      start: get(),
      limit: limit,
      loop: loop
    });
  }

  var self = {
    add: add,
    clone: clone,
    get: get,
    max: max,
    min: min,
    set: set
  };
  return self;
}

function Direction(direction) {
  var sign = direction === 'rtl' ? -1 : 1;

  function applyTo(n) {
    return n * sign;
  }

  var self = {
    applyTo: applyTo
  };
  return self;
}

function EventStore() {
  var listeners = [];

  function add(node, type, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(type, handler, options);
    listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    listeners = listeners.filter(function (remove) {
      return remove();
    });
    return self;
  }

  var self = {
    add: add,
    removeAll: removeAll
  };
  return self;
}

function Vector1D(value) {
  var vector = value;

  function get() {
    return vector;
  }

  function set(n) {
    vector = readNumber(n);
    return self;
  }

  function add(n) {
    vector += readNumber(n);
    return self;
  }

  function subtract(n) {
    vector -= readNumber(n);
    return self;
  }

  function multiply(n) {
    vector *= n;
    return self;
  }

  function divide(n) {
    vector /= n;
    return self;
  }

  function normalize() {
    if (vector !== 0) divide(vector);
    return self;
  }

  function readNumber(n) {
    return typeof n === 'number' ? n : n.get();
  }

  var self = {
    add: add,
    divide: divide,
    get: get,
    multiply: multiply,
    normalize: normalize,
    set: set,
    subtract: subtract
  };
  return self;
}

function DragHandler(params) {
  var target = params.target,
      scrollBody = params.scrollBody,
      dragFree = params.dragFree,
      animation = params.animation,
      axis = params.axis,
      scrollTo = params.scrollTo;
  var root = params.root,
      dragTracker = params.dragTracker,
      location = params.location,
      events = params.events,
      limit = params.limit,
      direction = params.direction;
  var scrollAxis = axis.scroll,
      crossAxis = axis.cross;
  var focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  var startScroll = Vector1D(0);
  var startCross = Vector1D(0);
  var dragStartPoint = Vector1D(0);
  var activationEvents = EventStore();
  var interactionEvents = EventStore();
  var snapForceBoost = {
    mouse: 2.5,
    touch: 3.5
  };
  var freeForceBoost = {
    mouse: 5,
    touch: 7
  };
  var baseSpeed = dragFree ? 5 : 12;
  var dragThreshold = 4;
  var pointerIsDown = false;
  var preventScroll = false;
  var preventClick = false;
  var isMouse = false;

  function addActivationEvents() {
    var node = root;
    activationEvents.add(node, 'touchmove', function () {
      return undefined;
    }).add(node, 'touchend', function () {
      return undefined;
    }).add(node, 'touchstart', down).add(node, 'mousedown', down).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click);
  }

  function addInteractionEvents() {
    var node = !isMouse ? root : document;
    interactionEvents.add(node, 'touchmove', move).add(node, 'touchend', up).add(node, 'mousemove', move).add(node, 'mouseup', up);
  }

  function removeAllEvents() {
    activationEvents.removeAll();
    interactionEvents.removeAll();
  }

  function isFocusNode(node) {
    var name = node.nodeName || '';
    return focusNodes.indexOf(name) > -1;
  }

  function forceBoost() {
    var boost = dragFree ? freeForceBoost : snapForceBoost;
    var type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }

  function allowedForce(force) {
    var scrollTarget = params.scrollTarget,
        index = params.index;
    var currentLocation = scrollTarget.byDistance(0, false);
    var targetChanged = currentLocation.index !== index.get();
    var seekNext = !targetChanged && Math.abs(force) > dragThreshold;
    var destination = force + location.get();

    if (seekNext && !dragFree && !limit.reachedAny(destination)) {
      var next = index.clone().add(mathSign(force) * -1);
      return scrollTarget.byIndex(next.get(), 0).distance;
    }

    return scrollTarget.byDistance(force, !dragFree).distance;
  }

  function down(evt) {
    isMouse = evt.type === 'mousedown';
    if (isMouse && evt.button !== 0) return;
    var isMoving = deltaAbs(target.get(), location.get()) >= 2;
    var clearPreventClick = isMouse || !isMoving;
    var isNotFocusNode = !isFocusNode(evt.target);
    var preventDefault = isMoving || isMouse && isNotFocusNode;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    dragStartPoint.set(target);
    target.set(location);
    scrollBody.useBaseMass().useSpeed(80);
    addInteractionEvents();
    startScroll.set(dragTracker.readPoint(evt, scrollAxis));
    startCross.set(dragTracker.readPoint(evt, crossAxis));
    events.emit('pointerDown');
    if (clearPreventClick) preventClick = false;
    if (preventDefault) evt.preventDefault();
  }

  function move(evt) {
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up();
      var moveScroll = dragTracker.readPoint(evt, scrollAxis).get();
      var moveCross = dragTracker.readPoint(evt, crossAxis).get();
      var diffScroll = deltaAbs(moveScroll, startScroll.get());
      var diffCross = deltaAbs(moveCross, startCross.get());
      preventScroll = diffScroll > diffCross;
      if (!preventScroll && !preventClick) return up();
    }

    var diff = dragTracker.pointerMove(evt);
    if (!preventClick && diff) preventClick = true;
    animation.start();
    target.add(direction.applyTo(diff));
    evt.preventDefault();
  }

  function up() {
    var rawForce = dragTracker.pointerUp() * forceBoost();
    var force = allowedForce(direction.applyTo(rawForce));
    var speedFactor = factorAbs(rawForce, force);
    var isMoving = deltaAbs(target.get(), dragStartPoint.get()) >= 0.5;
    if (isMoving && !isMouse) preventClick = true;
    preventScroll = false;
    pointerIsDown = false;
    interactionEvents.removeAll();
    scrollBody.useSpeed(baseSpeed + baseSpeed * speedFactor);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    events.emit('pointerUp');
  }

  function click(evt) {
    if (preventClick) evt.preventDefault();
  }

  function clickAllowed() {
    return !preventClick;
  }

  function pointerDown() {
    return pointerIsDown;
  }

  var self = {
    addActivationEvents: addActivationEvents,
    clickAllowed: clickAllowed,
    pointerDown: pointerDown,
    removeAllEvents: removeAllEvents
  };
  return self;
}

function DragTracker(params) {
  var axis = params.axis,
      pxToPercent = params.pxToPercent;
  var scrollAxis = axis.scroll;
  var coords = {
    x: 'clientX',
    y: 'clientY'
  };
  var startDrag = Vector1D(0);
  var diffDrag = Vector1D(0);
  var lastDrag = Vector1D(0);
  var pointValue = Vector1D(0);
  var trackInterval = 10;
  var trackLength = 5;
  var trackTime = 100;
  var trackPoints = [];
  var lastMoveTime = new Date().getTime();
  var isMouse = false;

  function readPoint(evt, type) {
    isMouse = !evt.touches;
    var c = coords[type];
    var value = isMouse ? evt[c] : evt.touches[0][c];
    return pointValue.set(value);
  }

  function pointerDown(evt) {
    var point = readPoint(evt, scrollAxis);
    startDrag.set(point);
    lastDrag.set(point);
    return pxToPercent.measure(startDrag.get());
  }

  function pointerMove(evt) {
    var point = readPoint(evt, scrollAxis);
    var nowTime = new Date().getTime();
    var diffTime = nowTime - lastMoveTime;

    if (diffTime >= trackInterval) {
      if (diffTime >= trackTime) trackPoints = [];
      trackPoints.push(point.get());
      lastMoveTime = nowTime;
    }

    diffDrag.set(point).subtract(lastDrag);
    lastDrag.set(point);
    return pxToPercent.measure(diffDrag.get());
  }

  function pointerUp() {
    var nowTime = new Date().getTime();
    var diffTime = nowTime - lastMoveTime;
    var currentPoint = lastDrag.get();
    var force = trackPoints.slice(-trackLength).map(function (trackPoint) {
      return currentPoint - trackPoint;
    }).sort(function (p1, p2) {
      return Math.abs(p1) < Math.abs(p2) ? 1 : -1;
    })[0];
    lastDrag.set(diffTime > trackTime || !force ? 0 : force);
    trackPoints = [];
    return pxToPercent.measure(lastDrag.get());
  }

  var self = {
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    readPoint: readPoint
  };
  return self;
}

function Limit(params) {
  var min = params.min,
      max = params.max;
  var length = Math.abs(min - max);

  function reachedMin(n) {
    return n < min;
  }

  function reachedMax(n) {
    return n > max;
  }

  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }

  function removeOffset(n) {
    if (min === max) return n;

    while (reachedMin(n)) {
      n += length;
    }

    while (reachedMax(n)) {
      n -= length;
    }

    return n;
  }

  function loop(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? max : min;
  }

  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }

  var self = {
    constrain: constrain,
    length: length,
    loop: loop,
    max: max,
    min: min,
    reachedAny: reachedAny,
    reachedMax: reachedMax,
    reachedMin: reachedMin,
    removeOffset: removeOffset
  };
  return self;
}

function PxToPercent(viewInPx) {
  var totalPercent = 100;

  function measure(n) {
    return n / viewInPx * totalPercent;
  }

  var self = {
    measure: measure,
    totalPercent: totalPercent
  };
  return self;
}

function ScrollBody(params) {
  var location = params.location,
      baseSpeed = params.speed,
      baseMass = params.mass;
  var roundToTwoDecimals = roundToDecimals(2);
  var velocity = Vector1D(0);
  var acceleration = Vector1D(0);
  var attraction = Vector1D(0);
  var attractionDirection = 0;
  var speed = baseSpeed;
  var mass = baseMass;

  function update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.multiply(0);
  }

  function applyForce(v) {
    v.divide(mass);
    acceleration.add(v);
  }

  function seek(v) {
    attraction.set(v).subtract(location);
    var magnitude = attraction.get();
    var m = map(magnitude, 0, 100, 0, speed);
    attractionDirection = mathSign(attraction.get());
    attraction.normalize().multiply(m).subtract(velocity);
    applyForce(attraction);
    return self;
  }

  function settle(v) {
    var diff = v.get() - location.get();
    var diffRounded = roundToTwoDecimals(diff);
    var hasSettled = !diffRounded;
    if (hasSettled) location.set(v);
    return hasSettled;
  }

  function direction() {
    return attractionDirection;
  }

  function useSpeed(n) {
    speed = n;
    return self;
  }

  function useMass(n) {
    mass = n;
    return self;
  }

  function useBaseSpeed() {
    return useSpeed(baseSpeed);
  }

  function useBaseMass() {
    return useMass(baseMass);
  }

  var self = {
    direction: direction,
    seek: seek,
    settle: settle,
    update: update,
    useBaseMass: useBaseMass,
    useBaseSpeed: useBaseSpeed,
    useMass: useMass,
    useSpeed: useSpeed
  };
  return self;
}

function ScrollBounds(params) {
  var limit = params.limit,
      location = params.location,
      scrollBody = params.scrollBody;
  var pullBackThreshold = 10;
  var disabled = false;

  function shouldConstrain(target) {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location.get())) return false;
    return true;
  }

  function constrain(target, pointerDown) {
    if (!shouldConstrain(target)) return;
    var friction = pointerDown ? 0.7 : 0.4;
    var diffToTarget = target.get() - location.get();
    target.subtract(diffToTarget * friction);

    if (!pointerDown && Math.abs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useSpeed(10).useMass(3);
    }
  }

  function toggleActive(active) {
    disabled = !active;
  }

  var self = {
    constrain: constrain,
    toggleActive: toggleActive
  };
  return self;
}

function ScrollContain(params) {
  var alignment = params.alignment,
      contentSize = params.contentSize,
      viewSize = params.viewSize;
  var scrollBounds = Limit({
    min: -contentSize + viewSize,
    max: 0
  });
  var alignedWithinView = [alignment.measure(contentSize)];
  var contentExceedsView = contentSize > viewSize;

  function findDuplicates(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = scrollSnaps.lastIndexOf(startSnap) + 1;
    var max = scrollSnaps.indexOf(endSnap);
    return Limit({
      min: min,
      max: max
    });
  }

  function measure(scrollSnaps, trim) {
    var containedSnaps = scrollSnaps.map(scrollBounds.constrain);

    var _a = findDuplicates(containedSnaps),
        min = _a.min,
        max = _a.max;

    if (!contentExceedsView) return alignedWithinView;
    if (!trim) return containedSnaps;
    return containedSnaps.slice(min - 1, max + 1);
  }

  var self = {
    measure: measure
  };
  return self;
}

function ScrollLimit(params) {
  var contentSize = params.contentSize,
      loop = params.loop;

  function measure(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = loop ? startSnap - contentSize : endSnap;
    var max = startSnap;
    return Limit({
      min: min,
      max: max
    });
  }

  var self = {
    measure: measure
  };
  return self;
}

function ScrollLooper(params) {
  var contentSize = params.contentSize,
      location = params.location,
      limit = params.limit,
      pxToPercent = params.pxToPercent;
  var min = limit.min + pxToPercent.measure(0.1);
  var max = limit.max + pxToPercent.measure(0.1);

  var _a = Limit({
    min: min,
    max: max
  }),
      reachedMin = _a.reachedMin,
      reachedMax = _a.reachedMax;

  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }

  function loop(vectors, direction) {
    if (!shouldLoop(direction)) return;
    var loopDistance = contentSize * (direction * -1);
    vectors.forEach(function (v) {
      return v.add(loopDistance);
    });
  }

  var self = {
    loop: loop
  };
  return self;
}

function ScrollProgress(params) {
  var _a = params.limit,
      max = _a.max,
      scrollLength = _a.length;

  function get(n) {
    var currentLocation = n - max;
    return currentLocation / -scrollLength;
  }

  var self = {
    get: get
  };
  return self;
}

function ScrollSnap(params) {
  var snapSizes = params.snapSizes,
      alignment = params.alignment,
      loop = params.loop;
  var alignments = snapSizes.map(alignment.measure);
  var distancesBetween = distancesBetweenScrollSnaps();

  function distancesBetweenScrollSnaps() {
    var limit = Limit({
      min: 0,
      max: snapSizes.length - 1
    });
    var counter = Counter({
      limit: limit,
      start: 0,
      loop: loop
    });
    return snapSizes.map(function (size, index) {
      var next = counter.set(index + 1).get();
      return size + alignments[index] - alignments[next];
    });
  }

  function measure(index) {
    var sizes = distancesBetween.slice(0, index);
    return sizes.reduce(function (a, s) {
      return a - s;
    }, alignments[0]);
  }

  var self = {
    measure: measure
  };
  return self;
}

function ScrollTarget(params) {
  var loop = params.loop,
      limit = params.limit,
      scrollSnaps = params.scrollSnaps,
      contentSize = params.contentSize;
  var reachedMax = limit.reachedMax,
      reachedAny = limit.reachedAny,
      removeOffset = limit.removeOffset;

  function minDistance(d1, d2) {
    return Math.abs(d1) < Math.abs(d2) ? d1 : d2;
  }

  function findTargetSnap(target) {
    var distance = removeOffset(target);
    var ascDiffsToSnaps = scrollSnaps.map(function (scrollSnap) {
      return scrollSnap - distance;
    }).map(function (diffToSnap) {
      return shortcut(diffToSnap, 0);
    }).map(function (diff, i) {
      return {
        diff: diff,
        index: i
      };
    }).sort(function (d1, d2) {
      return Math.abs(d1.diff) - Math.abs(d2.diff);
    });
    var index = ascDiffsToSnaps[0].index;
    return {
      index: index,
      distance: distance
    };
  }

  function shortcut(target, direction) {
    var t1 = target;
    var t2 = target + contentSize;
    var t3 = target - contentSize;
    if (!loop) return t1;
    if (!direction) return minDistance(minDistance(t1, t2), t3);
    var shortest = minDistance(t1, direction === 1 ? t2 : t3);
    return Math.abs(shortest) * direction;
  }

  function findTargetIndex(target, index) {
    var reachedBound = !loop && reachedAny(target);
    if (!reachedBound) return index;
    var _a = params.index,
        min = _a.min,
        max = _a.max;
    return reachedMax(target) ? min : max;
  }

  function byIndex(index, direction) {
    var diffToSnap = scrollSnaps[index] - params.target.get();
    var distance = shortcut(diffToSnap, direction);
    return {
      index: index,
      distance: distance
    };
  }

  function byDistance(distance, snap) {
    var target = params.target.get() + distance;
    var targetSnap = findTargetSnap(target);
    var index = findTargetIndex(target, targetSnap.index);
    var reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index: index,
      distance: distance
    };
    var diffToSnap = scrollSnaps[index] - targetSnap.distance;
    var snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index: index,
      distance: snapDistance
    };
  }

  var self = {
    byDistance: byDistance,
    byIndex: byIndex,
    shortcut: shortcut
  };
  return self;
}

function ScrollTo(params) {
  var indexCurrent = params.index,
      scrollTarget = params.scrollTarget,
      animation = params.animation;
  var indexPrevious = params.indexPrevious,
      events = params.events,
      targetDistance = params.target;

  function scrollTo(target) {
    var distanceDiff = target.distance;
    var indexDiff = target.index !== indexCurrent.get();

    if (distanceDiff) {
      animation.start();
      targetDistance.add(distanceDiff);
    }

    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      events.emit('select');
    }
  }

  function distance(n, snap) {
    var target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }

  function index(n, direction) {
    var targetIndex = indexCurrent.clone().set(n);
    var target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }

  var self = {
    distance: distance,
    index: index
  };
  return self;
}

function SlideLooper(params) {
  var axis = params.axis,
      scrollLocation = params.location,
      slidesInView = params.slidesInView,
      direction = params.direction;
  var contentSize = params.contentSize,
      viewSize = params.viewSize,
      slideSizes = params.slideSizes,
      scrollSnaps = params.scrollSnaps;
  var ascItems = arrayKeys(slideSizes);
  var descItems = arrayKeys(slideSizes).reverse();
  var loopPoints = startPoints().concat(endPoints());
  var loopStyle = axis.scroll === 'x' ? 'left' : 'top';

  function removeSlideSizes(indexes, from) {
    return indexes.reduce(function (a, i) {
      return a - slideSizes[i];
    }, from);
  }

  function slidesInGap(indexes, gap) {
    return indexes.reduce(function (a, i) {
      var remainingGap = removeSlideSizes(a, gap);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }

  function findLoopPoints(indexes, edge) {
    var isStartEdge = edge === 'start';
    var offset = isStartEdge ? -contentSize : contentSize;
    var slideBounds = slidesInView.findSlideBounds(offset);
    return indexes.map(function (index) {
      var initial = isStartEdge ? 0 : -contentSize;
      var altered = isStartEdge ? contentSize : 0;
      var bounds = slideBounds.filter(function (b) {
        return b.index === index;
      })[0];
      var point = bounds[isStartEdge ? 'end' : 'start'];

      var getTarget = function getTarget() {
        return scrollLocation.get() > point ? initial : altered;
      };

      return {
        point: point,
        getTarget: getTarget,
        index: index,
        location: -1
      };
    });
  }

  function startPoints() {
    var gap = scrollSnaps[0] - 1;
    var indexes = slidesInGap(descItems, gap);
    return findLoopPoints(indexes, 'end');
  }

  function endPoints() {
    var gap = viewSize - scrollSnaps[0] - 1;
    var indexes = slidesInGap(ascItems, gap);
    return findLoopPoints(indexes, 'start');
  }

  function canLoop() {
    return loopPoints.every(function (_a) {
      var index = _a.index;
      var otherIndexes = ascItems.filter(function (i) {
        return i !== index;
      });
      return removeSlideSizes(otherIndexes, viewSize) <= 0;
    });
  }

  function loop(slides) {
    loopPoints.forEach(function (loopPoint) {
      var getTarget = loopPoint.getTarget,
          location = loopPoint.location,
          index = loopPoint.index;
      var target = getTarget();

      if (target !== location) {
        slides[index].style[loopStyle] = direction.applyTo(target) + "%";
        loopPoint.location = target;
      }
    });
  }

  function clear(slides) {
    loopPoints.forEach(function (_a) {
      var index = _a.index;
      slides[index].style[loopStyle] = '';
    });
  }

  var self = {
    canLoop: canLoop,
    clear: clear,
    loop: loop,
    loopPoints: loopPoints
  };
  return self;
}

function SlideFocus(params) {
  var scrollTo = params.scrollTo,
      slidesToScroll = params.slidesToScroll,
      root = params.root;
  var eventStore = EventStore();
  var removeAllEvents = eventStore.removeAll;
  var lastTabPressTime = 0;

  function registerTabPress(event) {
    if (event.keyCode !== 9) return;
    lastTabPressTime = new Date().getTime();
  }

  function addFocusEvent(slide, index) {
    var focus = function focus() {
      var nowTime = new Date().getTime();
      var diffTime = nowTime - lastTabPressTime;
      if (diffTime > 10) return;
      root.scrollLeft = 0;
      var selectedIndex = Math.floor(index / slidesToScroll);
      scrollTo.index(selectedIndex, 0);
    };

    eventStore.add(slide, 'focus', focus, true);
  }

  function addActivationEvents(slides) {
    eventStore.add(document, 'keydown', registerTabPress, false);
    slides.forEach(addFocusEvent);
  }

  var self = {
    addActivationEvents: addActivationEvents,
    removeAllEvents: removeAllEvents
  };
  return self;
}

function SlidesInView(params) {
  var contentSize = params.contentSize,
      slideSizes = params.slideSizes,
      viewSize = params.viewSize;
  var inViewThreshold = params.inViewThreshold,
      loop = params.loop;
  var threshold = Math.min(Math.max(inViewThreshold, 0.01), 0.99);
  var scrollSnaps = arrayKeys(slideSizes).map(scrollSnap);
  var offsets = loop ? [0, contentSize, -contentSize] : [0];
  var slideBounds = offsets.reduce(function (a, loopOffset) {
    return a.concat(findSlideBounds(loopOffset, threshold));
  }, []);

  function scrollSnap(index) {
    var span = slideSizes.slice(0, index);
    return span.reduce(function (a, s) {
      return a - s;
    }, 0);
  }

  function findSlideBounds(offset, threshold) {
    var thresholds = slideSizes.map(function (s) {
      return s * (threshold || 0);
    });
    return scrollSnaps.map(function (snap, index) {
      return {
        start: snap - slideSizes[index] + thresholds[index] + offset,
        end: snap + viewSize - thresholds[index] + offset,
        index: index
      };
    });
  }

  function check(location) {
    return slideBounds.reduce(function (list, slideBound) {
      var index = slideBound.index,
          start = slideBound.start,
          end = slideBound.end;
      var inList = list.indexOf(index) !== -1;
      var inView = start < location && end > location;
      return !inList && inView ? list.concat([index]) : list;
    }, []);
  }

  var self = {
    check: check,
    findSlideBounds: findSlideBounds
  };
  return self;
}

function Translate(params) {
  var axis = params.axis,
      container = params.container,
      direction = params.direction;
  var containerStyle = container.style;
  var translate = axis.scroll === 'x' ? x : y;
  var roundToTwoDecimals = roundToDecimals(2);
  var disabled = false;
  var location = 0;

  function x(n) {
    return "translate3d(" + n + "%,0px,0px)";
  }

  function y(n) {
    return "translate3d(0px," + n + "%,0px)";
  }

  function to(v) {
    var target = roundToTwoDecimals(v.get());
    if (disabled || location === target) return;
    getComputedStyle(container).transform;
    containerStyle.transform = translate(direction.applyTo(target));
    location = target;
  }

  function toggleActive(active) {
    disabled = !active;
  }

  function clear() {
    containerStyle.transform = '';
    location = 0;
  }

  var self = {
    clear: clear,
    to: to,
    toggleActive: toggleActive
  };
  return self;
}

function Engine(root, container, slides, options, events) {
  // Options
  var align = options.align,
      scrollAxis = options.axis,
      contentDirection = options.direction,
      startIndex = options.startIndex,
      inViewThreshold = options.inViewThreshold,
      loop = options.loop,
      speed = options.speed,
      dragFree = options.dragFree,
      slidesToScroll = options.slidesToScroll,
      containScroll = options.containScroll; // Measurements

  var axis = Axis(scrollAxis);
  var pxToPercent = PxToPercent(axis.measure(container));
  var viewSize = pxToPercent.totalPercent;
  var slideSizes = slides.map(axis.measure).map(pxToPercent.measure);
  var slideIndexes = arrayKeys(slideSizes);
  var groupedSizes = groupArray(slideSizes, slidesToScroll);
  var snapSizes = groupedSizes.map(function (g) {
    return g.reduce(function (a, s) {
      return a + s;
    });
  });
  var contentSize = slideSizes.reduce(function (a, s) {
    return a + s;
  }, 0);
  var alignment = Alignment({
    align: align,
    viewSize: viewSize
  });
  var scrollSnap = ScrollSnap({
    snapSizes: snapSizes,
    alignment: alignment,
    loop: loop
  });
  var defaultSnaps = arrayKeys(snapSizes).map(scrollSnap.measure);
  var contain = ScrollContain({
    alignment: alignment,
    contentSize: contentSize,
    viewSize: viewSize
  });
  var shouldContain = !loop && containScroll !== '';
  var trimSnaps = containScroll === 'trimSnaps';
  var containedSnaps = contain.measure(defaultSnaps, trimSnaps);
  var scrollSnaps = shouldContain ? containedSnaps : defaultSnaps;
  var scrollLimit = ScrollLimit({
    loop: loop,
    contentSize: contentSize
  });
  var limit = scrollLimit.measure(scrollSnaps);
  var direction = Direction(contentDirection); // Index

  var indexMax = Math.max(0, scrollSnaps.length - 1);
  var indexSpan = Limit({
    min: 0,
    max: indexMax
  });
  var index = Counter({
    limit: indexSpan,
    start: startIndex,
    loop: loop
  });
  var indexPrevious = index.clone(); // Draw

  var update = function update() {
    if (!loop) {
      engine.scrollBounds.constrain(target, engine.dragHandler.pointerDown());
    }

    engine.scrollBody.seek(target).update();
    var settled = engine.scrollBody.settle(target);

    if (settled && !engine.dragHandler.pointerDown()) {
      engine.animation.stop();
      events.emit('settle');
    }

    if (!settled) {
      events.emit('scroll');
    }

    if (loop) {
      engine.scrollLooper.loop(loopVectors, engine.scrollBody.direction());
      engine.slideLooper.loop(slides);
    }

    engine.translate.to(location);
    engine.animation.proceed();
  }; // Shared


  var animation = Animation(update);
  var startLocation = scrollSnaps[index.get()];
  var location = Vector1D(startLocation);
  var target = Vector1D(startLocation);
  var loopVectors = [location, target];
  var scrollBody = ScrollBody({
    location: location,
    speed: speed,
    mass: 1
  });
  var scrollTarget = ScrollTarget({
    contentSize: contentSize,
    index: index,
    limit: limit,
    loop: loop,
    scrollSnaps: scrollSnaps,
    target: target
  });
  var scrollTo = ScrollTo({
    animation: animation,
    events: events,
    index: index,
    indexPrevious: indexPrevious,
    scrollTarget: scrollTarget,
    target: target
  });
  var slidesInView = SlidesInView({
    contentSize: contentSize,
    inViewThreshold: inViewThreshold,
    loop: loop,
    slideSizes: slideSizes,
    viewSize: viewSize
  }); // DragHandler

  var dragHandler = DragHandler({
    animation: animation,
    axis: axis,
    direction: direction,
    dragFree: dragFree,
    dragTracker: DragTracker({
      axis: axis,
      pxToPercent: pxToPercent
    }),
    root: root,
    events: events,
    index: index,
    limit: limit,
    location: location,
    scrollBody: scrollBody,
    scrollTo: scrollTo,
    scrollTarget: scrollTarget,
    target: target
  }); // Slider

  var engine = {
    animation: animation,
    axis: axis,
    direction: direction,
    dragHandler: dragHandler,
    pxToPercent: pxToPercent,
    index: index,
    indexPrevious: indexPrevious,
    limit: limit,
    location: location,
    options: options,
    scrollBody: scrollBody,
    scrollBounds: ScrollBounds({
      limit: limit,
      location: location,
      scrollBody: scrollBody
    }),
    scrollLooper: ScrollLooper({
      contentSize: contentSize,
      limit: limit,
      location: location,
      pxToPercent: pxToPercent
    }),
    scrollProgress: ScrollProgress({
      limit: limit
    }),
    scrollSnaps: scrollSnaps,
    scrollTarget: scrollTarget,
    scrollTo: scrollTo,
    slideFocus: SlideFocus({
      root: root,
      scrollTo: scrollTo,
      slidesToScroll: slidesToScroll
    }),
    slideLooper: SlideLooper({
      axis: axis,
      contentSize: contentSize,
      direction: direction,
      location: location,
      scrollSnaps: scrollSnaps,
      slideSizes: slideSizes,
      slidesInView: slidesInView,
      viewSize: viewSize
    }),
    slidesInView: slidesInView,
    slideIndexes: slideIndexes,
    target: target,
    translate: Translate({
      axis: axis,
      container: container,
      direction: direction
    })
  };
  return engine;
}

function EventEmitter() {
  var listeners = {};

  function getListeners(evt) {
    var eventListeners = listeners[evt];
    return eventListeners || [];
  }

  function emit(evt) {
    getListeners(evt).forEach(function (e) {
      return e(evt);
    });
    return self;
  }

  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }

  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter(function (e) {
      return e !== cb;
    });
    return self;
  }

  var self = {
    emit: emit,
    off: off,
    on: on
  };
  return self;
}

var defaultOptions = {
  align: 'center',
  axis: 'x',
  containScroll: '',
  containerSelector: '*',
  direction: 'ltr',
  dragFree: false,
  draggable: true,
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
  inViewThreshold: 0,
  loop: false,
  selectedClass: 'is-selected',
  slidesToScroll: 1,
  speed: 10,
  startIndex: 0
};

function EmblaCarousel(sliderRoot, userOptions) {
  var events = EventEmitter();
  var eventStore = EventStore();
  var debouncedResize = debounce(resize, 500);
  var reInit = reActivate;
  var on = events.on,
      off = events.off;
  var engine;
  var activated = false;

  var options = _extends({}, defaultOptions);

  var rootElementSize = 0;
  var container;
  var slides;
  activate(userOptions);

  function storeElements() {
    if (!sliderRoot) throw new Error('Missing root node 😢');
    var selector = options.containerSelector;
    var sliderContainer = sliderRoot.querySelector(selector);
    if (!sliderContainer) throw new Error('Missing container node 😢');
    container = sliderContainer;
    slides = Array.prototype.slice.call(container.children);
  }

  function activate(partialOptions) {
    storeElements();
    options = _extends(options, partialOptions);
    engine = Engine(sliderRoot, container, slides, options, events);
    rootElementSize = engine.axis.measure(sliderRoot);
    eventStore.add(window, 'resize', debouncedResize);
    engine.translate.to(engine.location);

    if (options.loop) {
      if (!engine.slideLooper.canLoop()) {
        deActivate();
        return activate({
          loop: false
        });
      }

      engine.slideLooper.loop(slides);
    }

    if (options.draggable && slides.length) {
      engine.dragHandler.addActivationEvents();

      if (options.draggableClass) {
        addClass(sliderRoot, options.draggableClass);
      }

      if (options.draggingClass) {
        events.on('pointerDown', toggleDraggingClass).on('pointerUp', toggleDraggingClass);
      }
    }

    if (slides.length) {
      engine.slideFocus.addActivationEvents(slides);
    }

    if (options.selectedClass) {
      toggleSelectedClass();
      events.on('select', toggleSelectedClass).on('pointerUp', toggleSelectedClass);
    }

    if (!activated) {
      setTimeout(function () {
        return events.emit('init');
      }, 0);
      activated = true;
    }
  }

  function toggleDraggingClass(evt) {
    var draggingClass = options.draggingClass;
    if (evt === 'pointerDown') addClass(sliderRoot, draggingClass);else removeClass(sliderRoot, draggingClass);
  }

  function toggleSelectedClass() {
    var selectedClass = options.selectedClass;
    var inView = slidesInView(true);
    var notInView = slidesNotInView(true);
    notInView.forEach(function (i) {
      return removeClass(slides[i], selectedClass);
    });
    inView.forEach(function (i) {
      return addClass(slides[i], selectedClass);
    });
  }

  function deActivate() {
    engine.dragHandler.removeAllEvents();
    engine.slideFocus.removeAllEvents();
    engine.animation.stop();
    eventStore.removeAll();
    engine.translate.clear();
    engine.slideLooper.clear(slides);
    removeClass(sliderRoot, options.draggableClass);
    slides.forEach(function (s) {
      return removeClass(s, options.selectedClass);
    });
    events.off('select', toggleSelectedClass);
    events.off('pointerUp', toggleSelectedClass);
    events.off('pointerDown', toggleDraggingClass);
    events.off('pointerUp', toggleDraggingClass);
  }

  function reActivate(partialOptions) {
    if (!activated) return;
    var startIndex = selectedScrollSnap();

    var newOptions = _extends({
      startIndex: startIndex
    }, partialOptions);

    deActivate();
    activate(newOptions);
    events.emit('reInit');
  }

  function destroy() {
    if (!activated) return;
    deActivate();
    activated = false;
    events.emit('destroy');
  }

  function resize() {
    if (!activated) return;
    var newRootElementSize = engine.axis.measure(sliderRoot);
    if (rootElementSize !== newRootElementSize) reActivate();
    events.emit('resize');
  }

  function slidesInView(target) {
    var location = engine[target ? 'target' : 'location'].get();
    var type = options.loop ? 'removeOffset' : 'constrain';
    return engine.slidesInView.check(engine.limit[type](location));
  }

  function slidesNotInView(target) {
    var inView = slidesInView(target);
    return engine.slideIndexes.filter(function (i) {
      return inView.indexOf(i) === -1;
    });
  }

  function scrollTo(index, direction) {
    engine.scrollBody.useBaseMass().useBaseSpeed();
    if (activated) engine.scrollTo.index(index, direction || 0);
  }

  function scrollNext() {
    var next = engine.index.clone().add(1);
    scrollTo(next.get(), -1);
  }

  function scrollPrev() {
    var prev = engine.index.clone().add(-1);
    scrollTo(prev.get(), 1);
  }

  function canScrollNext() {
    var next = engine.index.clone().add(1);
    return next.get() !== selectedScrollSnap();
  }

  function canScrollPrev() {
    var prev = engine.index.clone().add(-1);
    return prev.get() !== selectedScrollSnap();
  }

  function scrollSnapList() {
    return engine.scrollSnaps.map(engine.scrollProgress.get);
  }

  function scrollProgress() {
    return engine.scrollProgress.get(engine.location.get());
  }

  function selectedScrollSnap() {
    return engine.index.get();
  }

  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }

  function clickAllowed() {
    return engine.dragHandler.clickAllowed();
  }

  function dangerouslyGetEngine() {
    return engine;
  }

  function containerNode() {
    return container;
  }

  function slideNodes() {
    return slides;
  }

  var self = {
    canScrollNext: canScrollNext,
    canScrollPrev: canScrollPrev,
    clickAllowed: clickAllowed,
    containerNode: containerNode,
    dangerouslyGetEngine: dangerouslyGetEngine,
    destroy: destroy,
    off: off,
    on: on,
    previousScrollSnap: previousScrollSnap,
    reInit: reInit,
    scrollNext: scrollNext,
    scrollPrev: scrollPrev,
    scrollProgress: scrollProgress,
    scrollSnapList: scrollSnapList,
    scrollTo: scrollTo,
    selectedScrollSnap: selectedScrollSnap,
    slideNodes: slideNodes,
    slidesInView: slidesInView,
    slidesNotInView: slidesNotInView
  };
  return self;
}

/* harmony default export */ __webpack_exports__["default"] = (EmblaCarousel);
//# sourceMappingURL=embla-carousel.esm.js.map


/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** multi ../src/assets/js/home/_0-menu.js ../src/assets/js/home/_1-slide.js ../src/assets/js/home/_2-carousel.js ../src/assets/js/home/_3-thumb.js ../src/assets/js/sobre/_0-menu.js ../src/assets/js/sobre/_3-thumb.js ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /workspace/lavi/src/assets/js/home/_0-menu.js */"../src/assets/js/home/_0-menu.js");
__webpack_require__(/*! /workspace/lavi/src/assets/js/home/_1-slide.js */"../src/assets/js/home/_1-slide.js");
__webpack_require__(/*! /workspace/lavi/src/assets/js/home/_2-carousel.js */"../src/assets/js/home/_2-carousel.js");
__webpack_require__(/*! /workspace/lavi/src/assets/js/home/_3-thumb.js */"../src/assets/js/home/_3-thumb.js");
__webpack_require__(/*! /workspace/lavi/src/assets/js/sobre/_0-menu.js */"../src/assets/js/sobre/_0-menu.js");
module.exports = __webpack_require__(/*! /workspace/lavi/src/assets/js/sobre/_3-thumb.js */"../src/assets/js/sobre/_3-thumb.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvaG9tZS9fMC1tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL2hvbWUvXzEtc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvaG9tZS9fMi1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9ob21lL18zLXRodW1iLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL3NvYnJlL18wLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvc29icmUvXzMtdGh1bWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VtYmxhLWNhcm91c2VsL2VtYmxhLWNhcm91c2VsLmVzbS5qcyJdLCJuYW1lcyI6WyJ3cmFwTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZpZXdQb3J0TWVudSIsIkJSRUFLUE9JTlQiLCJvcHRpb25zTWVudSIsImRyYWdnYWJsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb250YWluU2Nyb2xsIiwiZW1ibGFNZW51IiwiRW1ibGFDYXJvdXNlbCIsIm9uIiwicmVJbml0Iiwic2V0dXBQcmV2TmV4dEJ0bnMiLCJwcmV2QnRuIiwibmV4dEJ0biIsImVtYmxhU2xpZGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUHJldiIsInNjcm9sbE5leHQiLCJkaXNhYmxlUHJldk5leHRCdG5zIiwiY2FuU2Nyb2xsUHJldiIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNhblNjcm9sbE5leHQiLCJzZXR1cERvdEJ0bnMiLCJkb3RzQXJyYXkiLCJmb3JFYWNoIiwiZG90Tm9kZSIsImkiLCJzY3JvbGxUbyIsImdlbmVyYXRlRG90QnRucyIsImRvdHMiLCJ0ZW1wbGF0ZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic2Nyb2xsU25hcExpc3QiLCJyZWR1Y2UiLCJhY2MiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0RG90QnRuIiwicHJldmlvdXMiLCJwcmV2aW91c1Njcm9sbFNuYXAiLCJzZWxlY3RlZCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIndyYXBTbGlkZSIsInZpZXdQb3J0U2xpZGUiLCJvcHRpb25zU2xpZGUiLCJsb29wIiwic2V0U2VsZWN0ZWREb3RCdG4iLCJkaXNhYmxlUHJldkFuZE5leHRCdG5zIiwic2V0dXBQcmV2TmV4dEJ0bnNTZXJ2aWNlcyIsInNlcnZpY2VzUHJldkJ0biIsInNlcnZpY2VzTmV4dEJ0biIsImVtYmxhU2VydmljZXMiLCJkaXNhYmxlUHJldk5leHRCdG5zU2VydmljZXMiLCJ3cmFwU2VydmljZXMiLCJ2aWV3UG9ydFNlcnZpY2VzIiwib3B0aW9uc1NlcnZpY2VzIiwiYWxpZ24iLCJkaXNhYmxlUHJldkFuZE5leHRCdG5zU2VydmljZXMiLCJvblRodW1iQ2xpY2siLCJtYWluQ2Fyb3VzZWwiLCJ0aHVtYkNhcm91c2VsIiwiaW5kZXgiLCJjbGlja0FsbG93ZWQiLCJmb2xsb3dNYWluQ2Fyb3VzZWwiLCJzZWxlY3RUaHVtYkJ0biIsInNsaWRlTm9kZXMiLCJtYWluQ2Fyb3VzZWxXcmFwIiwibWFpbkNhcm91c2VsVmlldyIsInNlbGVjdGVkQ2xhc3MiLCJ0aHVtYkNhcm91c2VsV3JhcCIsInRodW1iQ2Fyb3VzZWxWaWV3IiwidGh1bWJOb2RlIiwib25DbGljayIsInN5bmNUaHVtYkNhcm91c2VsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsNEVBQWEsRUFBQztBQUM3QiIsImZpbGUiOiJlMDA3MTNlODc1NjFiYjRkNjM2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJy4uLy4uLy4uLy4uL2d1bHAvbm9kZV9tb2R1bGVzL2VtYmxhLWNhcm91c2VsJztcblxuY29uc3Qgd3JhcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbC1tZW51Jyk7XG5jb25zdCB2aWV3UG9ydE1lbnUgPSB3cmFwTWVudS5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xuY29uc3QgQlJFQUtQT0lOVCA9IDc2ODtcbmNvbnN0IG9wdGlvbnNNZW51ID0ge1xuICBkcmFnZ2FibGU6IHdpbmRvdy5pbm5lcldpZHRoIDwgQlJFQUtQT0lOVCxcbiAgY29udGFpblNjcm9sbDogJ3RyaW1TbmFwcycsXG59O1xuY29uc3QgZW1ibGFNZW51ID0gRW1ibGFDYXJvdXNlbCh2aWV3UG9ydE1lbnUsIG9wdGlvbnNNZW51KTtcbmVtYmxhTWVudS5vbigncmVzaXplJywgKCkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IEJSRUFLUE9JTlQ7XG4gIGVtYmxhTWVudS5yZUluaXQoeyBkcmFnZ2FibGUgfSk7XG59KTtcbiIsImltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJy4uLy4uLy4uLy4uL2d1bHAvbm9kZV9tb2R1bGVzL2VtYmxhLWNhcm91c2VsJztcblxuLy8gTmF2XG5jb25zdCBzZXR1cFByZXZOZXh0QnRucyA9IChwcmV2QnRuLCBuZXh0QnRuLCBlbWJsYVNsaWRlKSA9PiB7XG4gIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYVNsaWRlLnNjcm9sbFByZXYsIGZhbHNlKTtcbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhU2xpZGUuc2Nyb2xsTmV4dCwgZmFsc2UpO1xufTtcblxuY29uc3QgZGlzYWJsZVByZXZOZXh0QnRucyA9IChwcmV2QnRuLCBuZXh0QnRuLCBlbWJsYVNsaWRlKSA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKGVtYmxhU2xpZGUuY2FuU2Nyb2xsUHJldigpKSBwcmV2QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBlbHNlIHByZXZCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgaWYgKGVtYmxhU2xpZGUuY2FuU2Nyb2xsTmV4dCgpKSBuZXh0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBlbHNlIG5leHRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICB9O1xufTtcblxuLy9Eb3RcbmNvbnN0IHNldHVwRG90QnRucyA9IChkb3RzQXJyYXksIGVtYmxhU2xpZGUpID0+IHtcbiAgZG90c0FycmF5LmZvckVhY2goKGRvdE5vZGUsIGkpID0+IHtcbiAgICBkb3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZW1ibGFTbGlkZS5zY3JvbGxUbyhpKSwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlRG90QnRucyA9IChkb3RzLCBlbWJsYVNsaWRlKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYmxhLWRvdC10ZW1wbGF0ZScpLmlubmVySFRNTDtcbiAgZG90cy5pbm5lckhUTUwgPSBlbWJsYVNsaWRlXG4gICAgLnNjcm9sbFNuYXBMaXN0KClcbiAgICAucmVkdWNlKChhY2MpID0+IGFjYyArIHRlbXBsYXRlLCAnJyk7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKGRvdHMucXVlcnlTZWxlY3RvckFsbCgnLmwtZW1ibGEtZG90JykpO1xufTtcblxuY29uc3Qgc2VsZWN0RG90QnRuID0gKGRvdHNBcnJheSwgZW1ibGFTbGlkZSkgPT4gKCkgPT4ge1xuICBjb25zdCBwcmV2aW91cyA9IGVtYmxhU2xpZGUucHJldmlvdXNTY3JvbGxTbmFwKCk7XG4gIGNvbnN0IHNlbGVjdGVkID0gZW1ibGFTbGlkZS5zZWxlY3RlZFNjcm9sbFNuYXAoKTtcbiAgZG90c0FycmF5W3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zZWxlY3RlZCcpO1xuICBkb3RzQXJyYXlbc2VsZWN0ZWRdLmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG59O1xuXG4vL1NsaWRlXG5jb25zdCB3cmFwU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbC1zbGlkZScpO1xuY29uc3Qgdmlld1BvcnRTbGlkZSA9IHdyYXBTbGlkZS5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xuY29uc3QgcHJldkJ0biA9IHdyYXBTbGlkZS5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS1idG4tcHJldicpO1xuY29uc3QgbmV4dEJ0biA9IHdyYXBTbGlkZS5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS1idG4tbmV4dCcpO1xuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLWRvdHMnKTtcblxuY29uc3Qgb3B0aW9uc1NsaWRlID0ge1xuICBsb29wOiB0cnVlLFxufTtcbmNvbnN0IGVtYmxhU2xpZGUgPSBFbWJsYUNhcm91c2VsKHZpZXdQb3J0U2xpZGUsIG9wdGlvbnNTbGlkZSk7XG5cbmNvbnN0IGRvdHNBcnJheSA9IGdlbmVyYXRlRG90QnRucyhkb3RzLCBlbWJsYVNsaWRlKTtcbmNvbnN0IHNldFNlbGVjdGVkRG90QnRuID0gc2VsZWN0RG90QnRuKGRvdHNBcnJheSwgZW1ibGFTbGlkZSk7XG5jb25zdCBkaXNhYmxlUHJldkFuZE5leHRCdG5zID0gZGlzYWJsZVByZXZOZXh0QnRucyhcbiAgcHJldkJ0bixcbiAgbmV4dEJ0bixcbiAgZW1ibGFTbGlkZVxuKTtcbnNldHVwUHJldk5leHRCdG5zKHByZXZCdG4sIG5leHRCdG4sIGVtYmxhU2xpZGUpO1xuc2V0dXBEb3RCdG5zKGRvdHNBcnJheSwgZW1ibGFTbGlkZSk7XG5lbWJsYVNsaWRlLm9uKCdzZWxlY3QnLCBzZXRTZWxlY3RlZERvdEJ0bik7XG5lbWJsYVNsaWRlLm9uKCdzZWxlY3QnLCBkaXNhYmxlUHJldkFuZE5leHRCdG5zKTtcbmVtYmxhU2xpZGUub24oJ2luaXQnLCBzZXRTZWxlY3RlZERvdEJ0bik7XG5lbWJsYVNsaWRlLm9uKCdpbml0JywgZGlzYWJsZVByZXZBbmROZXh0QnRucyk7XG4iLCIvLyBpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XG5cbi8vIGNvbnN0IHdyYXBTZXJ2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsLXNlcnZpY2VzJyk7XG4vLyBjb25zdCB2aWV3UG9ydFNlcnZpY2VzID0gd3JhcFNlcnZpY2VzLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLXZpZXdwb3J0Jyk7XG5cbi8vIGNvbnN0IG9wdGlvbnNTZXJ2aWNlcyA9IHtcbi8vICAgbG9vcDogZmFsc2UsXG4vLyAgIGNvbnRhaW5TY3JvbGw6ICd0cmltU25hcHMnLFxuLy8gICBhbGlnbjogJ3N0YXJ0Jyxcbi8vIH07XG4vLyBjb25zdCBlbWJsYVNlcnZpY2VzID0gRW1ibGFDYXJvdXNlbCh2aWV3UG9ydFNlcnZpY2VzLCBvcHRpb25zU2VydmljZXMpO1xuXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XG5cbi8vIE5hdlxuY29uc3Qgc2V0dXBQcmV2TmV4dEJ0bnNTZXJ2aWNlcyA9IChcbiAgc2VydmljZXNQcmV2QnRuLFxuICBzZXJ2aWNlc05leHRCdG4sXG4gIGVtYmxhU2VydmljZXNcbikgPT4ge1xuICBzZXJ2aWNlc1ByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbWJsYVNlcnZpY2VzLnNjcm9sbFByZXYsIGZhbHNlKTtcbiAgc2VydmljZXNOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGFTZXJ2aWNlcy5zY3JvbGxOZXh0LCBmYWxzZSk7XG59O1xuXG5jb25zdCBkaXNhYmxlUHJldk5leHRCdG5zU2VydmljZXMgPSAoXG4gIHNlcnZpY2VzUHJldkJ0bixcbiAgc2VydmljZXNOZXh0QnRuLFxuICBlbWJsYVNlcnZpY2VzXG4pID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoZW1ibGFTZXJ2aWNlcy5jYW5TY3JvbGxQcmV2KCkpXG4gICAgICBzZXJ2aWNlc1ByZXZCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGVsc2Ugc2VydmljZXNQcmV2QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICAgIGlmIChlbWJsYVNlcnZpY2VzLmNhblNjcm9sbE5leHQoKSlcbiAgICAgIHNlcnZpY2VzTmV4dEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgZWxzZSBzZXJ2aWNlc05leHRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICB9O1xufTtcblxuY29uc3Qgd3JhcFNlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2wtc2VydmljZXMnKTtcbmNvbnN0IHZpZXdQb3J0U2VydmljZXMgPSB3cmFwU2VydmljZXMucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtdmlld3BvcnQnKTtcbmNvbnN0IHNlcnZpY2VzUHJldkJ0biA9IHdyYXBTZXJ2aWNlcy5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS1idG4tcHJldicpO1xuY29uc3Qgc2VydmljZXNOZXh0QnRuID0gd3JhcFNlcnZpY2VzLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLWJ0bi1uZXh0Jyk7XG5cbmNvbnN0IG9wdGlvbnNTZXJ2aWNlcyA9IHtcbiAgbG9vcDogZmFsc2UsXG4gIGNvbnRhaW5TY3JvbGw6ICd0cmltU25hcHMnLFxuICBhbGlnbjogJ3N0YXJ0Jyxcbn07XG5jb25zdCBlbWJsYVNlcnZpY2VzID0gRW1ibGFDYXJvdXNlbCh2aWV3UG9ydFNlcnZpY2VzLCBvcHRpb25zU2VydmljZXMpO1xuXG5jb25zdCBkaXNhYmxlUHJldkFuZE5leHRCdG5zU2VydmljZXMgPSBkaXNhYmxlUHJldk5leHRCdG5zU2VydmljZXMoXG4gIHNlcnZpY2VzUHJldkJ0bixcbiAgc2VydmljZXNOZXh0QnRuLFxuICBlbWJsYVNlcnZpY2VzXG4pO1xuc2V0dXBQcmV2TmV4dEJ0bnNTZXJ2aWNlcyhzZXJ2aWNlc1ByZXZCdG4sIHNlcnZpY2VzTmV4dEJ0biwgZW1ibGFTZXJ2aWNlcyk7XG5lbWJsYVNlcnZpY2VzLm9uKCdzZWxlY3QnLCBkaXNhYmxlUHJldkFuZE5leHRCdG5zU2VydmljZXMpO1xuZW1ibGFTZXJ2aWNlcy5vbignaW5pdCcsIGRpc2FibGVQcmV2QW5kTmV4dEJ0bnNTZXJ2aWNlcyk7XG4iLCJpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XG5cbi8vIFRodW1iXG5leHBvcnQgY29uc3Qgb25UaHVtYkNsaWNrID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCwgaW5kZXgpID0+ICgpID0+IHtcbiAgaWYgKCF0aHVtYkNhcm91c2VsLmNsaWNrQWxsb3dlZCgpKSByZXR1cm47XG4gIG1haW5DYXJvdXNlbC5zY3JvbGxUbyhpbmRleCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sbG93TWFpbkNhcm91c2VsID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCkgPT4gKCkgPT4ge1xuICB0aHVtYkNhcm91c2VsLnNjcm9sbFRvKG1haW5DYXJvdXNlbC5zZWxlY3RlZFNjcm9sbFNuYXAoKSk7XG4gIHNlbGVjdFRodW1iQnRuKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCk7XG59O1xuXG5jb25zdCBzZWxlY3RUaHVtYkJ0biA9IChtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwpID0+IHtcbiAgY29uc3QgcHJldmlvdXMgPSBtYWluQ2Fyb3VzZWwucHJldmlvdXNTY3JvbGxTbmFwKCk7XG4gIGNvbnN0IHNlbGVjdGVkID0gbWFpbkNhcm91c2VsLnNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuICB0aHVtYkNhcm91c2VsLnNsaWRlTm9kZXMoKVtwcmV2aW91c10uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKTtcbiAgdGh1bWJDYXJvdXNlbC5zbGlkZU5vZGVzKClbc2VsZWN0ZWRdLmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG59O1xuXG4vLyBFbWJsYVxuY29uc3QgbWFpbkNhcm91c2VsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNhcm91c2VsJyk7XG5jb25zdCBtYWluQ2Fyb3VzZWxWaWV3ID0gbWFpbkNhcm91c2VsV3JhcC5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xuY29uc3QgbWFpbkNhcm91c2VsID0gRW1ibGFDYXJvdXNlbChtYWluQ2Fyb3VzZWxWaWV3LCB7XG4gIHNlbGVjdGVkQ2xhc3M6ICcnLFxuICBsb29wOiBmYWxzZSxcbn0pO1xuXG5jb25zdCB0aHVtYkNhcm91c2VsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHVtYi1jYXJvdXNlbCcpO1xuY29uc3QgdGh1bWJDYXJvdXNlbFZpZXcgPSB0aHVtYkNhcm91c2VsV3JhcC5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xuY29uc3QgdGh1bWJDYXJvdXNlbCA9IEVtYmxhQ2Fyb3VzZWwodGh1bWJDYXJvdXNlbFZpZXcsIHtcbiAgc2VsZWN0ZWRDbGFzczogJycsXG4gIGNvbnRhaW5TY3JvbGw6ICdrZWVwU25hcHMnLFxufSk7XG5cbnRodW1iQ2Fyb3VzZWwuc2xpZGVOb2RlcygpLmZvckVhY2goKHRodW1iTm9kZSwgaW5kZXgpID0+IHtcbiAgY29uc3Qgb25DbGljayA9IG9uVGh1bWJDbGljayhtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwsIGluZGV4KTtcbiAgdGh1bWJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgZmFsc2UpO1xufSk7XG5cbmNvbnN0IHN5bmNUaHVtYkNhcm91c2VsID0gZm9sbG93TWFpbkNhcm91c2VsKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCk7XG5tYWluQ2Fyb3VzZWwub24oJ3NlbGVjdCcsIHN5bmNUaHVtYkNhcm91c2VsKTtcbnRodW1iQ2Fyb3VzZWwub24oJ2luaXQnLCBzeW5jVGh1bWJDYXJvdXNlbCk7XG4iLCJpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XG5cbmNvbnN0IHdyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2wtbWVudScpO1xuY29uc3Qgdmlld1BvcnRNZW51ID0gd3JhcE1lbnUucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtdmlld3BvcnQnKTtcbmNvbnN0IEJSRUFLUE9JTlQgPSA3Njg7XG5jb25zdCBvcHRpb25zTWVudSA9IHtcbiAgZHJhZ2dhYmxlOiB3aW5kb3cuaW5uZXJXaWR0aCA8IEJSRUFLUE9JTlQsXG4gIGNvbnRhaW5TY3JvbGw6ICd0cmltU25hcHMnLFxufTtcbmNvbnN0IGVtYmxhTWVudSA9IEVtYmxhQ2Fyb3VzZWwodmlld1BvcnRNZW51LCBvcHRpb25zTWVudSk7XG5lbWJsYU1lbnUub24oJ3Jlc2l6ZScsICgpID0+IHtcbiAgY29uc3QgZHJhZ2dhYmxlID0gd2luZG93LmlubmVyV2lkdGggPCBCUkVBS1BPSU5UO1xuICBlbWJsYU1lbnUucmVJbml0KHsgZHJhZ2dhYmxlIH0pO1xufSk7XG4iLCJpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XG5cbi8vIFRodW1iXG5leHBvcnQgY29uc3Qgb25UaHVtYkNsaWNrID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCwgaW5kZXgpID0+ICgpID0+IHtcbiAgaWYgKCF0aHVtYkNhcm91c2VsLmNsaWNrQWxsb3dlZCgpKSByZXR1cm47XG4gIG1haW5DYXJvdXNlbC5zY3JvbGxUbyhpbmRleCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9sbG93TWFpbkNhcm91c2VsID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCkgPT4gKCkgPT4ge1xuICB0aHVtYkNhcm91c2VsLnNjcm9sbFRvKG1haW5DYXJvdXNlbC5zZWxlY3RlZFNjcm9sbFNuYXAoKSk7XG4gIHNlbGVjdFRodW1iQnRuKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCk7XG59O1xuXG5jb25zdCBzZWxlY3RUaHVtYkJ0biA9IChtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwpID0+IHtcbiAgY29uc3QgcHJldmlvdXMgPSBtYWluQ2Fyb3VzZWwucHJldmlvdXNTY3JvbGxTbmFwKCk7XG4gIGNvbnN0IHNlbGVjdGVkID0gbWFpbkNhcm91c2VsLnNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuICB0aHVtYkNhcm91c2VsLnNsaWRlTm9kZXMoKVtwcmV2aW91c10uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKTtcbiAgdGh1bWJDYXJvdXNlbC5zbGlkZU5vZGVzKClbc2VsZWN0ZWRdLmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG59O1xuXG4vLyBFbWJsYVxuY29uc3QgbWFpbkNhcm91c2VsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNhcm91c2VsJyk7XG5jb25zdCBtYWluQ2Fyb3VzZWxWaWV3ID0gbWFpbkNhcm91c2VsV3JhcC5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xuY29uc3QgbWFpbkNhcm91c2VsID0gRW1ibGFDYXJvdXNlbChtYWluQ2Fyb3VzZWxWaWV3LCB7XG4gIHNlbGVjdGVkQ2xhc3M6ICcnLFxuICBsb29wOiBmYWxzZSxcbn0pO1xuXG5jb25zdCB0aHVtYkNhcm91c2VsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHVtYi1jYXJvdXNlbCcpO1xuY29uc3QgdGh1bWJDYXJvdXNlbFZpZXcgPSB0aHVtYkNhcm91c2VsV3JhcC5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xuY29uc3QgdGh1bWJDYXJvdXNlbCA9IEVtYmxhQ2Fyb3VzZWwodGh1bWJDYXJvdXNlbFZpZXcsIHtcbiAgc2VsZWN0ZWRDbGFzczogJycsXG4gIGNvbnRhaW5TY3JvbGw6ICdrZWVwU25hcHMnLFxufSk7XG5cbnRodW1iQ2Fyb3VzZWwuc2xpZGVOb2RlcygpLmZvckVhY2goKHRodW1iTm9kZSwgaW5kZXgpID0+IHtcbiAgY29uc3Qgb25DbGljayA9IG9uVGh1bWJDbGljayhtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwsIGluZGV4KTtcbiAgdGh1bWJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgZmFsc2UpO1xufSk7XG5cbmNvbnN0IHN5bmNUaHVtYkNhcm91c2VsID0gZm9sbG93TWFpbkNhcm91c2VsKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCk7XG5tYWluQ2Fyb3VzZWwub24oJ3NlbGVjdCcsIHN5bmNUaHVtYkNhcm91c2VsKTtcbnRodW1iQ2Fyb3VzZWwub24oJ2luaXQnLCBzeW5jVGh1bWJDYXJvdXNlbCk7XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBBbGlnbm1lbnQocGFyYW1zKSB7XG4gIHZhciB2aWV3U2l6ZSA9IHBhcmFtcy52aWV3U2l6ZSxcbiAgICAgIGFsaWduID0gcGFyYW1zLmFsaWduO1xuICB2YXIgcHJlZGVmaW5lZCA9IHtcbiAgICBzdGFydDogc3RhcnQsXG4gICAgY2VudGVyOiBjZW50ZXIsXG4gICAgZW5kOiBlbmRcbiAgfTtcblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbnRlcihuKSB7XG4gICAgcmV0dXJuIGVuZChuKSAvIDI7XG4gIH1cblxuICBmdW5jdGlvbiBlbmQobikge1xuICAgIHJldHVybiB2aWV3U2l6ZSAtIG47XG4gIH1cblxuICBmdW5jdGlvbiBwZXJjZW50KCkge1xuICAgIHJldHVybiB2aWV3U2l6ZSAqIE51bWJlcihhbGlnbik7XG4gIH1cblxuICBmdW5jdGlvbiBtZWFzdXJlKG4pIHtcbiAgICBpZiAodHlwZW9mIGFsaWduID09PSAnbnVtYmVyJykgcmV0dXJuIHBlcmNlbnQoKTtcbiAgICByZXR1cm4gcHJlZGVmaW5lZFthbGlnbl0obik7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgdmFyIGFuaW1hdGlvbkZyYW1lID0gMDtcblxuICBmdW5jdGlvbiBpZkFuaW1hdGluZyhhY3RpdmUsIGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhY3RpdmUgPT09ICEhYW5pbWF0aW9uRnJhbWUpIGNiKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgYW5pbWF0aW9uRnJhbWUgPSAwO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgcHJvY2VlZDogaWZBbmltYXRpbmcodHJ1ZSwgc3RhcnQpLFxuICAgIHN0YXJ0OiBpZkFuaW1hdGluZyhmYWxzZSwgc3RhcnQpLFxuICAgIHN0b3A6IGlmQW5pbWF0aW5nKHRydWUsIHN0b3ApXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBBeGlzKGF4aXMpIHtcbiAgdmFyIHNjcm9sbCA9IGF4aXMgPT09ICd5JyA/ICd5JyA6ICd4JztcbiAgdmFyIGNyb3NzID0gYXhpcyA9PT0gJ3knID8gJ3gnIDogJ3knO1xuXG4gIGZ1bmN0aW9uIG1lYXN1cmUobm9kZSkge1xuICAgIHZhciBfYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX2Eud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9hLmhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGwgPT09ICd4JyA/IHdpZHRoIDogaGVpZ2h0O1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY3Jvc3M6IGNyb3NzLFxuICAgIG1lYXN1cmU6IG1lYXN1cmUsXG4gICAgc2Nyb2xsOiBzY3JvbGxcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIG1hcCh2YWx1ZSwgaVN0YXJ0LCBpU3RvcCwgb1N0YXJ0LCBvU3RvcCkge1xuICByZXR1cm4gb1N0YXJ0ICsgKG9TdG9wIC0gb1N0YXJ0KSAqICgodmFsdWUgLSBpU3RhcnQpIC8gKGlTdG9wIC0gaVN0YXJ0KSk7XG59XG5mdW5jdGlvbiBtYXRoU2lnbihuKSB7XG4gIHJldHVybiAhbiA/IDAgOiBuIC8gTWF0aC5hYnMobik7XG59XG5mdW5jdGlvbiBkZWx0YUFicyh2YWx1ZUIsIHZhbHVlQSkge1xuICByZXR1cm4gTWF0aC5hYnModmFsdWVCIC0gdmFsdWVBKTtcbn1cbmZ1bmN0aW9uIGZhY3RvckFicyh2YWx1ZUIsIHZhbHVlQSkge1xuICBpZiAodmFsdWVCID09PSAwIHx8IHZhbHVlQSA9PT0gMCkgcmV0dXJuIDA7XG4gIGlmIChNYXRoLmFicyh2YWx1ZUIpIDw9IE1hdGguYWJzKHZhbHVlQSkpIHJldHVybiAwO1xuICB2YXIgZGlmZiA9IGRlbHRhQWJzKE1hdGguYWJzKHZhbHVlQiksIE1hdGguYWJzKHZhbHVlQSkpO1xuICByZXR1cm4gTWF0aC5hYnMoZGlmZiAvIHZhbHVlQik7XG59XG5mdW5jdGlvbiByb3VuZFRvRGVjaW1hbHMoZGVjaW1hbFBvaW50cykge1xuICB2YXIgcG93ID0gTWF0aC5wb3coMTAsIGRlY2ltYWxQb2ludHMpO1xuICByZXR1cm4gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuICogcG93KSAvIHBvdztcbiAgfTtcbn1cbmZ1bmN0aW9uIGRlYm91bmNlKGNhbGxiYWNrLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGltZSkgfHwgMDtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdyb3VwQXJyYXkoYXJyYXksIHNpemUpIHtcbiAgdmFyIGdyb3VwcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICBncm91cHMucHVzaChhcnJheS5zbGljZShpLCBpICsgc2l6ZSkpO1xuICB9XG5cbiAgcmV0dXJuIGdyb3Vwcztcbn1cbmZ1bmN0aW9uIGFycmF5S2V5cyhhcnJheSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXJyYXkpLm1hcChOdW1iZXIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBjbCA9IG5vZGUuY2xhc3NMaXN0O1xuICBpZiAoY2xhc3NOYW1lICYmIGNsLmNvbnRhaW5zKGNsYXNzTmFtZSkpIGNsLnJlbW92ZShjbGFzc05hbWUpO1xufVxuZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBjbCA9IG5vZGUuY2xhc3NMaXN0O1xuICBpZiAoY2xhc3NOYW1lICYmICFjbC5jb250YWlucyhjbGFzc05hbWUpKSBjbC5hZGQoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gQ291bnRlcihwYXJhbXMpIHtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0LFxuICAgICAgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBsb29wID0gcGFyYW1zLmxvb3A7XG4gIHZhciBtaW4gPSBsaW1pdC5taW4sXG4gICAgICBtYXggPSBsaW1pdC5tYXg7XG4gIHZhciB0eXBlID0gbG9vcCA/ICdsb29wJyA6ICdjb25zdHJhaW4nO1xuICB2YXIgd2l0aGluTGltaXQgPSBsaW1pdFt0eXBlXTtcbiAgdmFyIGNvdW50ZXIgPSB3aXRoaW5MaW1pdChzdGFydCk7XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG4pIHtcbiAgICBjb3VudGVyID0gd2l0aGluTGltaXQobik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQobikge1xuICAgIGlmIChuICE9PSAwKSB7XG4gICAgICB2YXIgc2lnbiA9IG1hdGhTaWduKG4pO1xuICAgICAgc2V0KGdldCgpICsgc2lnbik7XG4gICAgICByZXR1cm4gYWRkKG4gKyBzaWduICogLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuIENvdW50ZXIoe1xuICAgICAgc3RhcnQ6IGdldCgpLFxuICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgbG9vcDogbG9vcFxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYWRkOiBhZGQsXG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGdldDogZ2V0LFxuICAgIG1heDogbWF4LFxuICAgIG1pbjogbWluLFxuICAgIHNldDogc2V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHZhciBzaWduID0gZGlyZWN0aW9uID09PSAncnRsJyA/IC0xIDogMTtcblxuICBmdW5jdGlvbiBhcHBseVRvKG4pIHtcbiAgICByZXR1cm4gbiAqIHNpZ247XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhcHBseVRvOiBhcHBseVRvXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBFdmVudFN0b3JlKCkge1xuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkKG5vZGUsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAocmVtb3ZlKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGQ6IGFkZCxcbiAgICByZW1vdmVBbGw6IHJlbW92ZUFsbFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gVmVjdG9yMUQodmFsdWUpIHtcbiAgdmFyIHZlY3RvciA9IHZhbHVlO1xuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG4pIHtcbiAgICB2ZWN0b3IgPSByZWFkTnVtYmVyKG4pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKG4pIHtcbiAgICB2ZWN0b3IgKz0gcmVhZE51bWJlcihuKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnRyYWN0KG4pIHtcbiAgICB2ZWN0b3IgLT0gcmVhZE51bWJlcihuKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG11bHRpcGx5KG4pIHtcbiAgICB2ZWN0b3IgKj0gbjtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpdmlkZShuKSB7XG4gICAgdmVjdG9yIC89IG47XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUoKSB7XG4gICAgaWYgKHZlY3RvciAhPT0gMCkgZGl2aWRlKHZlY3Rvcik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkTnVtYmVyKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IG4uZ2V0KCk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGQ6IGFkZCxcbiAgICBkaXZpZGU6IGRpdmlkZSxcbiAgICBnZXQ6IGdldCxcbiAgICBtdWx0aXBseTogbXVsdGlwbHksXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgc2V0OiBzZXQsXG4gICAgc3VidHJhY3Q6IHN1YnRyYWN0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBEcmFnSGFuZGxlcihwYXJhbXMpIHtcbiAgdmFyIHRhcmdldCA9IHBhcmFtcy50YXJnZXQsXG4gICAgICBzY3JvbGxCb2R5ID0gcGFyYW1zLnNjcm9sbEJvZHksXG4gICAgICBkcmFnRnJlZSA9IHBhcmFtcy5kcmFnRnJlZSxcbiAgICAgIGFuaW1hdGlvbiA9IHBhcmFtcy5hbmltYXRpb24sXG4gICAgICBheGlzID0gcGFyYW1zLmF4aXMsXG4gICAgICBzY3JvbGxUbyA9IHBhcmFtcy5zY3JvbGxUbztcbiAgdmFyIHJvb3QgPSBwYXJhbXMucm9vdCxcbiAgICAgIGRyYWdUcmFja2VyID0gcGFyYW1zLmRyYWdUcmFja2VyLFxuICAgICAgbG9jYXRpb24gPSBwYXJhbXMubG9jYXRpb24sXG4gICAgICBldmVudHMgPSBwYXJhbXMuZXZlbnRzLFxuICAgICAgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xuICB2YXIgc2Nyb2xsQXhpcyA9IGF4aXMuc2Nyb2xsLFxuICAgICAgY3Jvc3NBeGlzID0gYXhpcy5jcm9zcztcbiAgdmFyIGZvY3VzTm9kZXMgPSBbJ0lOUFVUJywgJ1NFTEVDVCcsICdURVhUQVJFQSddO1xuICB2YXIgc3RhcnRTY3JvbGwgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIHN0YXJ0Q3Jvc3MgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGRyYWdTdGFydFBvaW50ID0gVmVjdG9yMUQoMCk7XG4gIHZhciBhY3RpdmF0aW9uRXZlbnRzID0gRXZlbnRTdG9yZSgpO1xuICB2YXIgaW50ZXJhY3Rpb25FdmVudHMgPSBFdmVudFN0b3JlKCk7XG4gIHZhciBzbmFwRm9yY2VCb29zdCA9IHtcbiAgICBtb3VzZTogMi41LFxuICAgIHRvdWNoOiAzLjVcbiAgfTtcbiAgdmFyIGZyZWVGb3JjZUJvb3N0ID0ge1xuICAgIG1vdXNlOiA1LFxuICAgIHRvdWNoOiA3XG4gIH07XG4gIHZhciBiYXNlU3BlZWQgPSBkcmFnRnJlZSA/IDUgOiAxMjtcbiAgdmFyIGRyYWdUaHJlc2hvbGQgPSA0O1xuICB2YXIgcG9pbnRlcklzRG93biA9IGZhbHNlO1xuICB2YXIgcHJldmVudFNjcm9sbCA9IGZhbHNlO1xuICB2YXIgcHJldmVudENsaWNrID0gZmFsc2U7XG4gIHZhciBpc01vdXNlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYWRkQWN0aXZhdGlvbkV2ZW50cygpIHtcbiAgICB2YXIgbm9kZSA9IHJvb3Q7XG4gICAgYWN0aXZhdGlvbkV2ZW50cy5hZGQobm9kZSwgJ3RvdWNobW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSkuYWRkKG5vZGUsICd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSkuYWRkKG5vZGUsICd0b3VjaHN0YXJ0JywgZG93bikuYWRkKG5vZGUsICdtb3VzZWRvd24nLCBkb3duKS5hZGQobm9kZSwgJ3RvdWNoY2FuY2VsJywgdXApLmFkZChub2RlLCAnY29udGV4dG1lbnUnLCB1cCkuYWRkKG5vZGUsICdjbGljaycsIGNsaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEludGVyYWN0aW9uRXZlbnRzKCkge1xuICAgIHZhciBub2RlID0gIWlzTW91c2UgPyByb290IDogZG9jdW1lbnQ7XG4gICAgaW50ZXJhY3Rpb25FdmVudHMuYWRkKG5vZGUsICd0b3VjaG1vdmUnLCBtb3ZlKS5hZGQobm9kZSwgJ3RvdWNoZW5kJywgdXApLmFkZChub2RlLCAnbW91c2Vtb3ZlJywgbW92ZSkuYWRkKG5vZGUsICdtb3VzZXVwJywgdXApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsRXZlbnRzKCkge1xuICAgIGFjdGl2YXRpb25FdmVudHMucmVtb3ZlQWxsKCk7XG4gICAgaW50ZXJhY3Rpb25FdmVudHMucmVtb3ZlQWxsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ZvY3VzTm9kZShub2RlKSB7XG4gICAgdmFyIG5hbWUgPSBub2RlLm5vZGVOYW1lIHx8ICcnO1xuICAgIHJldHVybiBmb2N1c05vZGVzLmluZGV4T2YobmFtZSkgPiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmNlQm9vc3QoKSB7XG4gICAgdmFyIGJvb3N0ID0gZHJhZ0ZyZWUgPyBmcmVlRm9yY2VCb29zdCA6IHNuYXBGb3JjZUJvb3N0O1xuICAgIHZhciB0eXBlID0gaXNNb3VzZSA/ICdtb3VzZScgOiAndG91Y2gnO1xuICAgIHJldHVybiBib29zdFt0eXBlXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbG93ZWRGb3JjZShmb3JjZSkge1xuICAgIHZhciBzY3JvbGxUYXJnZXQgPSBwYXJhbXMuc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBpbmRleCA9IHBhcmFtcy5pbmRleDtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0gc2Nyb2xsVGFyZ2V0LmJ5RGlzdGFuY2UoMCwgZmFsc2UpO1xuICAgIHZhciB0YXJnZXRDaGFuZ2VkID0gY3VycmVudExvY2F0aW9uLmluZGV4ICE9PSBpbmRleC5nZXQoKTtcbiAgICB2YXIgc2Vla05leHQgPSAhdGFyZ2V0Q2hhbmdlZCAmJiBNYXRoLmFicyhmb3JjZSkgPiBkcmFnVGhyZXNob2xkO1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IGZvcmNlICsgbG9jYXRpb24uZ2V0KCk7XG5cbiAgICBpZiAoc2Vla05leHQgJiYgIWRyYWdGcmVlICYmICFsaW1pdC5yZWFjaGVkQW55KGRlc3RpbmF0aW9uKSkge1xuICAgICAgdmFyIG5leHQgPSBpbmRleC5jbG9uZSgpLmFkZChtYXRoU2lnbihmb3JjZSkgKiAtMSk7XG4gICAgICByZXR1cm4gc2Nyb2xsVGFyZ2V0LmJ5SW5kZXgobmV4dC5nZXQoKSwgMCkuZGlzdGFuY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcm9sbFRhcmdldC5ieURpc3RhbmNlKGZvcmNlLCAhZHJhZ0ZyZWUpLmRpc3RhbmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bihldnQpIHtcbiAgICBpc01vdXNlID0gZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nO1xuICAgIGlmIChpc01vdXNlICYmIGV2dC5idXR0b24gIT09IDApIHJldHVybjtcbiAgICB2YXIgaXNNb3ZpbmcgPSBkZWx0YUFicyh0YXJnZXQuZ2V0KCksIGxvY2F0aW9uLmdldCgpKSA+PSAyO1xuICAgIHZhciBjbGVhclByZXZlbnRDbGljayA9IGlzTW91c2UgfHwgIWlzTW92aW5nO1xuICAgIHZhciBpc05vdEZvY3VzTm9kZSA9ICFpc0ZvY3VzTm9kZShldnQudGFyZ2V0KTtcbiAgICB2YXIgcHJldmVudERlZmF1bHQgPSBpc01vdmluZyB8fCBpc01vdXNlICYmIGlzTm90Rm9jdXNOb2RlO1xuICAgIHBvaW50ZXJJc0Rvd24gPSB0cnVlO1xuICAgIGRyYWdUcmFja2VyLnBvaW50ZXJEb3duKGV2dCk7XG4gICAgZHJhZ1N0YXJ0UG9pbnQuc2V0KHRhcmdldCk7XG4gICAgdGFyZ2V0LnNldChsb2NhdGlvbik7XG4gICAgc2Nyb2xsQm9keS51c2VCYXNlTWFzcygpLnVzZVNwZWVkKDgwKTtcbiAgICBhZGRJbnRlcmFjdGlvbkV2ZW50cygpO1xuICAgIHN0YXJ0U2Nyb2xsLnNldChkcmFnVHJhY2tlci5yZWFkUG9pbnQoZXZ0LCBzY3JvbGxBeGlzKSk7XG4gICAgc3RhcnRDcm9zcy5zZXQoZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgY3Jvc3NBeGlzKSk7XG4gICAgZXZlbnRzLmVtaXQoJ3BvaW50ZXJEb3duJyk7XG4gICAgaWYgKGNsZWFyUHJldmVudENsaWNrKSBwcmV2ZW50Q2xpY2sgPSBmYWxzZTtcbiAgICBpZiAocHJldmVudERlZmF1bHQpIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShldnQpIHtcbiAgICBpZiAoIXByZXZlbnRTY3JvbGwgJiYgIWlzTW91c2UpIHtcbiAgICAgIGlmICghZXZ0LmNhbmNlbGFibGUpIHJldHVybiB1cCgpO1xuICAgICAgdmFyIG1vdmVTY3JvbGwgPSBkcmFnVHJhY2tlci5yZWFkUG9pbnQoZXZ0LCBzY3JvbGxBeGlzKS5nZXQoKTtcbiAgICAgIHZhciBtb3ZlQ3Jvc3MgPSBkcmFnVHJhY2tlci5yZWFkUG9pbnQoZXZ0LCBjcm9zc0F4aXMpLmdldCgpO1xuICAgICAgdmFyIGRpZmZTY3JvbGwgPSBkZWx0YUFicyhtb3ZlU2Nyb2xsLCBzdGFydFNjcm9sbC5nZXQoKSk7XG4gICAgICB2YXIgZGlmZkNyb3NzID0gZGVsdGFBYnMobW92ZUNyb3NzLCBzdGFydENyb3NzLmdldCgpKTtcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBkaWZmU2Nyb2xsID4gZGlmZkNyb3NzO1xuICAgICAgaWYgKCFwcmV2ZW50U2Nyb2xsICYmICFwcmV2ZW50Q2xpY2spIHJldHVybiB1cCgpO1xuICAgIH1cblxuICAgIHZhciBkaWZmID0gZHJhZ1RyYWNrZXIucG9pbnRlck1vdmUoZXZ0KTtcbiAgICBpZiAoIXByZXZlbnRDbGljayAmJiBkaWZmKSBwcmV2ZW50Q2xpY2sgPSB0cnVlO1xuICAgIGFuaW1hdGlvbi5zdGFydCgpO1xuICAgIHRhcmdldC5hZGQoZGlyZWN0aW9uLmFwcGx5VG8oZGlmZikpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXAoKSB7XG4gICAgdmFyIHJhd0ZvcmNlID0gZHJhZ1RyYWNrZXIucG9pbnRlclVwKCkgKiBmb3JjZUJvb3N0KCk7XG4gICAgdmFyIGZvcmNlID0gYWxsb3dlZEZvcmNlKGRpcmVjdGlvbi5hcHBseVRvKHJhd0ZvcmNlKSk7XG4gICAgdmFyIHNwZWVkRmFjdG9yID0gZmFjdG9yQWJzKHJhd0ZvcmNlLCBmb3JjZSk7XG4gICAgdmFyIGlzTW92aW5nID0gZGVsdGFBYnModGFyZ2V0LmdldCgpLCBkcmFnU3RhcnRQb2ludC5nZXQoKSkgPj0gMC41O1xuICAgIGlmIChpc01vdmluZyAmJiAhaXNNb3VzZSkgcHJldmVudENsaWNrID0gdHJ1ZTtcbiAgICBwcmV2ZW50U2Nyb2xsID0gZmFsc2U7XG4gICAgcG9pbnRlcklzRG93biA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uRXZlbnRzLnJlbW92ZUFsbCgpO1xuICAgIHNjcm9sbEJvZHkudXNlU3BlZWQoYmFzZVNwZWVkICsgYmFzZVNwZWVkICogc3BlZWRGYWN0b3IpO1xuICAgIHNjcm9sbFRvLmRpc3RhbmNlKGZvcmNlLCAhZHJhZ0ZyZWUpO1xuICAgIGlzTW91c2UgPSBmYWxzZTtcbiAgICBldmVudHMuZW1pdCgncG9pbnRlclVwJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGljayhldnQpIHtcbiAgICBpZiAocHJldmVudENsaWNrKSBldnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrQWxsb3dlZCgpIHtcbiAgICByZXR1cm4gIXByZXZlbnRDbGljaztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvaW50ZXJEb3duKCkge1xuICAgIHJldHVybiBwb2ludGVySXNEb3duO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYWRkQWN0aXZhdGlvbkV2ZW50czogYWRkQWN0aXZhdGlvbkV2ZW50cyxcbiAgICBjbGlja0FsbG93ZWQ6IGNsaWNrQWxsb3dlZCxcbiAgICBwb2ludGVyRG93bjogcG9pbnRlckRvd24sXG4gICAgcmVtb3ZlQWxsRXZlbnRzOiByZW1vdmVBbGxFdmVudHNcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIERyYWdUcmFja2VyKHBhcmFtcykge1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzLFxuICAgICAgcHhUb1BlcmNlbnQgPSBwYXJhbXMucHhUb1BlcmNlbnQ7XG4gIHZhciBzY3JvbGxBeGlzID0gYXhpcy5zY3JvbGw7XG4gIHZhciBjb29yZHMgPSB7XG4gICAgeDogJ2NsaWVudFgnLFxuICAgIHk6ICdjbGllbnRZJ1xuICB9O1xuICB2YXIgc3RhcnREcmFnID0gVmVjdG9yMUQoMCk7XG4gIHZhciBkaWZmRHJhZyA9IFZlY3RvcjFEKDApO1xuICB2YXIgbGFzdERyYWcgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIHBvaW50VmFsdWUgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIHRyYWNrSW50ZXJ2YWwgPSAxMDtcbiAgdmFyIHRyYWNrTGVuZ3RoID0gNTtcbiAgdmFyIHRyYWNrVGltZSA9IDEwMDtcbiAgdmFyIHRyYWNrUG9pbnRzID0gW107XG4gIHZhciBsYXN0TW92ZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdmFyIGlzTW91c2UgPSBmYWxzZTtcblxuICBmdW5jdGlvbiByZWFkUG9pbnQoZXZ0LCB0eXBlKSB7XG4gICAgaXNNb3VzZSA9ICFldnQudG91Y2hlcztcbiAgICB2YXIgYyA9IGNvb3Jkc1t0eXBlXTtcbiAgICB2YXIgdmFsdWUgPSBpc01vdXNlID8gZXZ0W2NdIDogZXZ0LnRvdWNoZXNbMF1bY107XG4gICAgcmV0dXJuIHBvaW50VmFsdWUuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvaW50ZXJEb3duKGV2dCkge1xuICAgIHZhciBwb2ludCA9IHJlYWRQb2ludChldnQsIHNjcm9sbEF4aXMpO1xuICAgIHN0YXJ0RHJhZy5zZXQocG9pbnQpO1xuICAgIGxhc3REcmFnLnNldChwb2ludCk7XG4gICAgcmV0dXJuIHB4VG9QZXJjZW50Lm1lYXN1cmUoc3RhcnREcmFnLmdldCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvaW50ZXJNb3ZlKGV2dCkge1xuICAgIHZhciBwb2ludCA9IHJlYWRQb2ludChldnQsIHNjcm9sbEF4aXMpO1xuICAgIHZhciBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIGRpZmZUaW1lID0gbm93VGltZSAtIGxhc3RNb3ZlVGltZTtcblxuICAgIGlmIChkaWZmVGltZSA+PSB0cmFja0ludGVydmFsKSB7XG4gICAgICBpZiAoZGlmZlRpbWUgPj0gdHJhY2tUaW1lKSB0cmFja1BvaW50cyA9IFtdO1xuICAgICAgdHJhY2tQb2ludHMucHVzaChwb2ludC5nZXQoKSk7XG4gICAgICBsYXN0TW92ZVRpbWUgPSBub3dUaW1lO1xuICAgIH1cblxuICAgIGRpZmZEcmFnLnNldChwb2ludCkuc3VidHJhY3QobGFzdERyYWcpO1xuICAgIGxhc3REcmFnLnNldChwb2ludCk7XG4gICAgcmV0dXJuIHB4VG9QZXJjZW50Lm1lYXN1cmUoZGlmZkRyYWcuZ2V0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlclVwKCkge1xuICAgIHZhciBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIGRpZmZUaW1lID0gbm93VGltZSAtIGxhc3RNb3ZlVGltZTtcbiAgICB2YXIgY3VycmVudFBvaW50ID0gbGFzdERyYWcuZ2V0KCk7XG4gICAgdmFyIGZvcmNlID0gdHJhY2tQb2ludHMuc2xpY2UoLXRyYWNrTGVuZ3RoKS5tYXAoZnVuY3Rpb24gKHRyYWNrUG9pbnQpIHtcbiAgICAgIHJldHVybiBjdXJyZW50UG9pbnQgLSB0cmFja1BvaW50O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHAxKSA8IE1hdGguYWJzKHAyKSA/IDEgOiAtMTtcbiAgICB9KVswXTtcbiAgICBsYXN0RHJhZy5zZXQoZGlmZlRpbWUgPiB0cmFja1RpbWUgfHwgIWZvcmNlID8gMCA6IGZvcmNlKTtcbiAgICB0cmFja1BvaW50cyA9IFtdO1xuICAgIHJldHVybiBweFRvUGVyY2VudC5tZWFzdXJlKGxhc3REcmFnLmdldCgpKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIHBvaW50ZXJEb3duOiBwb2ludGVyRG93bixcbiAgICBwb2ludGVyTW92ZTogcG9pbnRlck1vdmUsXG4gICAgcG9pbnRlclVwOiBwb2ludGVyVXAsXG4gICAgcmVhZFBvaW50OiByZWFkUG9pbnRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIExpbWl0KHBhcmFtcykge1xuICB2YXIgbWluID0gcGFyYW1zLm1pbixcbiAgICAgIG1heCA9IHBhcmFtcy5tYXg7XG4gIHZhciBsZW5ndGggPSBNYXRoLmFicyhtaW4gLSBtYXgpO1xuXG4gIGZ1bmN0aW9uIHJlYWNoZWRNaW4obikge1xuICAgIHJldHVybiBuIDwgbWluO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhY2hlZE1heChuKSB7XG4gICAgcmV0dXJuIG4gPiBtYXg7XG4gIH1cblxuICBmdW5jdGlvbiByZWFjaGVkQW55KG4pIHtcbiAgICByZXR1cm4gcmVhY2hlZE1pbihuKSB8fCByZWFjaGVkTWF4KG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlT2Zmc2V0KG4pIHtcbiAgICBpZiAobWluID09PSBtYXgpIHJldHVybiBuO1xuXG4gICAgd2hpbGUgKHJlYWNoZWRNaW4obikpIHtcbiAgICAgIG4gKz0gbGVuZ3RoO1xuICAgIH1cblxuICAgIHdoaWxlIChyZWFjaGVkTWF4KG4pKSB7XG4gICAgICBuIC09IGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3Aobikge1xuICAgIGlmICghcmVhY2hlZEFueShuKSkgcmV0dXJuIG47XG4gICAgcmV0dXJuIHJlYWNoZWRNaW4obikgPyBtYXggOiBtaW47XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJhaW4obikge1xuICAgIGlmICghcmVhY2hlZEFueShuKSkgcmV0dXJuIG47XG4gICAgcmV0dXJuIHJlYWNoZWRNaW4obikgPyBtaW4gOiBtYXg7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjb25zdHJhaW46IGNvbnN0cmFpbixcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBsb29wOiBsb29wLFxuICAgIG1heDogbWF4LFxuICAgIG1pbjogbWluLFxuICAgIHJlYWNoZWRBbnk6IHJlYWNoZWRBbnksXG4gICAgcmVhY2hlZE1heDogcmVhY2hlZE1heCxcbiAgICByZWFjaGVkTWluOiByZWFjaGVkTWluLFxuICAgIHJlbW92ZU9mZnNldDogcmVtb3ZlT2Zmc2V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBQeFRvUGVyY2VudCh2aWV3SW5QeCkge1xuICB2YXIgdG90YWxQZXJjZW50ID0gMTAwO1xuXG4gIGZ1bmN0aW9uIG1lYXN1cmUobikge1xuICAgIHJldHVybiBuIC8gdmlld0luUHggKiB0b3RhbFBlcmNlbnQ7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlLFxuICAgIHRvdGFsUGVyY2VudDogdG90YWxQZXJjZW50XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxCb2R5KHBhcmFtcykge1xuICB2YXIgbG9jYXRpb24gPSBwYXJhbXMubG9jYXRpb24sXG4gICAgICBiYXNlU3BlZWQgPSBwYXJhbXMuc3BlZWQsXG4gICAgICBiYXNlTWFzcyA9IHBhcmFtcy5tYXNzO1xuICB2YXIgcm91bmRUb1R3b0RlY2ltYWxzID0gcm91bmRUb0RlY2ltYWxzKDIpO1xuICB2YXIgdmVsb2NpdHkgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGFjY2VsZXJhdGlvbiA9IFZlY3RvcjFEKDApO1xuICB2YXIgYXR0cmFjdGlvbiA9IFZlY3RvcjFEKDApO1xuICB2YXIgYXR0cmFjdGlvbkRpcmVjdGlvbiA9IDA7XG4gIHZhciBzcGVlZCA9IGJhc2VTcGVlZDtcbiAgdmFyIG1hc3MgPSBiYXNlTWFzcztcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XG4gICAgbG9jYXRpb24uYWRkKHZlbG9jaXR5KTtcbiAgICBhY2NlbGVyYXRpb24ubXVsdGlwbHkoMCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZvcmNlKHYpIHtcbiAgICB2LmRpdmlkZShtYXNzKTtcbiAgICBhY2NlbGVyYXRpb24uYWRkKHYpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vlayh2KSB7XG4gICAgYXR0cmFjdGlvbi5zZXQodikuc3VidHJhY3QobG9jYXRpb24pO1xuICAgIHZhciBtYWduaXR1ZGUgPSBhdHRyYWN0aW9uLmdldCgpO1xuICAgIHZhciBtID0gbWFwKG1hZ25pdHVkZSwgMCwgMTAwLCAwLCBzcGVlZCk7XG4gICAgYXR0cmFjdGlvbkRpcmVjdGlvbiA9IG1hdGhTaWduKGF0dHJhY3Rpb24uZ2V0KCkpO1xuICAgIGF0dHJhY3Rpb24ubm9ybWFsaXplKCkubXVsdGlwbHkobSkuc3VidHJhY3QodmVsb2NpdHkpO1xuICAgIGFwcGx5Rm9yY2UoYXR0cmFjdGlvbik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodikge1xuICAgIHZhciBkaWZmID0gdi5nZXQoKSAtIGxvY2F0aW9uLmdldCgpO1xuICAgIHZhciBkaWZmUm91bmRlZCA9IHJvdW5kVG9Ud29EZWNpbWFscyhkaWZmKTtcbiAgICB2YXIgaGFzU2V0dGxlZCA9ICFkaWZmUm91bmRlZDtcbiAgICBpZiAoaGFzU2V0dGxlZCkgbG9jYXRpb24uc2V0KHYpO1xuICAgIHJldHVybiBoYXNTZXR0bGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBhdHRyYWN0aW9uRGlyZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlU3BlZWQobikge1xuICAgIHNwZWVkID0gbjtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZU1hc3Mobikge1xuICAgIG1hc3MgPSBuO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlQmFzZVNwZWVkKCkge1xuICAgIHJldHVybiB1c2VTcGVlZChiYXNlU3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlQmFzZU1hc3MoKSB7XG4gICAgcmV0dXJuIHVzZU1hc3MoYmFzZU1hc3MpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgc2Vlazogc2VlayxcbiAgICBzZXR0bGU6IHNldHRsZSxcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICB1c2VCYXNlTWFzczogdXNlQmFzZU1hc3MsXG4gICAgdXNlQmFzZVNwZWVkOiB1c2VCYXNlU3BlZWQsXG4gICAgdXNlTWFzczogdXNlTWFzcyxcbiAgICB1c2VTcGVlZDogdXNlU3BlZWRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbEJvdW5kcyhwYXJhbXMpIHtcbiAgdmFyIGxpbWl0ID0gcGFyYW1zLmxpbWl0LFxuICAgICAgbG9jYXRpb24gPSBwYXJhbXMubG9jYXRpb24sXG4gICAgICBzY3JvbGxCb2R5ID0gcGFyYW1zLnNjcm9sbEJvZHk7XG4gIHZhciBwdWxsQmFja1RocmVzaG9sZCA9IDEwO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzaG91bGRDb25zdHJhaW4odGFyZ2V0KSB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFsaW1pdC5yZWFjaGVkQW55KHRhcmdldC5nZXQoKSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWxpbWl0LnJlYWNoZWRBbnkobG9jYXRpb24uZ2V0KCkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJhaW4odGFyZ2V0LCBwb2ludGVyRG93bikge1xuICAgIGlmICghc2hvdWxkQ29uc3RyYWluKHRhcmdldCkpIHJldHVybjtcbiAgICB2YXIgZnJpY3Rpb24gPSBwb2ludGVyRG93biA/IDAuNyA6IDAuNDtcbiAgICB2YXIgZGlmZlRvVGFyZ2V0ID0gdGFyZ2V0LmdldCgpIC0gbG9jYXRpb24uZ2V0KCk7XG4gICAgdGFyZ2V0LnN1YnRyYWN0KGRpZmZUb1RhcmdldCAqIGZyaWN0aW9uKTtcblxuICAgIGlmICghcG9pbnRlckRvd24gJiYgTWF0aC5hYnMoZGlmZlRvVGFyZ2V0KSA8IHB1bGxCYWNrVGhyZXNob2xkKSB7XG4gICAgICB0YXJnZXQuc2V0KGxpbWl0LmNvbnN0cmFpbih0YXJnZXQuZ2V0KCkpKTtcbiAgICAgIHNjcm9sbEJvZHkudXNlU3BlZWQoMTApLnVzZU1hc3MoMyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGFjdGl2ZSkge1xuICAgIGRpc2FibGVkID0gIWFjdGl2ZTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNvbnN0cmFpbjogY29uc3RyYWluLFxuICAgIHRvZ2dsZUFjdGl2ZTogdG9nZ2xlQWN0aXZlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxDb250YWluKHBhcmFtcykge1xuICB2YXIgYWxpZ25tZW50ID0gcGFyYW1zLmFsaWdubWVudCxcbiAgICAgIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgdmlld1NpemUgPSBwYXJhbXMudmlld1NpemU7XG4gIHZhciBzY3JvbGxCb3VuZHMgPSBMaW1pdCh7XG4gICAgbWluOiAtY29udGVudFNpemUgKyB2aWV3U2l6ZSxcbiAgICBtYXg6IDBcbiAgfSk7XG4gIHZhciBhbGlnbmVkV2l0aGluVmlldyA9IFthbGlnbm1lbnQubWVhc3VyZShjb250ZW50U2l6ZSldO1xuICB2YXIgY29udGVudEV4Y2VlZHNWaWV3ID0gY29udGVudFNpemUgPiB2aWV3U2l6ZTtcblxuICBmdW5jdGlvbiBmaW5kRHVwbGljYXRlcyhzY3JvbGxTbmFwcykge1xuICAgIHZhciBzdGFydFNuYXAgPSBzY3JvbGxTbmFwc1swXTtcbiAgICB2YXIgZW5kU25hcCA9IHNjcm9sbFNuYXBzW3Njcm9sbFNuYXBzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBtaW4gPSBzY3JvbGxTbmFwcy5sYXN0SW5kZXhPZihzdGFydFNuYXApICsgMTtcbiAgICB2YXIgbWF4ID0gc2Nyb2xsU25hcHMuaW5kZXhPZihlbmRTbmFwKTtcbiAgICByZXR1cm4gTGltaXQoe1xuICAgICAgbWluOiBtaW4sXG4gICAgICBtYXg6IG1heFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShzY3JvbGxTbmFwcywgdHJpbSkge1xuICAgIHZhciBjb250YWluZWRTbmFwcyA9IHNjcm9sbFNuYXBzLm1hcChzY3JvbGxCb3VuZHMuY29uc3RyYWluKTtcblxuICAgIHZhciBfYSA9IGZpbmREdXBsaWNhdGVzKGNvbnRhaW5lZFNuYXBzKSxcbiAgICAgICAgbWluID0gX2EubWluLFxuICAgICAgICBtYXggPSBfYS5tYXg7XG5cbiAgICBpZiAoIWNvbnRlbnRFeGNlZWRzVmlldykgcmV0dXJuIGFsaWduZWRXaXRoaW5WaWV3O1xuICAgIGlmICghdHJpbSkgcmV0dXJuIGNvbnRhaW5lZFNuYXBzO1xuICAgIHJldHVybiBjb250YWluZWRTbmFwcy5zbGljZShtaW4gLSAxLCBtYXggKyAxKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIG1lYXN1cmU6IG1lYXN1cmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbExpbWl0KHBhcmFtcykge1xuICB2YXIgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemUsXG4gICAgICBsb29wID0gcGFyYW1zLmxvb3A7XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShzY3JvbGxTbmFwcykge1xuICAgIHZhciBzdGFydFNuYXAgPSBzY3JvbGxTbmFwc1swXTtcbiAgICB2YXIgZW5kU25hcCA9IHNjcm9sbFNuYXBzW3Njcm9sbFNuYXBzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBtaW4gPSBsb29wID8gc3RhcnRTbmFwIC0gY29udGVudFNpemUgOiBlbmRTbmFwO1xuICAgIHZhciBtYXggPSBzdGFydFNuYXA7XG4gICAgcmV0dXJuIExpbWl0KHtcbiAgICAgIG1pbjogbWluLFxuICAgICAgbWF4OiBtYXhcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIG1lYXN1cmU6IG1lYXN1cmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbExvb3BlcihwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgbG9jYXRpb24gPSBwYXJhbXMubG9jYXRpb24sXG4gICAgICBsaW1pdCA9IHBhcmFtcy5saW1pdCxcbiAgICAgIHB4VG9QZXJjZW50ID0gcGFyYW1zLnB4VG9QZXJjZW50O1xuICB2YXIgbWluID0gbGltaXQubWluICsgcHhUb1BlcmNlbnQubWVhc3VyZSgwLjEpO1xuICB2YXIgbWF4ID0gbGltaXQubWF4ICsgcHhUb1BlcmNlbnQubWVhc3VyZSgwLjEpO1xuXG4gIHZhciBfYSA9IExpbWl0KHtcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heFxuICB9KSxcbiAgICAgIHJlYWNoZWRNaW4gPSBfYS5yZWFjaGVkTWluLFxuICAgICAgcmVhY2hlZE1heCA9IF9hLnJlYWNoZWRNYXg7XG5cbiAgZnVuY3Rpb24gc2hvdWxkTG9vcChkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSByZXR1cm4gcmVhY2hlZE1heChsb2NhdGlvbi5nZXQoKSk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gLTEpIHJldHVybiByZWFjaGVkTWluKGxvY2F0aW9uLmdldCgpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKHZlY3RvcnMsIGRpcmVjdGlvbikge1xuICAgIGlmICghc2hvdWxkTG9vcChkaXJlY3Rpb24pKSByZXR1cm47XG4gICAgdmFyIGxvb3BEaXN0YW5jZSA9IGNvbnRlbnRTaXplICogKGRpcmVjdGlvbiAqIC0xKTtcbiAgICB2ZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2LmFkZChsb29wRGlzdGFuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbG9vcDogbG9vcFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsUHJvZ3Jlc3MocGFyYW1zKSB7XG4gIHZhciBfYSA9IHBhcmFtcy5saW1pdCxcbiAgICAgIG1heCA9IF9hLm1heCxcbiAgICAgIHNjcm9sbExlbmd0aCA9IF9hLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXQobikge1xuICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBuIC0gbWF4O1xuICAgIHJldHVybiBjdXJyZW50TG9jYXRpb24gLyAtc2Nyb2xsTGVuZ3RoO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgZ2V0OiBnZXRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbFNuYXAocGFyYW1zKSB7XG4gIHZhciBzbmFwU2l6ZXMgPSBwYXJhbXMuc25hcFNpemVzLFxuICAgICAgYWxpZ25tZW50ID0gcGFyYW1zLmFsaWdubWVudCxcbiAgICAgIGxvb3AgPSBwYXJhbXMubG9vcDtcbiAgdmFyIGFsaWdubWVudHMgPSBzbmFwU2l6ZXMubWFwKGFsaWdubWVudC5tZWFzdXJlKTtcbiAgdmFyIGRpc3RhbmNlc0JldHdlZW4gPSBkaXN0YW5jZXNCZXR3ZWVuU2Nyb2xsU25hcHMoKTtcblxuICBmdW5jdGlvbiBkaXN0YW5jZXNCZXR3ZWVuU2Nyb2xsU25hcHMoKSB7XG4gICAgdmFyIGxpbWl0ID0gTGltaXQoe1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiBzbmFwU2l6ZXMubGVuZ3RoIC0gMVxuICAgIH0pO1xuICAgIHZhciBjb3VudGVyID0gQ291bnRlcih7XG4gICAgICBsaW1pdDogbGltaXQsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxvb3A6IGxvb3BcbiAgICB9KTtcbiAgICByZXR1cm4gc25hcFNpemVzLm1hcChmdW5jdGlvbiAoc2l6ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBuZXh0ID0gY291bnRlci5zZXQoaW5kZXggKyAxKS5nZXQoKTtcbiAgICAgIHJldHVybiBzaXplICsgYWxpZ25tZW50c1tpbmRleF0gLSBhbGlnbm1lbnRzW25leHRdO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShpbmRleCkge1xuICAgIHZhciBzaXplcyA9IGRpc3RhbmNlc0JldHdlZW4uc2xpY2UoMCwgaW5kZXgpO1xuICAgIHJldHVybiBzaXplcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIHMpIHtcbiAgICAgIHJldHVybiBhIC0gcztcbiAgICB9LCBhbGlnbm1lbnRzWzBdKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIG1lYXN1cmU6IG1lYXN1cmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbFRhcmdldChwYXJhbXMpIHtcbiAgdmFyIGxvb3AgPSBwYXJhbXMubG9vcCxcbiAgICAgIGxpbWl0ID0gcGFyYW1zLmxpbWl0LFxuICAgICAgc2Nyb2xsU25hcHMgPSBwYXJhbXMuc2Nyb2xsU25hcHMsXG4gICAgICBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZTtcbiAgdmFyIHJlYWNoZWRNYXggPSBsaW1pdC5yZWFjaGVkTWF4LFxuICAgICAgcmVhY2hlZEFueSA9IGxpbWl0LnJlYWNoZWRBbnksXG4gICAgICByZW1vdmVPZmZzZXQgPSBsaW1pdC5yZW1vdmVPZmZzZXQ7XG5cbiAgZnVuY3Rpb24gbWluRGlzdGFuY2UoZDEsIGQyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGQxKSA8IE1hdGguYWJzKGQyKSA/IGQxIDogZDI7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kVGFyZ2V0U25hcCh0YXJnZXQpIHtcbiAgICB2YXIgZGlzdGFuY2UgPSByZW1vdmVPZmZzZXQodGFyZ2V0KTtcbiAgICB2YXIgYXNjRGlmZnNUb1NuYXBzID0gc2Nyb2xsU25hcHMubWFwKGZ1bmN0aW9uIChzY3JvbGxTbmFwKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsU25hcCAtIGRpc3RhbmNlO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoZGlmZlRvU25hcCkge1xuICAgICAgcmV0dXJuIHNob3J0Y3V0KGRpZmZUb1NuYXAsIDApO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoZGlmZiwgaSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlmZjogZGlmZixcbiAgICAgICAgaW5kZXg6IGlcbiAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbiAoZDEsIGQyKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMoZDEuZGlmZikgLSBNYXRoLmFicyhkMi5kaWZmKTtcbiAgICB9KTtcbiAgICB2YXIgaW5kZXggPSBhc2NEaWZmc1RvU25hcHNbMF0uaW5kZXg7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzaG9ydGN1dCh0YXJnZXQsIGRpcmVjdGlvbikge1xuICAgIHZhciB0MSA9IHRhcmdldDtcbiAgICB2YXIgdDIgPSB0YXJnZXQgKyBjb250ZW50U2l6ZTtcbiAgICB2YXIgdDMgPSB0YXJnZXQgLSBjb250ZW50U2l6ZTtcbiAgICBpZiAoIWxvb3ApIHJldHVybiB0MTtcbiAgICBpZiAoIWRpcmVjdGlvbikgcmV0dXJuIG1pbkRpc3RhbmNlKG1pbkRpc3RhbmNlKHQxLCB0MiksIHQzKTtcbiAgICB2YXIgc2hvcnRlc3QgPSBtaW5EaXN0YW5jZSh0MSwgZGlyZWN0aW9uID09PSAxID8gdDIgOiB0Myk7XG4gICAgcmV0dXJuIE1hdGguYWJzKHNob3J0ZXN0KSAqIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRUYXJnZXRJbmRleCh0YXJnZXQsIGluZGV4KSB7XG4gICAgdmFyIHJlYWNoZWRCb3VuZCA9ICFsb29wICYmIHJlYWNoZWRBbnkodGFyZ2V0KTtcbiAgICBpZiAoIXJlYWNoZWRCb3VuZCkgcmV0dXJuIGluZGV4O1xuICAgIHZhciBfYSA9IHBhcmFtcy5pbmRleCxcbiAgICAgICAgbWluID0gX2EubWluLFxuICAgICAgICBtYXggPSBfYS5tYXg7XG4gICAgcmV0dXJuIHJlYWNoZWRNYXgodGFyZ2V0KSA/IG1pbiA6IG1heDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ5SW5kZXgoaW5kZXgsIGRpcmVjdGlvbikge1xuICAgIHZhciBkaWZmVG9TbmFwID0gc2Nyb2xsU25hcHNbaW5kZXhdIC0gcGFyYW1zLnRhcmdldC5nZXQoKTtcbiAgICB2YXIgZGlzdGFuY2UgPSBzaG9ydGN1dChkaWZmVG9TbmFwLCBkaXJlY3Rpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnlEaXN0YW5jZShkaXN0YW5jZSwgc25hcCkge1xuICAgIHZhciB0YXJnZXQgPSBwYXJhbXMudGFyZ2V0LmdldCgpICsgZGlzdGFuY2U7XG4gICAgdmFyIHRhcmdldFNuYXAgPSBmaW5kVGFyZ2V0U25hcCh0YXJnZXQpO1xuICAgIHZhciBpbmRleCA9IGZpbmRUYXJnZXRJbmRleCh0YXJnZXQsIHRhcmdldFNuYXAuaW5kZXgpO1xuICAgIHZhciByZWFjaGVkQm91bmQgPSAhbG9vcCAmJiByZWFjaGVkQW55KHRhcmdldCk7XG4gICAgaWYgKCFzbmFwIHx8IHJlYWNoZWRCb3VuZCkgcmV0dXJuIHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgIH07XG4gICAgdmFyIGRpZmZUb1NuYXAgPSBzY3JvbGxTbmFwc1tpbmRleF0gLSB0YXJnZXRTbmFwLmRpc3RhbmNlO1xuICAgIHZhciBzbmFwRGlzdGFuY2UgPSBkaXN0YW5jZSArIHNob3J0Y3V0KGRpZmZUb1NuYXAsIDApO1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBkaXN0YW5jZTogc25hcERpc3RhbmNlXG4gICAgfTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGJ5RGlzdGFuY2U6IGJ5RGlzdGFuY2UsXG4gICAgYnlJbmRleDogYnlJbmRleCxcbiAgICBzaG9ydGN1dDogc2hvcnRjdXRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbFRvKHBhcmFtcykge1xuICB2YXIgaW5kZXhDdXJyZW50ID0gcGFyYW1zLmluZGV4LFxuICAgICAgc2Nyb2xsVGFyZ2V0ID0gcGFyYW1zLnNjcm9sbFRhcmdldCxcbiAgICAgIGFuaW1hdGlvbiA9IHBhcmFtcy5hbmltYXRpb247XG4gIHZhciBpbmRleFByZXZpb3VzID0gcGFyYW1zLmluZGV4UHJldmlvdXMsXG4gICAgICBldmVudHMgPSBwYXJhbXMuZXZlbnRzLFxuICAgICAgdGFyZ2V0RGlzdGFuY2UgPSBwYXJhbXMudGFyZ2V0O1xuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCkge1xuICAgIHZhciBkaXN0YW5jZURpZmYgPSB0YXJnZXQuZGlzdGFuY2U7XG4gICAgdmFyIGluZGV4RGlmZiA9IHRhcmdldC5pbmRleCAhPT0gaW5kZXhDdXJyZW50LmdldCgpO1xuXG4gICAgaWYgKGRpc3RhbmNlRGlmZikge1xuICAgICAgYW5pbWF0aW9uLnN0YXJ0KCk7XG4gICAgICB0YXJnZXREaXN0YW5jZS5hZGQoZGlzdGFuY2VEaWZmKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXhEaWZmKSB7XG4gICAgICBpbmRleFByZXZpb3VzLnNldChpbmRleEN1cnJlbnQuZ2V0KCkpO1xuICAgICAgaW5kZXhDdXJyZW50LnNldCh0YXJnZXQuaW5kZXgpO1xuICAgICAgZXZlbnRzLmVtaXQoJ3NlbGVjdCcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3RhbmNlKG4sIHNuYXApIHtcbiAgICB2YXIgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0LmJ5RGlzdGFuY2Uobiwgc25hcCk7XG4gICAgc2Nyb2xsVG8odGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZGV4KG4sIGRpcmVjdGlvbikge1xuICAgIHZhciB0YXJnZXRJbmRleCA9IGluZGV4Q3VycmVudC5jbG9uZSgpLnNldChuKTtcbiAgICB2YXIgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0LmJ5SW5kZXgodGFyZ2V0SW5kZXguZ2V0KCksIGRpcmVjdGlvbik7XG4gICAgc2Nyb2xsVG8odGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICBpbmRleDogaW5kZXhcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlTG9vcGVyKHBhcmFtcykge1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzLFxuICAgICAgc2Nyb2xsTG9jYXRpb24gPSBwYXJhbXMubG9jYXRpb24sXG4gICAgICBzbGlkZXNJblZpZXcgPSBwYXJhbXMuc2xpZGVzSW5WaWV3LFxuICAgICAgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgdmFyIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgdmlld1NpemUgPSBwYXJhbXMudmlld1NpemUsXG4gICAgICBzbGlkZVNpemVzID0gcGFyYW1zLnNsaWRlU2l6ZXMsXG4gICAgICBzY3JvbGxTbmFwcyA9IHBhcmFtcy5zY3JvbGxTbmFwcztcbiAgdmFyIGFzY0l0ZW1zID0gYXJyYXlLZXlzKHNsaWRlU2l6ZXMpO1xuICB2YXIgZGVzY0l0ZW1zID0gYXJyYXlLZXlzKHNsaWRlU2l6ZXMpLnJldmVyc2UoKTtcbiAgdmFyIGxvb3BQb2ludHMgPSBzdGFydFBvaW50cygpLmNvbmNhdChlbmRQb2ludHMoKSk7XG4gIHZhciBsb29wU3R5bGUgPSBheGlzLnNjcm9sbCA9PT0gJ3gnID8gJ2xlZnQnIDogJ3RvcCc7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2xpZGVTaXplcyhpbmRleGVzLCBmcm9tKSB7XG4gICAgcmV0dXJuIGluZGV4ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICByZXR1cm4gYSAtIHNsaWRlU2l6ZXNbaV07XG4gICAgfSwgZnJvbSk7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZXNJbkdhcChpbmRleGVzLCBnYXApIHtcbiAgICByZXR1cm4gaW5kZXhlcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgIHZhciByZW1haW5pbmdHYXAgPSByZW1vdmVTbGlkZVNpemVzKGEsIGdhcCk7XG4gICAgICByZXR1cm4gcmVtYWluaW5nR2FwID4gMCA/IGEuY29uY2F0KFtpXSkgOiBhO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRMb29wUG9pbnRzKGluZGV4ZXMsIGVkZ2UpIHtcbiAgICB2YXIgaXNTdGFydEVkZ2UgPSBlZGdlID09PSAnc3RhcnQnO1xuICAgIHZhciBvZmZzZXQgPSBpc1N0YXJ0RWRnZSA/IC1jb250ZW50U2l6ZSA6IGNvbnRlbnRTaXplO1xuICAgIHZhciBzbGlkZUJvdW5kcyA9IHNsaWRlc0luVmlldy5maW5kU2xpZGVCb3VuZHMob2Zmc2V0KTtcbiAgICByZXR1cm4gaW5kZXhlcy5tYXAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICB2YXIgaW5pdGlhbCA9IGlzU3RhcnRFZGdlID8gMCA6IC1jb250ZW50U2l6ZTtcbiAgICAgIHZhciBhbHRlcmVkID0gaXNTdGFydEVkZ2UgPyBjb250ZW50U2l6ZSA6IDA7XG4gICAgICB2YXIgYm91bmRzID0gc2xpZGVCb3VuZHMuZmlsdGVyKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmluZGV4ID09PSBpbmRleDtcbiAgICAgIH0pWzBdO1xuICAgICAgdmFyIHBvaW50ID0gYm91bmRzW2lzU3RhcnRFZGdlID8gJ2VuZCcgOiAnc3RhcnQnXTtcblxuICAgICAgdmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbExvY2F0aW9uLmdldCgpID4gcG9pbnQgPyBpbml0aWFsIDogYWx0ZXJlZDtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgZ2V0VGFyZ2V0OiBnZXRUYXJnZXQsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgbG9jYXRpb246IC0xXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb2ludHMoKSB7XG4gICAgdmFyIGdhcCA9IHNjcm9sbFNuYXBzWzBdIC0gMTtcbiAgICB2YXIgaW5kZXhlcyA9IHNsaWRlc0luR2FwKGRlc2NJdGVtcywgZ2FwKTtcbiAgICByZXR1cm4gZmluZExvb3BQb2ludHMoaW5kZXhlcywgJ2VuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kUG9pbnRzKCkge1xuICAgIHZhciBnYXAgPSB2aWV3U2l6ZSAtIHNjcm9sbFNuYXBzWzBdIC0gMTtcbiAgICB2YXIgaW5kZXhlcyA9IHNsaWRlc0luR2FwKGFzY0l0ZW1zLCBnYXApO1xuICAgIHJldHVybiBmaW5kTG9vcFBvaW50cyhpbmRleGVzLCAnc3RhcnQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkxvb3AoKSB7XG4gICAgcmV0dXJuIGxvb3BQb2ludHMuZXZlcnkoZnVuY3Rpb24gKF9hKSB7XG4gICAgICB2YXIgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgIHZhciBvdGhlckluZGV4ZXMgPSBhc2NJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgIT09IGluZGV4O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVtb3ZlU2xpZGVTaXplcyhvdGhlckluZGV4ZXMsIHZpZXdTaXplKSA8PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcChzbGlkZXMpIHtcbiAgICBsb29wUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGxvb3BQb2ludCkge1xuICAgICAgdmFyIGdldFRhcmdldCA9IGxvb3BQb2ludC5nZXRUYXJnZXQsXG4gICAgICAgICAgbG9jYXRpb24gPSBsb29wUG9pbnQubG9jYXRpb24sXG4gICAgICAgICAgaW5kZXggPSBsb29wUG9pbnQuaW5kZXg7XG4gICAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIGlmICh0YXJnZXQgIT09IGxvY2F0aW9uKSB7XG4gICAgICAgIHNsaWRlc1tpbmRleF0uc3R5bGVbbG9vcFN0eWxlXSA9IGRpcmVjdGlvbi5hcHBseVRvKHRhcmdldCkgKyBcIiVcIjtcbiAgICAgICAgbG9vcFBvaW50LmxvY2F0aW9uID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoc2xpZGVzKSB7XG4gICAgbG9vcFBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN0eWxlW2xvb3BTdHlsZV0gPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNhbkxvb3A6IGNhbkxvb3AsXG4gICAgY2xlYXI6IGNsZWFyLFxuICAgIGxvb3A6IGxvb3AsXG4gICAgbG9vcFBvaW50czogbG9vcFBvaW50c1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2xpZGVGb2N1cyhwYXJhbXMpIHtcbiAgdmFyIHNjcm9sbFRvID0gcGFyYW1zLnNjcm9sbFRvLFxuICAgICAgc2xpZGVzVG9TY3JvbGwgPSBwYXJhbXMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICByb290ID0gcGFyYW1zLnJvb3Q7XG4gIHZhciBldmVudFN0b3JlID0gRXZlbnRTdG9yZSgpO1xuICB2YXIgcmVtb3ZlQWxsRXZlbnRzID0gZXZlbnRTdG9yZS5yZW1vdmVBbGw7XG4gIHZhciBsYXN0VGFiUHJlc3NUaW1lID0gMDtcblxuICBmdW5jdGlvbiByZWdpc3RlclRhYlByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgIT09IDkpIHJldHVybjtcbiAgICBsYXN0VGFiUHJlc3NUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRGb2N1c0V2ZW50KHNsaWRlLCBpbmRleCkge1xuICAgIHZhciBmb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciBkaWZmVGltZSA9IG5vd1RpbWUgLSBsYXN0VGFiUHJlc3NUaW1lO1xuICAgICAgaWYgKGRpZmZUaW1lID4gMTApIHJldHVybjtcbiAgICAgIHJvb3Quc2Nyb2xsTGVmdCA9IDA7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBzbGlkZXNUb1Njcm9sbCk7XG4gICAgICBzY3JvbGxUby5pbmRleChzZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9O1xuXG4gICAgZXZlbnRTdG9yZS5hZGQoc2xpZGUsICdmb2N1cycsIGZvY3VzLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFjdGl2YXRpb25FdmVudHMoc2xpZGVzKSB7XG4gICAgZXZlbnRTdG9yZS5hZGQoZG9jdW1lbnQsICdrZXlkb3duJywgcmVnaXN0ZXJUYWJQcmVzcywgZmFsc2UpO1xuICAgIHNsaWRlcy5mb3JFYWNoKGFkZEZvY3VzRXZlbnQpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYWRkQWN0aXZhdGlvbkV2ZW50czogYWRkQWN0aXZhdGlvbkV2ZW50cyxcbiAgICByZW1vdmVBbGxFdmVudHM6IHJlbW92ZUFsbEV2ZW50c1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2xpZGVzSW5WaWV3KHBhcmFtcykge1xuICB2YXIgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemUsXG4gICAgICBzbGlkZVNpemVzID0gcGFyYW1zLnNsaWRlU2l6ZXMsXG4gICAgICB2aWV3U2l6ZSA9IHBhcmFtcy52aWV3U2l6ZTtcbiAgdmFyIGluVmlld1RocmVzaG9sZCA9IHBhcmFtcy5pblZpZXdUaHJlc2hvbGQsXG4gICAgICBsb29wID0gcGFyYW1zLmxvb3A7XG4gIHZhciB0aHJlc2hvbGQgPSBNYXRoLm1pbihNYXRoLm1heChpblZpZXdUaHJlc2hvbGQsIDAuMDEpLCAwLjk5KTtcbiAgdmFyIHNjcm9sbFNuYXBzID0gYXJyYXlLZXlzKHNsaWRlU2l6ZXMpLm1hcChzY3JvbGxTbmFwKTtcbiAgdmFyIG9mZnNldHMgPSBsb29wID8gWzAsIGNvbnRlbnRTaXplLCAtY29udGVudFNpemVdIDogWzBdO1xuICB2YXIgc2xpZGVCb3VuZHMgPSBvZmZzZXRzLnJlZHVjZShmdW5jdGlvbiAoYSwgbG9vcE9mZnNldCkge1xuICAgIHJldHVybiBhLmNvbmNhdChmaW5kU2xpZGVCb3VuZHMobG9vcE9mZnNldCwgdGhyZXNob2xkKSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBzY3JvbGxTbmFwKGluZGV4KSB7XG4gICAgdmFyIHNwYW4gPSBzbGlkZVNpemVzLnNsaWNlKDAsIGluZGV4KTtcbiAgICByZXR1cm4gc3Bhbi5yZWR1Y2UoZnVuY3Rpb24gKGEsIHMpIHtcbiAgICAgIHJldHVybiBhIC0gcztcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRTbGlkZUJvdW5kcyhvZmZzZXQsIHRocmVzaG9sZCkge1xuICAgIHZhciB0aHJlc2hvbGRzID0gc2xpZGVTaXplcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzICogKHRocmVzaG9sZCB8fCAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2Nyb2xsU25hcHMubWFwKGZ1bmN0aW9uIChzbmFwLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHNuYXAgLSBzbGlkZVNpemVzW2luZGV4XSArIHRocmVzaG9sZHNbaW5kZXhdICsgb2Zmc2V0LFxuICAgICAgICBlbmQ6IHNuYXAgKyB2aWV3U2l6ZSAtIHRocmVzaG9sZHNbaW5kZXhdICsgb2Zmc2V0LFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjayhsb2NhdGlvbikge1xuICAgIHJldHVybiBzbGlkZUJvdW5kcy5yZWR1Y2UoZnVuY3Rpb24gKGxpc3QsIHNsaWRlQm91bmQpIHtcbiAgICAgIHZhciBpbmRleCA9IHNsaWRlQm91bmQuaW5kZXgsXG4gICAgICAgICAgc3RhcnQgPSBzbGlkZUJvdW5kLnN0YXJ0LFxuICAgICAgICAgIGVuZCA9IHNsaWRlQm91bmQuZW5kO1xuICAgICAgdmFyIGluTGlzdCA9IGxpc3QuaW5kZXhPZihpbmRleCkgIT09IC0xO1xuICAgICAgdmFyIGluVmlldyA9IHN0YXJ0IDwgbG9jYXRpb24gJiYgZW5kID4gbG9jYXRpb247XG4gICAgICByZXR1cm4gIWluTGlzdCAmJiBpblZpZXcgPyBsaXN0LmNvbmNhdChbaW5kZXhdKSA6IGxpc3Q7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY2hlY2s6IGNoZWNrLFxuICAgIGZpbmRTbGlkZUJvdW5kczogZmluZFNsaWRlQm91bmRzXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBUcmFuc2xhdGUocGFyYW1zKSB7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXMsXG4gICAgICBjb250YWluZXIgPSBwYXJhbXMuY29udGFpbmVyLFxuICAgICAgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgdmFyIGNvbnRhaW5lclN0eWxlID0gY29udGFpbmVyLnN0eWxlO1xuICB2YXIgdHJhbnNsYXRlID0gYXhpcy5zY3JvbGwgPT09ICd4JyA/IHggOiB5O1xuICB2YXIgcm91bmRUb1R3b0RlY2ltYWxzID0gcm91bmRUb0RlY2ltYWxzKDIpO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIGxvY2F0aW9uID0gMDtcblxuICBmdW5jdGlvbiB4KG4pIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUzZChcIiArIG4gKyBcIiUsMHB4LDBweClcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHkobikge1xuICAgIHJldHVybiBcInRyYW5zbGF0ZTNkKDBweCxcIiArIG4gKyBcIiUsMHB4KVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdG8odikge1xuICAgIHZhciB0YXJnZXQgPSByb3VuZFRvVHdvRGVjaW1hbHModi5nZXQoKSk7XG4gICAgaWYgKGRpc2FibGVkIHx8IGxvY2F0aW9uID09PSB0YXJnZXQpIHJldHVybjtcbiAgICBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikudHJhbnNmb3JtO1xuICAgIGNvbnRhaW5lclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZShkaXJlY3Rpb24uYXBwbHlUbyh0YXJnZXQpKTtcbiAgICBsb2NhdGlvbiA9IHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShhY3RpdmUpIHtcbiAgICBkaXNhYmxlZCA9ICFhY3RpdmU7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBjb250YWluZXJTdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBsb2NhdGlvbiA9IDA7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgdG86IHRvLFxuICAgIHRvZ2dsZUFjdGl2ZTogdG9nZ2xlQWN0aXZlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBFbmdpbmUocm9vdCwgY29udGFpbmVyLCBzbGlkZXMsIG9wdGlvbnMsIGV2ZW50cykge1xuICAvLyBPcHRpb25zXG4gIHZhciBhbGlnbiA9IG9wdGlvbnMuYWxpZ24sXG4gICAgICBzY3JvbGxBeGlzID0gb3B0aW9ucy5heGlzLFxuICAgICAgY29udGVudERpcmVjdGlvbiA9IG9wdGlvbnMuZGlyZWN0aW9uLFxuICAgICAgc3RhcnRJbmRleCA9IG9wdGlvbnMuc3RhcnRJbmRleCxcbiAgICAgIGluVmlld1RocmVzaG9sZCA9IG9wdGlvbnMuaW5WaWV3VGhyZXNob2xkLFxuICAgICAgbG9vcCA9IG9wdGlvbnMubG9vcCxcbiAgICAgIHNwZWVkID0gb3B0aW9ucy5zcGVlZCxcbiAgICAgIGRyYWdGcmVlID0gb3B0aW9ucy5kcmFnRnJlZSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsID0gb3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgIGNvbnRhaW5TY3JvbGwgPSBvcHRpb25zLmNvbnRhaW5TY3JvbGw7IC8vIE1lYXN1cmVtZW50c1xuXG4gIHZhciBheGlzID0gQXhpcyhzY3JvbGxBeGlzKTtcbiAgdmFyIHB4VG9QZXJjZW50ID0gUHhUb1BlcmNlbnQoYXhpcy5tZWFzdXJlKGNvbnRhaW5lcikpO1xuICB2YXIgdmlld1NpemUgPSBweFRvUGVyY2VudC50b3RhbFBlcmNlbnQ7XG4gIHZhciBzbGlkZVNpemVzID0gc2xpZGVzLm1hcChheGlzLm1lYXN1cmUpLm1hcChweFRvUGVyY2VudC5tZWFzdXJlKTtcbiAgdmFyIHNsaWRlSW5kZXhlcyA9IGFycmF5S2V5cyhzbGlkZVNpemVzKTtcbiAgdmFyIGdyb3VwZWRTaXplcyA9IGdyb3VwQXJyYXkoc2xpZGVTaXplcywgc2xpZGVzVG9TY3JvbGwpO1xuICB2YXIgc25hcFNpemVzID0gZ3JvdXBlZFNpemVzLm1hcChmdW5jdGlvbiAoZykge1xuICAgIHJldHVybiBnLnJlZHVjZShmdW5jdGlvbiAoYSwgcykge1xuICAgICAgcmV0dXJuIGEgKyBzO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGNvbnRlbnRTaXplID0gc2xpZGVTaXplcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIHMpIHtcbiAgICByZXR1cm4gYSArIHM7XG4gIH0sIDApO1xuICB2YXIgYWxpZ25tZW50ID0gQWxpZ25tZW50KHtcbiAgICBhbGlnbjogYWxpZ24sXG4gICAgdmlld1NpemU6IHZpZXdTaXplXG4gIH0pO1xuICB2YXIgc2Nyb2xsU25hcCA9IFNjcm9sbFNuYXAoe1xuICAgIHNuYXBTaXplczogc25hcFNpemVzLFxuICAgIGFsaWdubWVudDogYWxpZ25tZW50LFxuICAgIGxvb3A6IGxvb3BcbiAgfSk7XG4gIHZhciBkZWZhdWx0U25hcHMgPSBhcnJheUtleXMoc25hcFNpemVzKS5tYXAoc2Nyb2xsU25hcC5tZWFzdXJlKTtcbiAgdmFyIGNvbnRhaW4gPSBTY3JvbGxDb250YWluKHtcbiAgICBhbGlnbm1lbnQ6IGFsaWdubWVudCxcbiAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgdmlld1NpemU6IHZpZXdTaXplXG4gIH0pO1xuICB2YXIgc2hvdWxkQ29udGFpbiA9ICFsb29wICYmIGNvbnRhaW5TY3JvbGwgIT09ICcnO1xuICB2YXIgdHJpbVNuYXBzID0gY29udGFpblNjcm9sbCA9PT0gJ3RyaW1TbmFwcyc7XG4gIHZhciBjb250YWluZWRTbmFwcyA9IGNvbnRhaW4ubWVhc3VyZShkZWZhdWx0U25hcHMsIHRyaW1TbmFwcyk7XG4gIHZhciBzY3JvbGxTbmFwcyA9IHNob3VsZENvbnRhaW4gPyBjb250YWluZWRTbmFwcyA6IGRlZmF1bHRTbmFwcztcbiAgdmFyIHNjcm9sbExpbWl0ID0gU2Nyb2xsTGltaXQoe1xuICAgIGxvb3A6IGxvb3AsXG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplXG4gIH0pO1xuICB2YXIgbGltaXQgPSBzY3JvbGxMaW1pdC5tZWFzdXJlKHNjcm9sbFNuYXBzKTtcbiAgdmFyIGRpcmVjdGlvbiA9IERpcmVjdGlvbihjb250ZW50RGlyZWN0aW9uKTsgLy8gSW5kZXhcblxuICB2YXIgaW5kZXhNYXggPSBNYXRoLm1heCgwLCBzY3JvbGxTbmFwcy5sZW5ndGggLSAxKTtcbiAgdmFyIGluZGV4U3BhbiA9IExpbWl0KHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiBpbmRleE1heFxuICB9KTtcbiAgdmFyIGluZGV4ID0gQ291bnRlcih7XG4gICAgbGltaXQ6IGluZGV4U3BhbixcbiAgICBzdGFydDogc3RhcnRJbmRleCxcbiAgICBsb29wOiBsb29wXG4gIH0pO1xuICB2YXIgaW5kZXhQcmV2aW91cyA9IGluZGV4LmNsb25lKCk7IC8vIERyYXdcblxuICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghbG9vcCkge1xuICAgICAgZW5naW5lLnNjcm9sbEJvdW5kcy5jb25zdHJhaW4odGFyZ2V0LCBlbmdpbmUuZHJhZ0hhbmRsZXIucG9pbnRlckRvd24oKSk7XG4gICAgfVxuXG4gICAgZW5naW5lLnNjcm9sbEJvZHkuc2Vlayh0YXJnZXQpLnVwZGF0ZSgpO1xuICAgIHZhciBzZXR0bGVkID0gZW5naW5lLnNjcm9sbEJvZHkuc2V0dGxlKHRhcmdldCk7XG5cbiAgICBpZiAoc2V0dGxlZCAmJiAhZW5naW5lLmRyYWdIYW5kbGVyLnBvaW50ZXJEb3duKCkpIHtcbiAgICAgIGVuZ2luZS5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgZXZlbnRzLmVtaXQoJ3NldHRsZScpO1xuICAgIH1cblxuICAgIGlmICghc2V0dGxlZCkge1xuICAgICAgZXZlbnRzLmVtaXQoJ3Njcm9sbCcpO1xuICAgIH1cblxuICAgIGlmIChsb29wKSB7XG4gICAgICBlbmdpbmUuc2Nyb2xsTG9vcGVyLmxvb3AobG9vcFZlY3RvcnMsIGVuZ2luZS5zY3JvbGxCb2R5LmRpcmVjdGlvbigpKTtcbiAgICAgIGVuZ2luZS5zbGlkZUxvb3Blci5sb29wKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgZW5naW5lLnRyYW5zbGF0ZS50byhsb2NhdGlvbik7XG4gICAgZW5naW5lLmFuaW1hdGlvbi5wcm9jZWVkKCk7XG4gIH07IC8vIFNoYXJlZFxuXG5cbiAgdmFyIGFuaW1hdGlvbiA9IEFuaW1hdGlvbih1cGRhdGUpO1xuICB2YXIgc3RhcnRMb2NhdGlvbiA9IHNjcm9sbFNuYXBzW2luZGV4LmdldCgpXTtcbiAgdmFyIGxvY2F0aW9uID0gVmVjdG9yMUQoc3RhcnRMb2NhdGlvbik7XG4gIHZhciB0YXJnZXQgPSBWZWN0b3IxRChzdGFydExvY2F0aW9uKTtcbiAgdmFyIGxvb3BWZWN0b3JzID0gW2xvY2F0aW9uLCB0YXJnZXRdO1xuICB2YXIgc2Nyb2xsQm9keSA9IFNjcm9sbEJvZHkoe1xuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBzcGVlZDogc3BlZWQsXG4gICAgbWFzczogMVxuICB9KTtcbiAgdmFyIHNjcm9sbFRhcmdldCA9IFNjcm9sbFRhcmdldCh7XG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBsaW1pdDogbGltaXQsXG4gICAgbG9vcDogbG9vcCxcbiAgICBzY3JvbGxTbmFwczogc2Nyb2xsU25hcHMsXG4gICAgdGFyZ2V0OiB0YXJnZXRcbiAgfSk7XG4gIHZhciBzY3JvbGxUbyA9IFNjcm9sbFRvKHtcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgaW5kZXhQcmV2aW91czogaW5kZXhQcmV2aW91cyxcbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldCxcbiAgICB0YXJnZXQ6IHRhcmdldFxuICB9KTtcbiAgdmFyIHNsaWRlc0luVmlldyA9IFNsaWRlc0luVmlldyh7XG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgIGluVmlld1RocmVzaG9sZDogaW5WaWV3VGhyZXNob2xkLFxuICAgIGxvb3A6IGxvb3AsXG4gICAgc2xpZGVTaXplczogc2xpZGVTaXplcyxcbiAgICB2aWV3U2l6ZTogdmlld1NpemVcbiAgfSk7IC8vIERyYWdIYW5kbGVyXG5cbiAgdmFyIGRyYWdIYW5kbGVyID0gRHJhZ0hhbmRsZXIoe1xuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIGF4aXM6IGF4aXMsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgZHJhZ0ZyZWU6IGRyYWdGcmVlLFxuICAgIGRyYWdUcmFja2VyOiBEcmFnVHJhY2tlcih7XG4gICAgICBheGlzOiBheGlzLFxuICAgICAgcHhUb1BlcmNlbnQ6IHB4VG9QZXJjZW50XG4gICAgfSksXG4gICAgcm9vdDogcm9vdCxcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgbGltaXQ6IGxpbWl0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBzY3JvbGxCb2R5OiBzY3JvbGxCb2R5LFxuICAgIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldCxcbiAgICB0YXJnZXQ6IHRhcmdldFxuICB9KTsgLy8gU2xpZGVyXG5cbiAgdmFyIGVuZ2luZSA9IHtcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBheGlzOiBheGlzLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGRyYWdIYW5kbGVyOiBkcmFnSGFuZGxlcixcbiAgICBweFRvUGVyY2VudDogcHhUb1BlcmNlbnQsXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGluZGV4UHJldmlvdXM6IGluZGV4UHJldmlvdXMsXG4gICAgbGltaXQ6IGxpbWl0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIHNjcm9sbEJvZHk6IHNjcm9sbEJvZHksXG4gICAgc2Nyb2xsQm91bmRzOiBTY3JvbGxCb3VuZHMoe1xuICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgc2Nyb2xsQm9keTogc2Nyb2xsQm9keVxuICAgIH0pLFxuICAgIHNjcm9sbExvb3BlcjogU2Nyb2xsTG9vcGVyKHtcbiAgICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZSxcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIHB4VG9QZXJjZW50OiBweFRvUGVyY2VudFxuICAgIH0pLFxuICAgIHNjcm9sbFByb2dyZXNzOiBTY3JvbGxQcm9ncmVzcyh7XG4gICAgICBsaW1pdDogbGltaXRcbiAgICB9KSxcbiAgICBzY3JvbGxTbmFwczogc2Nyb2xsU25hcHMsXG4gICAgc2Nyb2xsVGFyZ2V0OiBzY3JvbGxUYXJnZXQsXG4gICAgc2Nyb2xsVG86IHNjcm9sbFRvLFxuICAgIHNsaWRlRm9jdXM6IFNsaWRlRm9jdXMoe1xuICAgICAgcm9vdDogcm9vdCxcbiAgICAgIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNUb1Njcm9sbFxuICAgIH0pLFxuICAgIHNsaWRlTG9vcGVyOiBTbGlkZUxvb3Blcih7XG4gICAgICBheGlzOiBheGlzLFxuICAgICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBzY3JvbGxTbmFwczogc2Nyb2xsU25hcHMsXG4gICAgICBzbGlkZVNpemVzOiBzbGlkZVNpemVzLFxuICAgICAgc2xpZGVzSW5WaWV3OiBzbGlkZXNJblZpZXcsXG4gICAgICB2aWV3U2l6ZTogdmlld1NpemVcbiAgICB9KSxcbiAgICBzbGlkZXNJblZpZXc6IHNsaWRlc0luVmlldyxcbiAgICBzbGlkZUluZGV4ZXM6IHNsaWRlSW5kZXhlcyxcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICB0cmFuc2xhdGU6IFRyYW5zbGF0ZSh7XG4gICAgICBheGlzOiBheGlzLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgIH0pXG4gIH07XG4gIHJldHVybiBlbmdpbmU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdmFyIGxpc3RlbmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldExpc3RlbmVycyhldnQpIHtcbiAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbZXZ0XTtcbiAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcnMgfHwgW107XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2dCkge1xuICAgIGdldExpc3RlbmVycyhldnQpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlKGV2dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBvbihldnQsIGNiKSB7XG4gICAgbGlzdGVuZXJzW2V2dF0gPSBnZXRMaXN0ZW5lcnMoZXZ0KS5jb25jYXQoW2NiXSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoZXZ0LCBjYikge1xuICAgIGxpc3RlbmVyc1tldnRdID0gZ2V0TGlzdGVuZXJzKGV2dCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZSAhPT0gY2I7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBlbWl0OiBlbWl0LFxuICAgIG9mZjogb2ZmLFxuICAgIG9uOiBvblxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBhbGlnbjogJ2NlbnRlcicsXG4gIGF4aXM6ICd4JyxcbiAgY29udGFpblNjcm9sbDogJycsXG4gIGNvbnRhaW5lclNlbGVjdG9yOiAnKicsXG4gIGRpcmVjdGlvbjogJ2x0cicsXG4gIGRyYWdGcmVlOiBmYWxzZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBkcmFnZ2FibGVDbGFzczogJ2lzLWRyYWdnYWJsZScsXG4gIGRyYWdnaW5nQ2xhc3M6ICdpcy1kcmFnZ2luZycsXG4gIGluVmlld1RocmVzaG9sZDogMCxcbiAgbG9vcDogZmFsc2UsXG4gIHNlbGVjdGVkQ2xhc3M6ICdpcy1zZWxlY3RlZCcsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzcGVlZDogMTAsXG4gIHN0YXJ0SW5kZXg6IDBcbn07XG5cbmZ1bmN0aW9uIEVtYmxhQ2Fyb3VzZWwoc2xpZGVyUm9vdCwgdXNlck9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50cyA9IEV2ZW50RW1pdHRlcigpO1xuICB2YXIgZXZlbnRTdG9yZSA9IEV2ZW50U3RvcmUoKTtcbiAgdmFyIGRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKHJlc2l6ZSwgNTAwKTtcbiAgdmFyIHJlSW5pdCA9IHJlQWN0aXZhdGU7XG4gIHZhciBvbiA9IGV2ZW50cy5vbixcbiAgICAgIG9mZiA9IGV2ZW50cy5vZmY7XG4gIHZhciBlbmdpbmU7XG4gIHZhciBhY3RpdmF0ZWQgPSBmYWxzZTtcblxuICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucyk7XG5cbiAgdmFyIHJvb3RFbGVtZW50U2l6ZSA9IDA7XG4gIHZhciBjb250YWluZXI7XG4gIHZhciBzbGlkZXM7XG4gIGFjdGl2YXRlKHVzZXJPcHRpb25zKTtcblxuICBmdW5jdGlvbiBzdG9yZUVsZW1lbnRzKCkge1xuICAgIGlmICghc2xpZGVyUm9vdCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJvb3Qgbm9kZSDwn5iiJyk7XG4gICAgdmFyIHNlbGVjdG9yID0gb3B0aW9ucy5jb250YWluZXJTZWxlY3RvcjtcbiAgICB2YXIgc2xpZGVyQ29udGFpbmVyID0gc2xpZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoIXNsaWRlckNvbnRhaW5lcikgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNvbnRhaW5lciBub2RlIPCfmKInKTtcbiAgICBjb250YWluZXIgPSBzbGlkZXJDb250YWluZXI7XG4gICAgc2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKHBhcnRpYWxPcHRpb25zKSB7XG4gICAgc3RvcmVFbGVtZW50cygpO1xuICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyhvcHRpb25zLCBwYXJ0aWFsT3B0aW9ucyk7XG4gICAgZW5naW5lID0gRW5naW5lKHNsaWRlclJvb3QsIGNvbnRhaW5lciwgc2xpZGVzLCBvcHRpb25zLCBldmVudHMpO1xuICAgIHJvb3RFbGVtZW50U2l6ZSA9IGVuZ2luZS5heGlzLm1lYXN1cmUoc2xpZGVyUm9vdCk7XG4gICAgZXZlbnRTdG9yZS5hZGQod2luZG93LCAncmVzaXplJywgZGVib3VuY2VkUmVzaXplKTtcbiAgICBlbmdpbmUudHJhbnNsYXRlLnRvKGVuZ2luZS5sb2NhdGlvbik7XG5cbiAgICBpZiAob3B0aW9ucy5sb29wKSB7XG4gICAgICBpZiAoIWVuZ2luZS5zbGlkZUxvb3Blci5jYW5Mb29wKCkpIHtcbiAgICAgICAgZGVBY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gYWN0aXZhdGUoe1xuICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBlbmdpbmUuc2xpZGVMb29wZXIubG9vcChzbGlkZXMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICBlbmdpbmUuZHJhZ0hhbmRsZXIuYWRkQWN0aXZhdGlvbkV2ZW50cygpO1xuXG4gICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGVDbGFzcykge1xuICAgICAgICBhZGRDbGFzcyhzbGlkZXJSb290LCBvcHRpb25zLmRyYWdnYWJsZUNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dpbmdDbGFzcykge1xuICAgICAgICBldmVudHMub24oJ3BvaW50ZXJEb3duJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcykub24oJ3BvaW50ZXJVcCcsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzbGlkZXMubGVuZ3RoKSB7XG4gICAgICBlbmdpbmUuc2xpZGVGb2N1cy5hZGRBY3RpdmF0aW9uRXZlbnRzKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0ZWRDbGFzcykge1xuICAgICAgdG9nZ2xlU2VsZWN0ZWRDbGFzcygpO1xuICAgICAgZXZlbnRzLm9uKCdzZWxlY3QnLCB0b2dnbGVTZWxlY3RlZENsYXNzKS5vbigncG9pbnRlclVwJywgdG9nZ2xlU2VsZWN0ZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmF0ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRzLmVtaXQoJ2luaXQnKTtcbiAgICAgIH0sIDApO1xuICAgICAgYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVEcmFnZ2luZ0NsYXNzKGV2dCkge1xuICAgIHZhciBkcmFnZ2luZ0NsYXNzID0gb3B0aW9ucy5kcmFnZ2luZ0NsYXNzO1xuICAgIGlmIChldnQgPT09ICdwb2ludGVyRG93bicpIGFkZENsYXNzKHNsaWRlclJvb3QsIGRyYWdnaW5nQ2xhc3MpO2Vsc2UgcmVtb3ZlQ2xhc3Moc2xpZGVyUm9vdCwgZHJhZ2dpbmdDbGFzcyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTZWxlY3RlZENsYXNzKCkge1xuICAgIHZhciBzZWxlY3RlZENsYXNzID0gb3B0aW9ucy5zZWxlY3RlZENsYXNzO1xuICAgIHZhciBpblZpZXcgPSBzbGlkZXNJblZpZXcodHJ1ZSk7XG4gICAgdmFyIG5vdEluVmlldyA9IHNsaWRlc05vdEluVmlldyh0cnVlKTtcbiAgICBub3RJblZpZXcuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKHNsaWRlc1tpXSwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgfSk7XG4gICAgaW5WaWV3LmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBhZGRDbGFzcyhzbGlkZXNbaV0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVBY3RpdmF0ZSgpIHtcbiAgICBlbmdpbmUuZHJhZ0hhbmRsZXIucmVtb3ZlQWxsRXZlbnRzKCk7XG4gICAgZW5naW5lLnNsaWRlRm9jdXMucmVtb3ZlQWxsRXZlbnRzKCk7XG4gICAgZW5naW5lLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgZXZlbnRTdG9yZS5yZW1vdmVBbGwoKTtcbiAgICBlbmdpbmUudHJhbnNsYXRlLmNsZWFyKCk7XG4gICAgZW5naW5lLnNsaWRlTG9vcGVyLmNsZWFyKHNsaWRlcyk7XG4gICAgcmVtb3ZlQ2xhc3Moc2xpZGVyUm9vdCwgb3B0aW9ucy5kcmFnZ2FibGVDbGFzcyk7XG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiByZW1vdmVDbGFzcyhzLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgIH0pO1xuICAgIGV2ZW50cy5vZmYoJ3NlbGVjdCcsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpO1xuICAgIGV2ZW50cy5vZmYoJ3BvaW50ZXJVcCcsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpO1xuICAgIGV2ZW50cy5vZmYoJ3BvaW50ZXJEb3duJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcyk7XG4gICAgZXZlbnRzLm9mZigncG9pbnRlclVwJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZUFjdGl2YXRlKHBhcnRpYWxPcHRpb25zKSB7XG4gICAgaWYgKCFhY3RpdmF0ZWQpIHJldHVybjtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4XG4gICAgfSwgcGFydGlhbE9wdGlvbnMpO1xuXG4gICAgZGVBY3RpdmF0ZSgpO1xuICAgIGFjdGl2YXRlKG5ld09wdGlvbnMpO1xuICAgIGV2ZW50cy5lbWl0KCdyZUluaXQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKCFhY3RpdmF0ZWQpIHJldHVybjtcbiAgICBkZUFjdGl2YXRlKCk7XG4gICAgYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgZXZlbnRzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICBpZiAoIWFjdGl2YXRlZCkgcmV0dXJuO1xuICAgIHZhciBuZXdSb290RWxlbWVudFNpemUgPSBlbmdpbmUuYXhpcy5tZWFzdXJlKHNsaWRlclJvb3QpO1xuICAgIGlmIChyb290RWxlbWVudFNpemUgIT09IG5ld1Jvb3RFbGVtZW50U2l6ZSkgcmVBY3RpdmF0ZSgpO1xuICAgIGV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlc0luVmlldyh0YXJnZXQpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBlbmdpbmVbdGFyZ2V0ID8gJ3RhcmdldCcgOiAnbG9jYXRpb24nXS5nZXQoKTtcbiAgICB2YXIgdHlwZSA9IG9wdGlvbnMubG9vcCA/ICdyZW1vdmVPZmZzZXQnIDogJ2NvbnN0cmFpbic7XG4gICAgcmV0dXJuIGVuZ2luZS5zbGlkZXNJblZpZXcuY2hlY2soZW5naW5lLmxpbWl0W3R5cGVdKGxvY2F0aW9uKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZXNOb3RJblZpZXcodGFyZ2V0KSB7XG4gICAgdmFyIGluVmlldyA9IHNsaWRlc0luVmlldyh0YXJnZXQpO1xuICAgIHJldHVybiBlbmdpbmUuc2xpZGVJbmRleGVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGluVmlldy5pbmRleE9mKGkpID09PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvKGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBlbmdpbmUuc2Nyb2xsQm9keS51c2VCYXNlTWFzcygpLnVzZUJhc2VTcGVlZCgpO1xuICAgIGlmIChhY3RpdmF0ZWQpIGVuZ2luZS5zY3JvbGxUby5pbmRleChpbmRleCwgZGlyZWN0aW9uIHx8IDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsTmV4dCgpIHtcbiAgICB2YXIgbmV4dCA9IGVuZ2luZS5pbmRleC5jbG9uZSgpLmFkZCgxKTtcbiAgICBzY3JvbGxUbyhuZXh0LmdldCgpLCAtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxQcmV2KCkge1xuICAgIHZhciBwcmV2ID0gZW5naW5lLmluZGV4LmNsb25lKCkuYWRkKC0xKTtcbiAgICBzY3JvbGxUbyhwcmV2LmdldCgpLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblNjcm9sbE5leHQoKSB7XG4gICAgdmFyIG5leHQgPSBlbmdpbmUuaW5kZXguY2xvbmUoKS5hZGQoMSk7XG4gICAgcmV0dXJuIG5leHQuZ2V0KCkgIT09IHNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU2Nyb2xsUHJldigpIHtcbiAgICB2YXIgcHJldiA9IGVuZ2luZS5pbmRleC5jbG9uZSgpLmFkZCgtMSk7XG4gICAgcmV0dXJuIHByZXYuZ2V0KCkgIT09IHNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsU25hcExpc3QoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5zY3JvbGxTbmFwcy5tYXAoZW5naW5lLnNjcm9sbFByb2dyZXNzLmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxQcm9ncmVzcygpIHtcbiAgICByZXR1cm4gZW5naW5lLnNjcm9sbFByb2dyZXNzLmdldChlbmdpbmUubG9jYXRpb24uZ2V0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0ZWRTY3JvbGxTbmFwKCkge1xuICAgIHJldHVybiBlbmdpbmUuaW5kZXguZ2V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2aW91c1Njcm9sbFNuYXAoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5pbmRleFByZXZpb3VzLmdldCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tBbGxvd2VkKCkge1xuICAgIHJldHVybiBlbmdpbmUuZHJhZ0hhbmRsZXIuY2xpY2tBbGxvd2VkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkYW5nZXJvdXNseUdldEVuZ2luZSgpIHtcbiAgICByZXR1cm4gZW5naW5lO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbmVyTm9kZSgpIHtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVOb2RlcygpIHtcbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY2FuU2Nyb2xsTmV4dDogY2FuU2Nyb2xsTmV4dCxcbiAgICBjYW5TY3JvbGxQcmV2OiBjYW5TY3JvbGxQcmV2LFxuICAgIGNsaWNrQWxsb3dlZDogY2xpY2tBbGxvd2VkLFxuICAgIGNvbnRhaW5lck5vZGU6IGNvbnRhaW5lck5vZGUsXG4gICAgZGFuZ2Vyb3VzbHlHZXRFbmdpbmU6IGRhbmdlcm91c2x5R2V0RW5naW5lLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgb2ZmOiBvZmYsXG4gICAgb246IG9uLFxuICAgIHByZXZpb3VzU2Nyb2xsU25hcDogcHJldmlvdXNTY3JvbGxTbmFwLFxuICAgIHJlSW5pdDogcmVJbml0LFxuICAgIHNjcm9sbE5leHQ6IHNjcm9sbE5leHQsXG4gICAgc2Nyb2xsUHJldjogc2Nyb2xsUHJldixcbiAgICBzY3JvbGxQcm9ncmVzczogc2Nyb2xsUHJvZ3Jlc3MsXG4gICAgc2Nyb2xsU25hcExpc3Q6IHNjcm9sbFNuYXBMaXN0LFxuICAgIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgICBzZWxlY3RlZFNjcm9sbFNuYXA6IHNlbGVjdGVkU2Nyb2xsU25hcCxcbiAgICBzbGlkZU5vZGVzOiBzbGlkZU5vZGVzLFxuICAgIHNsaWRlc0luVmlldzogc2xpZGVzSW5WaWV3LFxuICAgIHNsaWRlc05vdEluVmlldzogc2xpZGVzTm90SW5WaWV3XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbWJsYUNhcm91c2VsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1ibGEtY2Fyb3VzZWwuZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==