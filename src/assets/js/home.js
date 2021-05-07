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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/functions/_0-menu.js":
/*!*********************************************!*\
  !*** ../src/assets/js/functions/_0-menu.js ***!
  \*********************************************/
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

/***/ "../src/assets/js/functions/_1-slide.js":
/*!**********************************************!*\
  !*** ../src/assets/js/functions/_1-slide.js ***!
  \**********************************************/
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

/***/ "../src/assets/js/functions/_2-carousel.js":
/*!*************************************************!*\
  !*** ../src/assets/js/functions/_2-carousel.js ***!
  \*************************************************/
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

/***/ "../src/assets/js/functions/_3-thumb.js":
/*!**********************************************!*\
  !*** ../src/assets/js/functions/_3-thumb.js ***!
  \**********************************************/
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

/***/ "../src/assets/js/pages/home.js":
/*!**************************************!*\
  !*** ../src/assets/js/pages/home.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_0_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/_0-menu */ "../src/assets/js/functions/_0-menu.js");
/* harmony import */ var _functions_1_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/_1-slide */ "../src/assets/js/functions/_1-slide.js");
/* harmony import */ var _functions_2_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/_2-carousel */ "../src/assets/js/functions/_2-carousel.js");
/* harmony import */ var _functions_3_thumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/_3-thumb */ "../src/assets/js/functions/_3-thumb.js");





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

/***/ 1:
/*!********************************************!*\
  !*** multi ../src/assets/js/pages/home.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ti5\Desktop\LORENZE\lavi\src\assets\js\pages\home.js */"../src/assets/js/pages/home.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvZnVuY3Rpb25zL18wLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvZnVuY3Rpb25zL18xLXNsaWRlLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL2Z1bmN0aW9ucy9fMi1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9mdW5jdGlvbnMvXzMtdGh1bWIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwvZW1ibGEtY2Fyb3VzZWwuZXNtLmpzIl0sIm5hbWVzIjpbIndyYXBNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmlld1BvcnRNZW51IiwiQlJFQUtQT0lOVCIsIm9wdGlvbnNNZW51IiwiZHJhZ2dhYmxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5TY3JvbGwiLCJlbWJsYU1lbnUiLCJFbWJsYUNhcm91c2VsIiwib24iLCJyZUluaXQiLCJzZXR1cFByZXZOZXh0QnRucyIsInByZXZCdG4iLCJuZXh0QnRuIiwiZW1ibGFTbGlkZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQcmV2Iiwic2Nyb2xsTmV4dCIsImRpc2FibGVQcmV2TmV4dEJ0bnMiLCJjYW5TY3JvbGxQcmV2IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiY2FuU2Nyb2xsTmV4dCIsInNldHVwRG90QnRucyIsImRvdHNBcnJheSIsImZvckVhY2giLCJkb3ROb2RlIiwiaSIsInNjcm9sbFRvIiwiZ2VuZXJhdGVEb3RCdG5zIiwiZG90cyIsInRlbXBsYXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzY3JvbGxTbmFwTGlzdCIsInJlZHVjZSIsImFjYyIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3REb3RCdG4iLCJwcmV2aW91cyIsInByZXZpb3VzU2Nyb2xsU25hcCIsInNlbGVjdGVkIiwic2VsZWN0ZWRTY3JvbGxTbmFwIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid3JhcFNsaWRlIiwidmlld1BvcnRTbGlkZSIsIm9wdGlvbnNTbGlkZSIsImxvb3AiLCJzZXRTZWxlY3RlZERvdEJ0biIsImRpc2FibGVQcmV2QW5kTmV4dEJ0bnMiLCJzZXR1cFByZXZOZXh0QnRuc1NlcnZpY2VzIiwic2VydmljZXNQcmV2QnRuIiwic2VydmljZXNOZXh0QnRuIiwiZW1ibGFTZXJ2aWNlcyIsImRpc2FibGVQcmV2TmV4dEJ0bnNTZXJ2aWNlcyIsIndyYXBTZXJ2aWNlcyIsInZpZXdQb3J0U2VydmljZXMiLCJvcHRpb25zU2VydmljZXMiLCJhbGlnbiIsImRpc2FibGVQcmV2QW5kTmV4dEJ0bnNTZXJ2aWNlcyIsIm9uVGh1bWJDbGljayIsIm1haW5DYXJvdXNlbCIsInRodW1iQ2Fyb3VzZWwiLCJpbmRleCIsImNsaWNrQWxsb3dlZCIsImZvbGxvd01haW5DYXJvdXNlbCIsInNlbGVjdFRodW1iQnRuIiwic2xpZGVOb2RlcyIsIm1haW5DYXJvdXNlbFdyYXAiLCJtYWluQ2Fyb3VzZWxWaWV3Iiwic2VsZWN0ZWRDbGFzcyIsInRodW1iQ2Fyb3VzZWxXcmFwIiwidGh1bWJDYXJvdXNlbFZpZXciLCJ0aHVtYk5vZGUiLCJvbkNsaWNrIiwic3luY1RodW1iQ2Fyb3VzZWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw0RUFBYSxFQUFDO0FBQzdCIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XHJcblxyXG5jb25zdCB3cmFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsLW1lbnUnKTtcclxuY29uc3Qgdmlld1BvcnRNZW51ID0gd3JhcE1lbnUucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtdmlld3BvcnQnKTtcclxuY29uc3QgQlJFQUtQT0lOVCA9IDc2ODtcclxuY29uc3Qgb3B0aW9uc01lbnUgPSB7XHJcbiAgZHJhZ2dhYmxlOiB3aW5kb3cuaW5uZXJXaWR0aCA8IEJSRUFLUE9JTlQsXHJcbiAgY29udGFpblNjcm9sbDogJ3RyaW1TbmFwcycsXHJcbn07XHJcbmNvbnN0IGVtYmxhTWVudSA9IEVtYmxhQ2Fyb3VzZWwodmlld1BvcnRNZW51LCBvcHRpb25zTWVudSk7XHJcbmVtYmxhTWVudS5vbigncmVzaXplJywgKCkgPT4ge1xyXG4gIGNvbnN0IGRyYWdnYWJsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgQlJFQUtQT0lOVDtcclxuICBlbWJsYU1lbnUucmVJbml0KHsgZHJhZ2dhYmxlIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vLi4vZ3VscC9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwnO1xyXG5cclxuLy8gTmF2XHJcbmNvbnN0IHNldHVwUHJldk5leHRCdG5zID0gKHByZXZCdG4sIG5leHRCdG4sIGVtYmxhU2xpZGUpID0+IHtcclxuICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGFTbGlkZS5zY3JvbGxQcmV2LCBmYWxzZSk7XHJcbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtYmxhU2xpZGUuc2Nyb2xsTmV4dCwgZmFsc2UpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzYWJsZVByZXZOZXh0QnRucyA9IChwcmV2QnRuLCBuZXh0QnRuLCBlbWJsYVNsaWRlKSA9PiB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGlmIChlbWJsYVNsaWRlLmNhblNjcm9sbFByZXYoKSkgcHJldkJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBlbHNlIHByZXZCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cclxuICAgIGlmIChlbWJsYVNsaWRlLmNhblNjcm9sbE5leHQoKSkgbmV4dEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBlbHNlIG5leHRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gIH07XHJcbn07XHJcblxyXG4vL0RvdFxyXG5jb25zdCBzZXR1cERvdEJ0bnMgPSAoZG90c0FycmF5LCBlbWJsYVNsaWRlKSA9PiB7XHJcbiAgZG90c0FycmF5LmZvckVhY2goKGRvdE5vZGUsIGkpID0+IHtcclxuICAgIGRvdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlbWJsYVNsaWRlLnNjcm9sbFRvKGkpLCBmYWxzZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZURvdEJ0bnMgPSAoZG90cywgZW1ibGFTbGlkZSkgPT4ge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYmxhLWRvdC10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuICBkb3RzLmlubmVySFRNTCA9IGVtYmxhU2xpZGVcclxuICAgIC5zY3JvbGxTbmFwTGlzdCgpXHJcbiAgICAucmVkdWNlKChhY2MpID0+IGFjYyArIHRlbXBsYXRlLCAnJyk7XHJcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZG90cy5xdWVyeVNlbGVjdG9yQWxsKCcubC1lbWJsYS1kb3QnKSk7XHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3REb3RCdG4gPSAoZG90c0FycmF5LCBlbWJsYVNsaWRlKSA9PiAoKSA9PiB7XHJcbiAgY29uc3QgcHJldmlvdXMgPSBlbWJsYVNsaWRlLnByZXZpb3VzU2Nyb2xsU25hcCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gZW1ibGFTbGlkZS5zZWxlY3RlZFNjcm9sbFNuYXAoKTtcclxuICBkb3RzQXJyYXlbcHJldmlvdXNdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgZG90c0FycmF5W3NlbGVjdGVkXS5jbGFzc0xpc3QuYWRkKCdpcy1zZWxlY3RlZCcpO1xyXG59O1xyXG5cclxuLy9TbGlkZVxyXG5jb25zdCB3cmFwU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbC1zbGlkZScpO1xyXG5jb25zdCB2aWV3UG9ydFNsaWRlID0gd3JhcFNsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLXZpZXdwb3J0Jyk7XHJcbmNvbnN0IHByZXZCdG4gPSB3cmFwU2xpZGUucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtYnRuLXByZXYnKTtcclxuY29uc3QgbmV4dEJ0biA9IHdyYXBTbGlkZS5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS1idG4tbmV4dCcpO1xyXG5jb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtZG90cycpO1xyXG5cclxuY29uc3Qgb3B0aW9uc1NsaWRlID0ge1xyXG4gIGxvb3A6IHRydWUsXHJcbn07XHJcbmNvbnN0IGVtYmxhU2xpZGUgPSBFbWJsYUNhcm91c2VsKHZpZXdQb3J0U2xpZGUsIG9wdGlvbnNTbGlkZSk7XHJcblxyXG5jb25zdCBkb3RzQXJyYXkgPSBnZW5lcmF0ZURvdEJ0bnMoZG90cywgZW1ibGFTbGlkZSk7XHJcbmNvbnN0IHNldFNlbGVjdGVkRG90QnRuID0gc2VsZWN0RG90QnRuKGRvdHNBcnJheSwgZW1ibGFTbGlkZSk7XHJcbmNvbnN0IGRpc2FibGVQcmV2QW5kTmV4dEJ0bnMgPSBkaXNhYmxlUHJldk5leHRCdG5zKFxyXG4gIHByZXZCdG4sXHJcbiAgbmV4dEJ0bixcclxuICBlbWJsYVNsaWRlXHJcbik7XHJcbnNldHVwUHJldk5leHRCdG5zKHByZXZCdG4sIG5leHRCdG4sIGVtYmxhU2xpZGUpO1xyXG5zZXR1cERvdEJ0bnMoZG90c0FycmF5LCBlbWJsYVNsaWRlKTtcclxuZW1ibGFTbGlkZS5vbignc2VsZWN0Jywgc2V0U2VsZWN0ZWREb3RCdG4pO1xyXG5lbWJsYVNsaWRlLm9uKCdzZWxlY3QnLCBkaXNhYmxlUHJldkFuZE5leHRCdG5zKTtcclxuZW1ibGFTbGlkZS5vbignaW5pdCcsIHNldFNlbGVjdGVkRG90QnRuKTtcclxuZW1ibGFTbGlkZS5vbignaW5pdCcsIGRpc2FibGVQcmV2QW5kTmV4dEJ0bnMpO1xyXG4iLCIvLyBpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XHJcblxyXG4vLyBjb25zdCB3cmFwU2VydmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbC1zZXJ2aWNlcycpO1xyXG4vLyBjb25zdCB2aWV3UG9ydFNlcnZpY2VzID0gd3JhcFNlcnZpY2VzLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLXZpZXdwb3J0Jyk7XHJcblxyXG4vLyBjb25zdCBvcHRpb25zU2VydmljZXMgPSB7XHJcbi8vICAgbG9vcDogZmFsc2UsXHJcbi8vICAgY29udGFpblNjcm9sbDogJ3RyaW1TbmFwcycsXHJcbi8vICAgYWxpZ246ICdzdGFydCcsXHJcbi8vIH07XHJcbi8vIGNvbnN0IGVtYmxhU2VydmljZXMgPSBFbWJsYUNhcm91c2VsKHZpZXdQb3J0U2VydmljZXMsIG9wdGlvbnNTZXJ2aWNlcyk7XHJcblxyXG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XHJcblxyXG4vLyBOYXZcclxuY29uc3Qgc2V0dXBQcmV2TmV4dEJ0bnNTZXJ2aWNlcyA9IChcclxuICBzZXJ2aWNlc1ByZXZCdG4sXHJcbiAgc2VydmljZXNOZXh0QnRuLFxyXG4gIGVtYmxhU2VydmljZXNcclxuKSA9PiB7XHJcbiAgc2VydmljZXNQcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGFTZXJ2aWNlcy5zY3JvbGxQcmV2LCBmYWxzZSk7XHJcbiAgc2VydmljZXNOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1ibGFTZXJ2aWNlcy5zY3JvbGxOZXh0LCBmYWxzZSk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNhYmxlUHJldk5leHRCdG5zU2VydmljZXMgPSAoXHJcbiAgc2VydmljZXNQcmV2QnRuLFxyXG4gIHNlcnZpY2VzTmV4dEJ0bixcclxuICBlbWJsYVNlcnZpY2VzXHJcbikgPT4ge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBpZiAoZW1ibGFTZXJ2aWNlcy5jYW5TY3JvbGxQcmV2KCkpXHJcbiAgICAgIHNlcnZpY2VzUHJldkJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBlbHNlIHNlcnZpY2VzUHJldkJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgaWYgKGVtYmxhU2VydmljZXMuY2FuU2Nyb2xsTmV4dCgpKVxyXG4gICAgICBzZXJ2aWNlc05leHRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgZWxzZSBzZXJ2aWNlc05leHRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB3cmFwU2VydmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbC1zZXJ2aWNlcycpO1xyXG5jb25zdCB2aWV3UG9ydFNlcnZpY2VzID0gd3JhcFNlcnZpY2VzLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLXZpZXdwb3J0Jyk7XHJcbmNvbnN0IHNlcnZpY2VzUHJldkJ0biA9IHdyYXBTZXJ2aWNlcy5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS1idG4tcHJldicpO1xyXG5jb25zdCBzZXJ2aWNlc05leHRCdG4gPSB3cmFwU2VydmljZXMucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtYnRuLW5leHQnKTtcclxuXHJcbmNvbnN0IG9wdGlvbnNTZXJ2aWNlcyA9IHtcclxuICBsb29wOiBmYWxzZSxcclxuICBjb250YWluU2Nyb2xsOiAndHJpbVNuYXBzJyxcclxuICBhbGlnbjogJ3N0YXJ0JyxcclxufTtcclxuY29uc3QgZW1ibGFTZXJ2aWNlcyA9IEVtYmxhQ2Fyb3VzZWwodmlld1BvcnRTZXJ2aWNlcywgb3B0aW9uc1NlcnZpY2VzKTtcclxuXHJcbmNvbnN0IGRpc2FibGVQcmV2QW5kTmV4dEJ0bnNTZXJ2aWNlcyA9IGRpc2FibGVQcmV2TmV4dEJ0bnNTZXJ2aWNlcyhcclxuICBzZXJ2aWNlc1ByZXZCdG4sXHJcbiAgc2VydmljZXNOZXh0QnRuLFxyXG4gIGVtYmxhU2VydmljZXNcclxuKTtcclxuc2V0dXBQcmV2TmV4dEJ0bnNTZXJ2aWNlcyhzZXJ2aWNlc1ByZXZCdG4sIHNlcnZpY2VzTmV4dEJ0biwgZW1ibGFTZXJ2aWNlcyk7XHJcbmVtYmxhU2VydmljZXMub24oJ3NlbGVjdCcsIGRpc2FibGVQcmV2QW5kTmV4dEJ0bnNTZXJ2aWNlcyk7XHJcbmVtYmxhU2VydmljZXMub24oJ2luaXQnLCBkaXNhYmxlUHJldkFuZE5leHRCdG5zU2VydmljZXMpO1xyXG4iLCJpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XHJcblxyXG4vLyBUaHVtYlxyXG5leHBvcnQgY29uc3Qgb25UaHVtYkNsaWNrID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCwgaW5kZXgpID0+ICgpID0+IHtcclxuICBpZiAoIXRodW1iQ2Fyb3VzZWwuY2xpY2tBbGxvd2VkKCkpIHJldHVybjtcclxuICBtYWluQ2Fyb3VzZWwuc2Nyb2xsVG8oaW5kZXgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd01haW5DYXJvdXNlbCA9IChtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwpID0+ICgpID0+IHtcclxuICB0aHVtYkNhcm91c2VsLnNjcm9sbFRvKG1haW5DYXJvdXNlbC5zZWxlY3RlZFNjcm9sbFNuYXAoKSk7XHJcbiAgc2VsZWN0VGh1bWJCdG4obWFpbkNhcm91c2VsLCB0aHVtYkNhcm91c2VsKTtcclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdFRodW1iQnRuID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCkgPT4ge1xyXG4gIGNvbnN0IHByZXZpb3VzID0gbWFpbkNhcm91c2VsLnByZXZpb3VzU2Nyb2xsU25hcCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gbWFpbkNhcm91c2VsLnNlbGVjdGVkU2Nyb2xsU25hcCgpO1xyXG4gIHRodW1iQ2Fyb3VzZWwuc2xpZGVOb2RlcygpW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zZWxlY3RlZCcpO1xyXG4gIHRodW1iQ2Fyb3VzZWwuc2xpZGVOb2RlcygpW3NlbGVjdGVkXS5jbGFzc0xpc3QuYWRkKCdpcy1zZWxlY3RlZCcpO1xyXG59O1xyXG5cclxuLy8gRW1ibGFcclxuY29uc3QgbWFpbkNhcm91c2VsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNhcm91c2VsJyk7XHJcbmNvbnN0IG1haW5DYXJvdXNlbFZpZXcgPSBtYWluQ2Fyb3VzZWxXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLXZpZXdwb3J0Jyk7XHJcbmNvbnN0IG1haW5DYXJvdXNlbCA9IEVtYmxhQ2Fyb3VzZWwobWFpbkNhcm91c2VsVmlldywge1xyXG4gIHNlbGVjdGVkQ2xhc3M6ICcnLFxyXG4gIGxvb3A6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IHRodW1iQ2Fyb3VzZWxXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW1iLWNhcm91c2VsJyk7XHJcbmNvbnN0IHRodW1iQ2Fyb3VzZWxWaWV3ID0gdGh1bWJDYXJvdXNlbFdyYXAucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtdmlld3BvcnQnKTtcclxuY29uc3QgdGh1bWJDYXJvdXNlbCA9IEVtYmxhQ2Fyb3VzZWwodGh1bWJDYXJvdXNlbFZpZXcsIHtcclxuICBzZWxlY3RlZENsYXNzOiAnJyxcclxuICBjb250YWluU2Nyb2xsOiAna2VlcFNuYXBzJyxcclxufSk7XHJcblxyXG50aHVtYkNhcm91c2VsLnNsaWRlTm9kZXMoKS5mb3JFYWNoKCh0aHVtYk5vZGUsIGluZGV4KSA9PiB7XHJcbiAgY29uc3Qgb25DbGljayA9IG9uVGh1bWJDbGljayhtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwsIGluZGV4KTtcclxuICB0aHVtYk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrLCBmYWxzZSk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3luY1RodW1iQ2Fyb3VzZWwgPSBmb2xsb3dNYWluQ2Fyb3VzZWwobWFpbkNhcm91c2VsLCB0aHVtYkNhcm91c2VsKTtcclxubWFpbkNhcm91c2VsLm9uKCdzZWxlY3QnLCBzeW5jVGh1bWJDYXJvdXNlbCk7XHJcbnRodW1iQ2Fyb3VzZWwub24oJ2luaXQnLCBzeW5jVGh1bWJDYXJvdXNlbCk7XHJcbiIsImltcG9ydCBtZW51IGZyb20gJy4uL2Z1bmN0aW9ucy9fMC1tZW51JztcclxuaW1wb3J0IHNsaWRlIGZyb20gJy4uL2Z1bmN0aW9ucy9fMS1zbGlkZSc7XHJcbmltcG9ydCBjYXJvdXNlbCBmcm9tICcuLi9mdW5jdGlvbnMvXzItY2Fyb3VzZWwnO1xyXG5pbXBvcnQgdGh1bWIgZnJvbSAnLi4vZnVuY3Rpb25zL18zLXRodW1iJztcclxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gQWxpZ25tZW50KHBhcmFtcykge1xuICB2YXIgdmlld1NpemUgPSBwYXJhbXMudmlld1NpemUsXG4gICAgICBhbGlnbiA9IHBhcmFtcy5hbGlnbjtcbiAgdmFyIHByZWRlZmluZWQgPSB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGNlbnRlcjogY2VudGVyLFxuICAgIGVuZDogZW5kXG4gIH07XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBjZW50ZXIobikge1xuICAgIHJldHVybiBlbmQobikgLyAyO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kKG4pIHtcbiAgICByZXR1cm4gdmlld1NpemUgLSBuO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVyY2VudCgpIHtcbiAgICByZXR1cm4gdmlld1NpemUgKiBOdW1iZXIoYWxpZ24pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShuKSB7XG4gICAgaWYgKHR5cGVvZiBhbGlnbiA9PT0gJ251bWJlcicpIHJldHVybiBwZXJjZW50KCk7XG4gICAgcmV0dXJuIHByZWRlZmluZWRbYWxpZ25dKG4pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbWVhc3VyZTogbWVhc3VyZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciBhbmltYXRpb25GcmFtZSA9IDA7XG5cbiAgZnVuY3Rpb24gaWZBbmltYXRpbmcoYWN0aXZlLCBjYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoYWN0aXZlID09PSAhIWFuaW1hdGlvbkZyYW1lKSBjYigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIGFuaW1hdGlvbkZyYW1lID0gMDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIHByb2NlZWQ6IGlmQW5pbWF0aW5nKHRydWUsIHN0YXJ0KSxcbiAgICBzdGFydDogaWZBbmltYXRpbmcoZmFsc2UsIHN0YXJ0KSxcbiAgICBzdG9wOiBpZkFuaW1hdGluZyh0cnVlLCBzdG9wKVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gQXhpcyhheGlzKSB7XG4gIHZhciBzY3JvbGwgPSBheGlzID09PSAneScgPyAneScgOiAneCc7XG4gIHZhciBjcm9zcyA9IGF4aXMgPT09ICd5JyA/ICd4JyA6ICd5JztcblxuICBmdW5jdGlvbiBtZWFzdXJlKG5vZGUpIHtcbiAgICB2YXIgX2EgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF9hLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfYS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gc2Nyb2xsID09PSAneCcgPyB3aWR0aCA6IGhlaWdodDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNyb3NzOiBjcm9zcyxcbiAgICBtZWFzdXJlOiBtZWFzdXJlLFxuICAgIHNjcm9sbDogc2Nyb2xsXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBtYXAodmFsdWUsIGlTdGFydCwgaVN0b3AsIG9TdGFydCwgb1N0b3ApIHtcbiAgcmV0dXJuIG9TdGFydCArIChvU3RvcCAtIG9TdGFydCkgKiAoKHZhbHVlIC0gaVN0YXJ0KSAvIChpU3RvcCAtIGlTdGFydCkpO1xufVxuZnVuY3Rpb24gbWF0aFNpZ24obikge1xuICByZXR1cm4gIW4gPyAwIDogbiAvIE1hdGguYWJzKG4pO1xufVxuZnVuY3Rpb24gZGVsdGFBYnModmFsdWVCLCB2YWx1ZUEpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHZhbHVlQiAtIHZhbHVlQSk7XG59XG5mdW5jdGlvbiBmYWN0b3JBYnModmFsdWVCLCB2YWx1ZUEpIHtcbiAgaWYgKHZhbHVlQiA9PT0gMCB8fCB2YWx1ZUEgPT09IDApIHJldHVybiAwO1xuICBpZiAoTWF0aC5hYnModmFsdWVCKSA8PSBNYXRoLmFicyh2YWx1ZUEpKSByZXR1cm4gMDtcbiAgdmFyIGRpZmYgPSBkZWx0YUFicyhNYXRoLmFicyh2YWx1ZUIpLCBNYXRoLmFicyh2YWx1ZUEpKTtcbiAgcmV0dXJuIE1hdGguYWJzKGRpZmYgLyB2YWx1ZUIpO1xufVxuZnVuY3Rpb24gcm91bmRUb0RlY2ltYWxzKGRlY2ltYWxQb2ludHMpIHtcbiAgdmFyIHBvdyA9IE1hdGgucG93KDEwLCBkZWNpbWFsUG9pbnRzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobiAqIHBvdykgLyBwb3c7XG4gIH07XG59XG5mdW5jdGlvbiBkZWJvdW5jZShjYWxsYmFjaywgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpIHx8IDA7XG4gIH07XG59XG5mdW5jdGlvbiBncm91cEFycmF5KGFycmF5LCBzaXplKSB7XG4gIHZhciBncm91cHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgZ3JvdXBzLnB1c2goYXJyYXkuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgfVxuXG4gIHJldHVybiBncm91cHM7XG59XG5mdW5jdGlvbiBhcnJheUtleXMoYXJyYXkpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KS5tYXAoTnVtYmVyKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICB2YXIgY2wgPSBub2RlLmNsYXNzTGlzdDtcbiAgaWYgKGNsYXNzTmFtZSAmJiBjbC5jb250YWlucyhjbGFzc05hbWUpKSBjbC5yZW1vdmUoY2xhc3NOYW1lKTtcbn1cbmZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICB2YXIgY2wgPSBub2RlLmNsYXNzTGlzdDtcbiAgaWYgKGNsYXNzTmFtZSAmJiAhY2wuY29udGFpbnMoY2xhc3NOYW1lKSkgY2wuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIENvdW50ZXIocGFyYW1zKSB7XG4gIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCxcbiAgICAgIGxpbWl0ID0gcGFyYW1zLmxpbWl0LFxuICAgICAgbG9vcCA9IHBhcmFtcy5sb29wO1xuICB2YXIgbWluID0gbGltaXQubWluLFxuICAgICAgbWF4ID0gbGltaXQubWF4O1xuICB2YXIgdHlwZSA9IGxvb3AgPyAnbG9vcCcgOiAnY29uc3RyYWluJztcbiAgdmFyIHdpdGhpbkxpbWl0ID0gbGltaXRbdHlwZV07XG4gIHZhciBjb3VudGVyID0gd2l0aGluTGltaXQoc3RhcnQpO1xuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldChuKSB7XG4gICAgY291bnRlciA9IHdpdGhpbkxpbWl0KG4pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKG4pIHtcbiAgICBpZiAobiAhPT0gMCkge1xuICAgICAgdmFyIHNpZ24gPSBtYXRoU2lnbihuKTtcbiAgICAgIHNldChnZXQoKSArIHNpZ24pO1xuICAgICAgcmV0dXJuIGFkZChuICsgc2lnbiAqIC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBDb3VudGVyKHtcbiAgICAgIHN0YXJ0OiBnZXQoKSxcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIGxvb3A6IGxvb3BcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZDogYWRkLFxuICAgIGNsb25lOiBjbG9uZSxcbiAgICBnZXQ6IGdldCxcbiAgICBtYXg6IG1heCxcbiAgICBtaW46IG1pbixcbiAgICBzZXQ6IHNldFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICB2YXIgc2lnbiA9IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAtMSA6IDE7XG5cbiAgZnVuY3Rpb24gYXBwbHlUbyhuKSB7XG4gICAgcmV0dXJuIG4gKiBzaWduO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYXBwbHlUbzogYXBwbHlUb1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRXZlbnRTdG9yZSgpIHtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZChub2RlLCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICBsaXN0ZW5lcnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKHJlbW92ZSkge1xuICAgICAgcmV0dXJuIHJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYWRkOiBhZGQsXG4gICAgcmVtb3ZlQWxsOiByZW1vdmVBbGxcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFZlY3RvcjFEKHZhbHVlKSB7XG4gIHZhciB2ZWN0b3IgPSB2YWx1ZTtcblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldChuKSB7XG4gICAgdmVjdG9yID0gcmVhZE51bWJlcihuKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChuKSB7XG4gICAgdmVjdG9yICs9IHJlYWROdW1iZXIobik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJ0cmFjdChuKSB7XG4gICAgdmVjdG9yIC09IHJlYWROdW1iZXIobik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBtdWx0aXBseShuKSB7XG4gICAgdmVjdG9yICo9IG47XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBkaXZpZGUobikge1xuICAgIHZlY3RvciAvPSBuO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIGlmICh2ZWN0b3IgIT09IDApIGRpdmlkZSh2ZWN0b3IpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhZE51bWJlcihuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiBuLmdldCgpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYWRkOiBhZGQsXG4gICAgZGl2aWRlOiBkaXZpZGUsXG4gICAgZ2V0OiBnZXQsXG4gICAgbXVsdGlwbHk6IG11bHRpcGx5LFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIHNldDogc2V0LFxuICAgIHN1YnRyYWN0OiBzdWJ0cmFjdFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRHJhZ0hhbmRsZXIocGFyYW1zKSB7XG4gIHZhciB0YXJnZXQgPSBwYXJhbXMudGFyZ2V0LFxuICAgICAgc2Nyb2xsQm9keSA9IHBhcmFtcy5zY3JvbGxCb2R5LFxuICAgICAgZHJhZ0ZyZWUgPSBwYXJhbXMuZHJhZ0ZyZWUsXG4gICAgICBhbmltYXRpb24gPSBwYXJhbXMuYW5pbWF0aW9uLFxuICAgICAgYXhpcyA9IHBhcmFtcy5heGlzLFxuICAgICAgc2Nyb2xsVG8gPSBwYXJhbXMuc2Nyb2xsVG87XG4gIHZhciByb290ID0gcGFyYW1zLnJvb3QsXG4gICAgICBkcmFnVHJhY2tlciA9IHBhcmFtcy5kcmFnVHJhY2tlcixcbiAgICAgIGxvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgZXZlbnRzID0gcGFyYW1zLmV2ZW50cyxcbiAgICAgIGxpbWl0ID0gcGFyYW1zLmxpbWl0LFxuICAgICAgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgdmFyIHNjcm9sbEF4aXMgPSBheGlzLnNjcm9sbCxcbiAgICAgIGNyb3NzQXhpcyA9IGF4aXMuY3Jvc3M7XG4gIHZhciBmb2N1c05vZGVzID0gWydJTlBVVCcsICdTRUxFQ1QnLCAnVEVYVEFSRUEnXTtcbiAgdmFyIHN0YXJ0U2Nyb2xsID0gVmVjdG9yMUQoMCk7XG4gIHZhciBzdGFydENyb3NzID0gVmVjdG9yMUQoMCk7XG4gIHZhciBkcmFnU3RhcnRQb2ludCA9IFZlY3RvcjFEKDApO1xuICB2YXIgYWN0aXZhdGlvbkV2ZW50cyA9IEV2ZW50U3RvcmUoKTtcbiAgdmFyIGludGVyYWN0aW9uRXZlbnRzID0gRXZlbnRTdG9yZSgpO1xuICB2YXIgc25hcEZvcmNlQm9vc3QgPSB7XG4gICAgbW91c2U6IDIuNSxcbiAgICB0b3VjaDogMy41XG4gIH07XG4gIHZhciBmcmVlRm9yY2VCb29zdCA9IHtcbiAgICBtb3VzZTogNSxcbiAgICB0b3VjaDogN1xuICB9O1xuICB2YXIgYmFzZVNwZWVkID0gZHJhZ0ZyZWUgPyA1IDogMTI7XG4gIHZhciBkcmFnVGhyZXNob2xkID0gNDtcbiAgdmFyIHBvaW50ZXJJc0Rvd24gPSBmYWxzZTtcbiAgdmFyIHByZXZlbnRTY3JvbGwgPSBmYWxzZTtcbiAgdmFyIHByZXZlbnRDbGljayA9IGZhbHNlO1xuICB2YXIgaXNNb3VzZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGFkZEFjdGl2YXRpb25FdmVudHMoKSB7XG4gICAgdmFyIG5vZGUgPSByb290O1xuICAgIGFjdGl2YXRpb25FdmVudHMuYWRkKG5vZGUsICd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pLmFkZChub2RlLCAndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pLmFkZChub2RlLCAndG91Y2hzdGFydCcsIGRvd24pLmFkZChub2RlLCAnbW91c2Vkb3duJywgZG93bikuYWRkKG5vZGUsICd0b3VjaGNhbmNlbCcsIHVwKS5hZGQobm9kZSwgJ2NvbnRleHRtZW51JywgdXApLmFkZChub2RlLCAnY2xpY2snLCBjbGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkV2ZW50cygpIHtcbiAgICB2YXIgbm9kZSA9ICFpc01vdXNlID8gcm9vdCA6IGRvY3VtZW50O1xuICAgIGludGVyYWN0aW9uRXZlbnRzLmFkZChub2RlLCAndG91Y2htb3ZlJywgbW92ZSkuYWRkKG5vZGUsICd0b3VjaGVuZCcsIHVwKS5hZGQobm9kZSwgJ21vdXNlbW92ZScsIG1vdmUpLmFkZChub2RlLCAnbW91c2V1cCcsIHVwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50cygpIHtcbiAgICBhY3RpdmF0aW9uRXZlbnRzLnJlbW92ZUFsbCgpO1xuICAgIGludGVyYWN0aW9uRXZlbnRzLnJlbW92ZUFsbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGb2N1c05vZGUobm9kZSkge1xuICAgIHZhciBuYW1lID0gbm9kZS5ub2RlTmFtZSB8fCAnJztcbiAgICByZXR1cm4gZm9jdXNOb2Rlcy5pbmRleE9mKG5hbWUpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZUJvb3N0KCkge1xuICAgIHZhciBib29zdCA9IGRyYWdGcmVlID8gZnJlZUZvcmNlQm9vc3QgOiBzbmFwRm9yY2VCb29zdDtcbiAgICB2YXIgdHlwZSA9IGlzTW91c2UgPyAnbW91c2UnIDogJ3RvdWNoJztcbiAgICByZXR1cm4gYm9vc3RbdHlwZV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxvd2VkRm9yY2UoZm9yY2UpIHtcbiAgICB2YXIgc2Nyb2xsVGFyZ2V0ID0gcGFyYW1zLnNjcm9sbFRhcmdldCxcbiAgICAgICAgaW5kZXggPSBwYXJhbXMuaW5kZXg7XG4gICAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IHNjcm9sbFRhcmdldC5ieURpc3RhbmNlKDAsIGZhbHNlKTtcbiAgICB2YXIgdGFyZ2V0Q2hhbmdlZCA9IGN1cnJlbnRMb2NhdGlvbi5pbmRleCAhPT0gaW5kZXguZ2V0KCk7XG4gICAgdmFyIHNlZWtOZXh0ID0gIXRhcmdldENoYW5nZWQgJiYgTWF0aC5hYnMoZm9yY2UpID4gZHJhZ1RocmVzaG9sZDtcbiAgICB2YXIgZGVzdGluYXRpb24gPSBmb3JjZSArIGxvY2F0aW9uLmdldCgpO1xuXG4gICAgaWYgKHNlZWtOZXh0ICYmICFkcmFnRnJlZSAmJiAhbGltaXQucmVhY2hlZEFueShkZXN0aW5hdGlvbikpIHtcbiAgICAgIHZhciBuZXh0ID0gaW5kZXguY2xvbmUoKS5hZGQobWF0aFNpZ24oZm9yY2UpICogLTEpO1xuICAgICAgcmV0dXJuIHNjcm9sbFRhcmdldC5ieUluZGV4KG5leHQuZ2V0KCksIDApLmRpc3RhbmNlO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JvbGxUYXJnZXQuYnlEaXN0YW5jZShmb3JjZSwgIWRyYWdGcmVlKS5kaXN0YW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd24oZXZ0KSB7XG4gICAgaXNNb3VzZSA9IGV2dC50eXBlID09PSAnbW91c2Vkb3duJztcbiAgICBpZiAoaXNNb3VzZSAmJiBldnQuYnV0dG9uICE9PSAwKSByZXR1cm47XG4gICAgdmFyIGlzTW92aW5nID0gZGVsdGFBYnModGFyZ2V0LmdldCgpLCBsb2NhdGlvbi5nZXQoKSkgPj0gMjtcbiAgICB2YXIgY2xlYXJQcmV2ZW50Q2xpY2sgPSBpc01vdXNlIHx8ICFpc01vdmluZztcbiAgICB2YXIgaXNOb3RGb2N1c05vZGUgPSAhaXNGb2N1c05vZGUoZXZ0LnRhcmdldCk7XG4gICAgdmFyIHByZXZlbnREZWZhdWx0ID0gaXNNb3ZpbmcgfHwgaXNNb3VzZSAmJiBpc05vdEZvY3VzTm9kZTtcbiAgICBwb2ludGVySXNEb3duID0gdHJ1ZTtcbiAgICBkcmFnVHJhY2tlci5wb2ludGVyRG93bihldnQpO1xuICAgIGRyYWdTdGFydFBvaW50LnNldCh0YXJnZXQpO1xuICAgIHRhcmdldC5zZXQobG9jYXRpb24pO1xuICAgIHNjcm9sbEJvZHkudXNlQmFzZU1hc3MoKS51c2VTcGVlZCg4MCk7XG4gICAgYWRkSW50ZXJhY3Rpb25FdmVudHMoKTtcbiAgICBzdGFydFNjcm9sbC5zZXQoZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcykpO1xuICAgIHN0YXJ0Q3Jvc3Muc2V0KGRyYWdUcmFja2VyLnJlYWRQb2ludChldnQsIGNyb3NzQXhpcykpO1xuICAgIGV2ZW50cy5lbWl0KCdwb2ludGVyRG93bicpO1xuICAgIGlmIChjbGVhclByZXZlbnRDbGljaykgcHJldmVudENsaWNrID0gZmFsc2U7XG4gICAgaWYgKHByZXZlbnREZWZhdWx0KSBldnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZXZ0KSB7XG4gICAgaWYgKCFwcmV2ZW50U2Nyb2xsICYmICFpc01vdXNlKSB7XG4gICAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm4gdXAoKTtcbiAgICAgIHZhciBtb3ZlU2Nyb2xsID0gZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcykuZ2V0KCk7XG4gICAgICB2YXIgbW92ZUNyb3NzID0gZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgY3Jvc3NBeGlzKS5nZXQoKTtcbiAgICAgIHZhciBkaWZmU2Nyb2xsID0gZGVsdGFBYnMobW92ZVNjcm9sbCwgc3RhcnRTY3JvbGwuZ2V0KCkpO1xuICAgICAgdmFyIGRpZmZDcm9zcyA9IGRlbHRhQWJzKG1vdmVDcm9zcywgc3RhcnRDcm9zcy5nZXQoKSk7XG4gICAgICBwcmV2ZW50U2Nyb2xsID0gZGlmZlNjcm9sbCA+IGRpZmZDcm9zcztcbiAgICAgIGlmICghcHJldmVudFNjcm9sbCAmJiAhcHJldmVudENsaWNrKSByZXR1cm4gdXAoKTtcbiAgICB9XG5cbiAgICB2YXIgZGlmZiA9IGRyYWdUcmFja2VyLnBvaW50ZXJNb3ZlKGV2dCk7XG4gICAgaWYgKCFwcmV2ZW50Q2xpY2sgJiYgZGlmZikgcHJldmVudENsaWNrID0gdHJ1ZTtcbiAgICBhbmltYXRpb24uc3RhcnQoKTtcbiAgICB0YXJnZXQuYWRkKGRpcmVjdGlvbi5hcHBseVRvKGRpZmYpKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwKCkge1xuICAgIHZhciByYXdGb3JjZSA9IGRyYWdUcmFja2VyLnBvaW50ZXJVcCgpICogZm9yY2VCb29zdCgpO1xuICAgIHZhciBmb3JjZSA9IGFsbG93ZWRGb3JjZShkaXJlY3Rpb24uYXBwbHlUbyhyYXdGb3JjZSkpO1xuICAgIHZhciBzcGVlZEZhY3RvciA9IGZhY3RvckFicyhyYXdGb3JjZSwgZm9yY2UpO1xuICAgIHZhciBpc01vdmluZyA9IGRlbHRhQWJzKHRhcmdldC5nZXQoKSwgZHJhZ1N0YXJ0UG9pbnQuZ2V0KCkpID49IDAuNTtcbiAgICBpZiAoaXNNb3ZpbmcgJiYgIWlzTW91c2UpIHByZXZlbnRDbGljayA9IHRydWU7XG4gICAgcHJldmVudFNjcm9sbCA9IGZhbHNlO1xuICAgIHBvaW50ZXJJc0Rvd24gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvbkV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgICBzY3JvbGxCb2R5LnVzZVNwZWVkKGJhc2VTcGVlZCArIGJhc2VTcGVlZCAqIHNwZWVkRmFjdG9yKTtcbiAgICBzY3JvbGxUby5kaXN0YW5jZShmb3JjZSwgIWRyYWdGcmVlKTtcbiAgICBpc01vdXNlID0gZmFsc2U7XG4gICAgZXZlbnRzLmVtaXQoJ3BvaW50ZXJVcCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2soZXZ0KSB7XG4gICAgaWYgKHByZXZlbnRDbGljaykgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0FsbG93ZWQoKSB7XG4gICAgcmV0dXJuICFwcmV2ZW50Q2xpY2s7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyRG93bigpIHtcbiAgICByZXR1cm4gcG9pbnRlcklzRG93bjtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZEFjdGl2YXRpb25FdmVudHM6IGFkZEFjdGl2YXRpb25FdmVudHMsXG4gICAgY2xpY2tBbGxvd2VkOiBjbGlja0FsbG93ZWQsXG4gICAgcG9pbnRlckRvd246IHBvaW50ZXJEb3duLFxuICAgIHJlbW92ZUFsbEV2ZW50czogcmVtb3ZlQWxsRXZlbnRzXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBEcmFnVHJhY2tlcihwYXJhbXMpIHtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcyxcbiAgICAgIHB4VG9QZXJjZW50ID0gcGFyYW1zLnB4VG9QZXJjZW50O1xuICB2YXIgc2Nyb2xsQXhpcyA9IGF4aXMuc2Nyb2xsO1xuICB2YXIgY29vcmRzID0ge1xuICAgIHg6ICdjbGllbnRYJyxcbiAgICB5OiAnY2xpZW50WSdcbiAgfTtcbiAgdmFyIHN0YXJ0RHJhZyA9IFZlY3RvcjFEKDApO1xuICB2YXIgZGlmZkRyYWcgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGxhc3REcmFnID0gVmVjdG9yMUQoMCk7XG4gIHZhciBwb2ludFZhbHVlID0gVmVjdG9yMUQoMCk7XG4gIHZhciB0cmFja0ludGVydmFsID0gMTA7XG4gIHZhciB0cmFja0xlbmd0aCA9IDU7XG4gIHZhciB0cmFja1RpbWUgPSAxMDA7XG4gIHZhciB0cmFja1BvaW50cyA9IFtdO1xuICB2YXIgbGFzdE1vdmVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBpc01vdXNlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gcmVhZFBvaW50KGV2dCwgdHlwZSkge1xuICAgIGlzTW91c2UgPSAhZXZ0LnRvdWNoZXM7XG4gICAgdmFyIGMgPSBjb29yZHNbdHlwZV07XG4gICAgdmFyIHZhbHVlID0gaXNNb3VzZSA/IGV2dFtjXSA6IGV2dC50b3VjaGVzWzBdW2NdO1xuICAgIHJldHVybiBwb2ludFZhbHVlLnNldCh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyRG93bihldnQpIHtcbiAgICB2YXIgcG9pbnQgPSByZWFkUG9pbnQoZXZ0LCBzY3JvbGxBeGlzKTtcbiAgICBzdGFydERyYWcuc2V0KHBvaW50KTtcbiAgICBsYXN0RHJhZy5zZXQocG9pbnQpO1xuICAgIHJldHVybiBweFRvUGVyY2VudC5tZWFzdXJlKHN0YXJ0RHJhZy5nZXQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyTW92ZShldnQpIHtcbiAgICB2YXIgcG9pbnQgPSByZWFkUG9pbnQoZXZ0LCBzY3JvbGxBeGlzKTtcbiAgICB2YXIgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHZhciBkaWZmVGltZSA9IG5vd1RpbWUgLSBsYXN0TW92ZVRpbWU7XG5cbiAgICBpZiAoZGlmZlRpbWUgPj0gdHJhY2tJbnRlcnZhbCkge1xuICAgICAgaWYgKGRpZmZUaW1lID49IHRyYWNrVGltZSkgdHJhY2tQb2ludHMgPSBbXTtcbiAgICAgIHRyYWNrUG9pbnRzLnB1c2gocG9pbnQuZ2V0KCkpO1xuICAgICAgbGFzdE1vdmVUaW1lID0gbm93VGltZTtcbiAgICB9XG5cbiAgICBkaWZmRHJhZy5zZXQocG9pbnQpLnN1YnRyYWN0KGxhc3REcmFnKTtcbiAgICBsYXN0RHJhZy5zZXQocG9pbnQpO1xuICAgIHJldHVybiBweFRvUGVyY2VudC5tZWFzdXJlKGRpZmZEcmFnLmdldCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvaW50ZXJVcCgpIHtcbiAgICB2YXIgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHZhciBkaWZmVGltZSA9IG5vd1RpbWUgLSBsYXN0TW92ZVRpbWU7XG4gICAgdmFyIGN1cnJlbnRQb2ludCA9IGxhc3REcmFnLmdldCgpO1xuICAgIHZhciBmb3JjZSA9IHRyYWNrUG9pbnRzLnNsaWNlKC10cmFja0xlbmd0aCkubWFwKGZ1bmN0aW9uICh0cmFja1BvaW50KSB7XG4gICAgICByZXR1cm4gY3VycmVudFBvaW50IC0gdHJhY2tQb2ludDtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChwMSwgcDIpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhwMSkgPCBNYXRoLmFicyhwMikgPyAxIDogLTE7XG4gICAgfSlbMF07XG4gICAgbGFzdERyYWcuc2V0KGRpZmZUaW1lID4gdHJhY2tUaW1lIHx8ICFmb3JjZSA/IDAgOiBmb3JjZSk7XG4gICAgdHJhY2tQb2ludHMgPSBbXTtcbiAgICByZXR1cm4gcHhUb1BlcmNlbnQubWVhc3VyZShsYXN0RHJhZy5nZXQoKSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBwb2ludGVyRG93bjogcG9pbnRlckRvd24sXG4gICAgcG9pbnRlck1vdmU6IHBvaW50ZXJNb3ZlLFxuICAgIHBvaW50ZXJVcDogcG9pbnRlclVwLFxuICAgIHJlYWRQb2ludDogcmVhZFBvaW50XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBMaW1pdChwYXJhbXMpIHtcbiAgdmFyIG1pbiA9IHBhcmFtcy5taW4sXG4gICAgICBtYXggPSBwYXJhbXMubWF4O1xuICB2YXIgbGVuZ3RoID0gTWF0aC5hYnMobWluIC0gbWF4KTtcblxuICBmdW5jdGlvbiByZWFjaGVkTWluKG4pIHtcbiAgICByZXR1cm4gbiA8IG1pbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWNoZWRNYXgobikge1xuICAgIHJldHVybiBuID4gbWF4O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhY2hlZEFueShuKSB7XG4gICAgcmV0dXJuIHJlYWNoZWRNaW4obikgfHwgcmVhY2hlZE1heChuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU9mZnNldChuKSB7XG4gICAgaWYgKG1pbiA9PT0gbWF4KSByZXR1cm4gbjtcblxuICAgIHdoaWxlIChyZWFjaGVkTWluKG4pKSB7XG4gICAgICBuICs9IGxlbmd0aDtcbiAgICB9XG5cbiAgICB3aGlsZSAocmVhY2hlZE1heChuKSkge1xuICAgICAgbiAtPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG47XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKG4pIHtcbiAgICBpZiAoIXJlYWNoZWRBbnkobikpIHJldHVybiBuO1xuICAgIHJldHVybiByZWFjaGVkTWluKG4pID8gbWF4IDogbWluO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluKG4pIHtcbiAgICBpZiAoIXJlYWNoZWRBbnkobikpIHJldHVybiBuO1xuICAgIHJldHVybiByZWFjaGVkTWluKG4pID8gbWluIDogbWF4O1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY29uc3RyYWluOiBjb25zdHJhaW4sXG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgbG9vcDogbG9vcCxcbiAgICBtYXg6IG1heCxcbiAgICBtaW46IG1pbixcbiAgICByZWFjaGVkQW55OiByZWFjaGVkQW55LFxuICAgIHJlYWNoZWRNYXg6IHJlYWNoZWRNYXgsXG4gICAgcmVhY2hlZE1pbjogcmVhY2hlZE1pbixcbiAgICByZW1vdmVPZmZzZXQ6IHJlbW92ZU9mZnNldFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gUHhUb1BlcmNlbnQodmlld0luUHgpIHtcbiAgdmFyIHRvdGFsUGVyY2VudCA9IDEwMDtcblxuICBmdW5jdGlvbiBtZWFzdXJlKG4pIHtcbiAgICByZXR1cm4gbiAvIHZpZXdJblB4ICogdG90YWxQZXJjZW50O1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbWVhc3VyZTogbWVhc3VyZSxcbiAgICB0b3RhbFBlcmNlbnQ6IHRvdGFsUGVyY2VudFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsQm9keShwYXJhbXMpIHtcbiAgdmFyIGxvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgYmFzZVNwZWVkID0gcGFyYW1zLnNwZWVkLFxuICAgICAgYmFzZU1hc3MgPSBwYXJhbXMubWFzcztcbiAgdmFyIHJvdW5kVG9Ud29EZWNpbWFscyA9IHJvdW5kVG9EZWNpbWFscygyKTtcbiAgdmFyIHZlbG9jaXR5ID0gVmVjdG9yMUQoMCk7XG4gIHZhciBhY2NlbGVyYXRpb24gPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGF0dHJhY3Rpb24gPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGF0dHJhY3Rpb25EaXJlY3Rpb24gPSAwO1xuICB2YXIgc3BlZWQgPSBiYXNlU3BlZWQ7XG4gIHZhciBtYXNzID0gYmFzZU1hc3M7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xuICAgIGxvY2F0aW9uLmFkZCh2ZWxvY2l0eSk7XG4gICAgYWNjZWxlcmF0aW9uLm11bHRpcGx5KDApO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JjZSh2KSB7XG4gICAgdi5kaXZpZGUobWFzcyk7XG4gICAgYWNjZWxlcmF0aW9uLmFkZCh2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWsodikge1xuICAgIGF0dHJhY3Rpb24uc2V0KHYpLnN1YnRyYWN0KGxvY2F0aW9uKTtcbiAgICB2YXIgbWFnbml0dWRlID0gYXR0cmFjdGlvbi5nZXQoKTtcbiAgICB2YXIgbSA9IG1hcChtYWduaXR1ZGUsIDAsIDEwMCwgMCwgc3BlZWQpO1xuICAgIGF0dHJhY3Rpb25EaXJlY3Rpb24gPSBtYXRoU2lnbihhdHRyYWN0aW9uLmdldCgpKTtcbiAgICBhdHRyYWN0aW9uLm5vcm1hbGl6ZSgpLm11bHRpcGx5KG0pLnN1YnRyYWN0KHZlbG9jaXR5KTtcbiAgICBhcHBseUZvcmNlKGF0dHJhY3Rpb24pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHYpIHtcbiAgICB2YXIgZGlmZiA9IHYuZ2V0KCkgLSBsb2NhdGlvbi5nZXQoKTtcbiAgICB2YXIgZGlmZlJvdW5kZWQgPSByb3VuZFRvVHdvRGVjaW1hbHMoZGlmZik7XG4gICAgdmFyIGhhc1NldHRsZWQgPSAhZGlmZlJvdW5kZWQ7XG4gICAgaWYgKGhhc1NldHRsZWQpIGxvY2F0aW9uLnNldCh2KTtcbiAgICByZXR1cm4gaGFzU2V0dGxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gYXR0cmFjdGlvbkRpcmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZVNwZWVkKG4pIHtcbiAgICBzcGVlZCA9IG47XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VNYXNzKG4pIHtcbiAgICBtYXNzID0gbjtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUJhc2VTcGVlZCgpIHtcbiAgICByZXR1cm4gdXNlU3BlZWQoYmFzZVNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUJhc2VNYXNzKCkge1xuICAgIHJldHVybiB1c2VNYXNzKGJhc2VNYXNzKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIHNlZWs6IHNlZWssXG4gICAgc2V0dGxlOiBzZXR0bGUsXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgdXNlQmFzZU1hc3M6IHVzZUJhc2VNYXNzLFxuICAgIHVzZUJhc2VTcGVlZDogdXNlQmFzZVNwZWVkLFxuICAgIHVzZU1hc3M6IHVzZU1hc3MsXG4gICAgdXNlU3BlZWQ6IHVzZVNwZWVkXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxCb3VuZHMocGFyYW1zKSB7XG4gIHZhciBsaW1pdCA9IHBhcmFtcy5saW1pdCxcbiAgICAgIGxvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgc2Nyb2xsQm9keSA9IHBhcmFtcy5zY3JvbGxCb2R5O1xuICB2YXIgcHVsbEJhY2tUaHJlc2hvbGQgPSAxMDtcbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2hvdWxkQ29uc3RyYWluKHRhcmdldCkge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghbGltaXQucmVhY2hlZEFueSh0YXJnZXQuZ2V0KCkpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFsaW1pdC5yZWFjaGVkQW55KGxvY2F0aW9uLmdldCgpKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluKHRhcmdldCwgcG9pbnRlckRvd24pIHtcbiAgICBpZiAoIXNob3VsZENvbnN0cmFpbih0YXJnZXQpKSByZXR1cm47XG4gICAgdmFyIGZyaWN0aW9uID0gcG9pbnRlckRvd24gPyAwLjcgOiAwLjQ7XG4gICAgdmFyIGRpZmZUb1RhcmdldCA9IHRhcmdldC5nZXQoKSAtIGxvY2F0aW9uLmdldCgpO1xuICAgIHRhcmdldC5zdWJ0cmFjdChkaWZmVG9UYXJnZXQgKiBmcmljdGlvbik7XG5cbiAgICBpZiAoIXBvaW50ZXJEb3duICYmIE1hdGguYWJzKGRpZmZUb1RhcmdldCkgPCBwdWxsQmFja1RocmVzaG9sZCkge1xuICAgICAgdGFyZ2V0LnNldChsaW1pdC5jb25zdHJhaW4odGFyZ2V0LmdldCgpKSk7XG4gICAgICBzY3JvbGxCb2R5LnVzZVNwZWVkKDEwKS51c2VNYXNzKDMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShhY3RpdmUpIHtcbiAgICBkaXNhYmxlZCA9ICFhY3RpdmU7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjb25zdHJhaW46IGNvbnN0cmFpbixcbiAgICB0b2dnbGVBY3RpdmU6IHRvZ2dsZUFjdGl2ZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsQ29udGFpbihwYXJhbXMpIHtcbiAgdmFyIGFsaWdubWVudCA9IHBhcmFtcy5hbGlnbm1lbnQsXG4gICAgICBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIHZpZXdTaXplID0gcGFyYW1zLnZpZXdTaXplO1xuICB2YXIgc2Nyb2xsQm91bmRzID0gTGltaXQoe1xuICAgIG1pbjogLWNvbnRlbnRTaXplICsgdmlld1NpemUsXG4gICAgbWF4OiAwXG4gIH0pO1xuICB2YXIgYWxpZ25lZFdpdGhpblZpZXcgPSBbYWxpZ25tZW50Lm1lYXN1cmUoY29udGVudFNpemUpXTtcbiAgdmFyIGNvbnRlbnRFeGNlZWRzVmlldyA9IGNvbnRlbnRTaXplID4gdmlld1NpemU7XG5cbiAgZnVuY3Rpb24gZmluZER1cGxpY2F0ZXMoc2Nyb2xsU25hcHMpIHtcbiAgICB2YXIgc3RhcnRTbmFwID0gc2Nyb2xsU25hcHNbMF07XG4gICAgdmFyIGVuZFNuYXAgPSBzY3JvbGxTbmFwc1tzY3JvbGxTbmFwcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgbWluID0gc2Nyb2xsU25hcHMubGFzdEluZGV4T2Yoc3RhcnRTbmFwKSArIDE7XG4gICAgdmFyIG1heCA9IHNjcm9sbFNuYXBzLmluZGV4T2YoZW5kU25hcCk7XG4gICAgcmV0dXJuIExpbWl0KHtcbiAgICAgIG1pbjogbWluLFxuICAgICAgbWF4OiBtYXhcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoc2Nyb2xsU25hcHMsIHRyaW0pIHtcbiAgICB2YXIgY29udGFpbmVkU25hcHMgPSBzY3JvbGxTbmFwcy5tYXAoc2Nyb2xsQm91bmRzLmNvbnN0cmFpbik7XG5cbiAgICB2YXIgX2EgPSBmaW5kRHVwbGljYXRlcyhjb250YWluZWRTbmFwcyksXG4gICAgICAgIG1pbiA9IF9hLm1pbixcbiAgICAgICAgbWF4ID0gX2EubWF4O1xuXG4gICAgaWYgKCFjb250ZW50RXhjZWVkc1ZpZXcpIHJldHVybiBhbGlnbmVkV2l0aGluVmlldztcbiAgICBpZiAoIXRyaW0pIHJldHVybiBjb250YWluZWRTbmFwcztcbiAgICByZXR1cm4gY29udGFpbmVkU25hcHMuc2xpY2UobWluIC0gMSwgbWF4ICsgMSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxMaW1pdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgbG9vcCA9IHBhcmFtcy5sb29wO1xuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoc2Nyb2xsU25hcHMpIHtcbiAgICB2YXIgc3RhcnRTbmFwID0gc2Nyb2xsU25hcHNbMF07XG4gICAgdmFyIGVuZFNuYXAgPSBzY3JvbGxTbmFwc1tzY3JvbGxTbmFwcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgbWluID0gbG9vcCA/IHN0YXJ0U25hcCAtIGNvbnRlbnRTaXplIDogZW5kU25hcDtcbiAgICB2YXIgbWF4ID0gc3RhcnRTbmFwO1xuICAgIHJldHVybiBMaW1pdCh7XG4gICAgICBtaW46IG1pbixcbiAgICAgIG1heDogbWF4XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxMb29wZXIocGFyYW1zKSB7XG4gIHZhciBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIGxvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBweFRvUGVyY2VudCA9IHBhcmFtcy5weFRvUGVyY2VudDtcbiAgdmFyIG1pbiA9IGxpbWl0Lm1pbiArIHB4VG9QZXJjZW50Lm1lYXN1cmUoMC4xKTtcbiAgdmFyIG1heCA9IGxpbWl0Lm1heCArIHB4VG9QZXJjZW50Lm1lYXN1cmUoMC4xKTtcblxuICB2YXIgX2EgPSBMaW1pdCh7XG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXhcbiAgfSksXG4gICAgICByZWFjaGVkTWluID0gX2EucmVhY2hlZE1pbixcbiAgICAgIHJlYWNoZWRNYXggPSBfYS5yZWFjaGVkTWF4O1xuXG4gIGZ1bmN0aW9uIHNob3VsZExvb3AoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkgcmV0dXJuIHJlYWNoZWRNYXgobG9jYXRpb24uZ2V0KCkpO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IC0xKSByZXR1cm4gcmVhY2hlZE1pbihsb2NhdGlvbi5nZXQoKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcCh2ZWN0b3JzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIXNob3VsZExvb3AoZGlyZWN0aW9uKSkgcmV0dXJuO1xuICAgIHZhciBsb29wRGlzdGFuY2UgPSBjb250ZW50U2l6ZSAqIChkaXJlY3Rpb24gKiAtMSk7XG4gICAgdmVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5hZGQobG9vcERpc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGxvb3A6IGxvb3BcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbFByb2dyZXNzKHBhcmFtcykge1xuICB2YXIgX2EgPSBwYXJhbXMubGltaXQsXG4gICAgICBtYXggPSBfYS5tYXgsXG4gICAgICBzY3JvbGxMZW5ndGggPSBfYS5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0KG4pIHtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0gbiAtIG1heDtcbiAgICByZXR1cm4gY3VycmVudExvY2F0aW9uIC8gLXNjcm9sbExlbmd0aDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGdldDogZ2V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxTbmFwKHBhcmFtcykge1xuICB2YXIgc25hcFNpemVzID0gcGFyYW1zLnNuYXBTaXplcyxcbiAgICAgIGFsaWdubWVudCA9IHBhcmFtcy5hbGlnbm1lbnQsXG4gICAgICBsb29wID0gcGFyYW1zLmxvb3A7XG4gIHZhciBhbGlnbm1lbnRzID0gc25hcFNpemVzLm1hcChhbGlnbm1lbnQubWVhc3VyZSk7XG4gIHZhciBkaXN0YW5jZXNCZXR3ZWVuID0gZGlzdGFuY2VzQmV0d2VlblNjcm9sbFNuYXBzKCk7XG5cbiAgZnVuY3Rpb24gZGlzdGFuY2VzQmV0d2VlblNjcm9sbFNuYXBzKCkge1xuICAgIHZhciBsaW1pdCA9IExpbWl0KHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogc25hcFNpemVzLmxlbmd0aCAtIDFcbiAgICB9KTtcbiAgICB2YXIgY291bnRlciA9IENvdW50ZXIoe1xuICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICBsb29wOiBsb29wXG4gICAgfSk7XG4gICAgcmV0dXJuIHNuYXBTaXplcy5tYXAoZnVuY3Rpb24gKHNpemUsIGluZGV4KSB7XG4gICAgICB2YXIgbmV4dCA9IGNvdW50ZXIuc2V0KGluZGV4ICsgMSkuZ2V0KCk7XG4gICAgICByZXR1cm4gc2l6ZSArIGFsaWdubWVudHNbaW5kZXhdIC0gYWxpZ25tZW50c1tuZXh0XTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoaW5kZXgpIHtcbiAgICB2YXIgc2l6ZXMgPSBkaXN0YW5jZXNCZXR3ZWVuLnNsaWNlKDAsIGluZGV4KTtcbiAgICByZXR1cm4gc2l6ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgICByZXR1cm4gYSAtIHM7XG4gICAgfSwgYWxpZ25tZW50c1swXSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxUYXJnZXQocGFyYW1zKSB7XG4gIHZhciBsb29wID0gcGFyYW1zLmxvb3AsXG4gICAgICBsaW1pdCA9IHBhcmFtcy5saW1pdCxcbiAgICAgIHNjcm9sbFNuYXBzID0gcGFyYW1zLnNjcm9sbFNuYXBzLFxuICAgICAgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemU7XG4gIHZhciByZWFjaGVkTWF4ID0gbGltaXQucmVhY2hlZE1heCxcbiAgICAgIHJlYWNoZWRBbnkgPSBsaW1pdC5yZWFjaGVkQW55LFxuICAgICAgcmVtb3ZlT2Zmc2V0ID0gbGltaXQucmVtb3ZlT2Zmc2V0O1xuXG4gIGZ1bmN0aW9uIG1pbkRpc3RhbmNlKGQxLCBkMikge1xuICAgIHJldHVybiBNYXRoLmFicyhkMSkgPCBNYXRoLmFicyhkMikgPyBkMSA6IGQyO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZFRhcmdldFNuYXAodGFyZ2V0KSB7XG4gICAgdmFyIGRpc3RhbmNlID0gcmVtb3ZlT2Zmc2V0KHRhcmdldCk7XG4gICAgdmFyIGFzY0RpZmZzVG9TbmFwcyA9IHNjcm9sbFNuYXBzLm1hcChmdW5jdGlvbiAoc2Nyb2xsU25hcCkge1xuICAgICAgcmV0dXJuIHNjcm9sbFNuYXAgLSBkaXN0YW5jZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGRpZmZUb1NuYXApIHtcbiAgICAgIHJldHVybiBzaG9ydGN1dChkaWZmVG9TbmFwLCAwKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGRpZmYsIGkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpZmY6IGRpZmYsXG4gICAgICAgIGluZGV4OiBpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGQxLCBkMikge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGQxLmRpZmYpIC0gTWF0aC5hYnMoZDIuZGlmZik7XG4gICAgfSk7XG4gICAgdmFyIGluZGV4ID0gYXNjRGlmZnNUb1NuYXBzWzBdLmluZGV4O1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvcnRjdXQodGFyZ2V0LCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgdDEgPSB0YXJnZXQ7XG4gICAgdmFyIHQyID0gdGFyZ2V0ICsgY29udGVudFNpemU7XG4gICAgdmFyIHQzID0gdGFyZ2V0IC0gY29udGVudFNpemU7XG4gICAgaWYgKCFsb29wKSByZXR1cm4gdDE7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHJldHVybiBtaW5EaXN0YW5jZShtaW5EaXN0YW5jZSh0MSwgdDIpLCB0Myk7XG4gICAgdmFyIHNob3J0ZXN0ID0gbWluRGlzdGFuY2UodDEsIGRpcmVjdGlvbiA9PT0gMSA/IHQyIDogdDMpO1xuICAgIHJldHVybiBNYXRoLmFicyhzaG9ydGVzdCkgKiBkaXJlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kVGFyZ2V0SW5kZXgodGFyZ2V0LCBpbmRleCkge1xuICAgIHZhciByZWFjaGVkQm91bmQgPSAhbG9vcCAmJiByZWFjaGVkQW55KHRhcmdldCk7XG4gICAgaWYgKCFyZWFjaGVkQm91bmQpIHJldHVybiBpbmRleDtcbiAgICB2YXIgX2EgPSBwYXJhbXMuaW5kZXgsXG4gICAgICAgIG1pbiA9IF9hLm1pbixcbiAgICAgICAgbWF4ID0gX2EubWF4O1xuICAgIHJldHVybiByZWFjaGVkTWF4KHRhcmdldCkgPyBtaW4gOiBtYXg7XG4gIH1cblxuICBmdW5jdGlvbiBieUluZGV4KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgZGlmZlRvU25hcCA9IHNjcm9sbFNuYXBzW2luZGV4XSAtIHBhcmFtcy50YXJnZXQuZ2V0KCk7XG4gICAgdmFyIGRpc3RhbmNlID0gc2hvcnRjdXQoZGlmZlRvU25hcCwgZGlyZWN0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ5RGlzdGFuY2UoZGlzdGFuY2UsIHNuYXApIHtcbiAgICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRhcmdldC5nZXQoKSArIGRpc3RhbmNlO1xuICAgIHZhciB0YXJnZXRTbmFwID0gZmluZFRhcmdldFNuYXAodGFyZ2V0KTtcbiAgICB2YXIgaW5kZXggPSBmaW5kVGFyZ2V0SW5kZXgodGFyZ2V0LCB0YXJnZXRTbmFwLmluZGV4KTtcbiAgICB2YXIgcmVhY2hlZEJvdW5kID0gIWxvb3AgJiYgcmVhY2hlZEFueSh0YXJnZXQpO1xuICAgIGlmICghc25hcCB8fCByZWFjaGVkQm91bmQpIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9O1xuICAgIHZhciBkaWZmVG9TbmFwID0gc2Nyb2xsU25hcHNbaW5kZXhdIC0gdGFyZ2V0U25hcC5kaXN0YW5jZTtcbiAgICB2YXIgc25hcERpc3RhbmNlID0gZGlzdGFuY2UgKyBzaG9ydGN1dChkaWZmVG9TbmFwLCAwKTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZGlzdGFuY2U6IHNuYXBEaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBieURpc3RhbmNlOiBieURpc3RhbmNlLFxuICAgIGJ5SW5kZXg6IGJ5SW5kZXgsXG4gICAgc2hvcnRjdXQ6IHNob3J0Y3V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxUbyhwYXJhbXMpIHtcbiAgdmFyIGluZGV4Q3VycmVudCA9IHBhcmFtcy5pbmRleCxcbiAgICAgIHNjcm9sbFRhcmdldCA9IHBhcmFtcy5zY3JvbGxUYXJnZXQsXG4gICAgICBhbmltYXRpb24gPSBwYXJhbXMuYW5pbWF0aW9uO1xuICB2YXIgaW5kZXhQcmV2aW91cyA9IHBhcmFtcy5pbmRleFByZXZpb3VzLFxuICAgICAgZXZlbnRzID0gcGFyYW1zLmV2ZW50cyxcbiAgICAgIHRhcmdldERpc3RhbmNlID0gcGFyYW1zLnRhcmdldDtcblxuICBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQpIHtcbiAgICB2YXIgZGlzdGFuY2VEaWZmID0gdGFyZ2V0LmRpc3RhbmNlO1xuICAgIHZhciBpbmRleERpZmYgPSB0YXJnZXQuaW5kZXggIT09IGluZGV4Q3VycmVudC5nZXQoKTtcblxuICAgIGlmIChkaXN0YW5jZURpZmYpIHtcbiAgICAgIGFuaW1hdGlvbi5zdGFydCgpO1xuICAgICAgdGFyZ2V0RGlzdGFuY2UuYWRkKGRpc3RhbmNlRGlmZik7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4RGlmZikge1xuICAgICAgaW5kZXhQcmV2aW91cy5zZXQoaW5kZXhDdXJyZW50LmdldCgpKTtcbiAgICAgIGluZGV4Q3VycmVudC5zZXQodGFyZ2V0LmluZGV4KTtcbiAgICAgIGV2ZW50cy5lbWl0KCdzZWxlY3QnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXN0YW5jZShuLCBzbmFwKSB7XG4gICAgdmFyIHRhcmdldCA9IHNjcm9sbFRhcmdldC5ieURpc3RhbmNlKG4sIHNuYXApO1xuICAgIHNjcm9sbFRvKHRhcmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleChuLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBpbmRleEN1cnJlbnQuY2xvbmUoKS5zZXQobik7XG4gICAgdmFyIHRhcmdldCA9IHNjcm9sbFRhcmdldC5ieUluZGV4KHRhcmdldEluZGV4LmdldCgpLCBkaXJlY3Rpb24pO1xuICAgIHNjcm9sbFRvKHRhcmdldCk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgaW5kZXg6IGluZGV4XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTbGlkZUxvb3BlcihwYXJhbXMpIHtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcyxcbiAgICAgIHNjcm9sbExvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgc2xpZGVzSW5WaWV3ID0gcGFyYW1zLnNsaWRlc0luVmlldyxcbiAgICAgIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XG4gIHZhciBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIHZpZXdTaXplID0gcGFyYW1zLnZpZXdTaXplLFxuICAgICAgc2xpZGVTaXplcyA9IHBhcmFtcy5zbGlkZVNpemVzLFxuICAgICAgc2Nyb2xsU25hcHMgPSBwYXJhbXMuc2Nyb2xsU25hcHM7XG4gIHZhciBhc2NJdGVtcyA9IGFycmF5S2V5cyhzbGlkZVNpemVzKTtcbiAgdmFyIGRlc2NJdGVtcyA9IGFycmF5S2V5cyhzbGlkZVNpemVzKS5yZXZlcnNlKCk7XG4gIHZhciBsb29wUG9pbnRzID0gc3RhcnRQb2ludHMoKS5jb25jYXQoZW5kUG9pbnRzKCkpO1xuICB2YXIgbG9vcFN0eWxlID0gYXhpcy5zY3JvbGwgPT09ICd4JyA/ICdsZWZ0JyA6ICd0b3AnO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVNsaWRlU2l6ZXMoaW5kZXhlcywgZnJvbSkge1xuICAgIHJldHVybiBpbmRleGVzLnJlZHVjZShmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgcmV0dXJuIGEgLSBzbGlkZVNpemVzW2ldO1xuICAgIH0sIGZyb20pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVzSW5HYXAoaW5kZXhlcywgZ2FwKSB7XG4gICAgcmV0dXJuIGluZGV4ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICB2YXIgcmVtYWluaW5nR2FwID0gcmVtb3ZlU2xpZGVTaXplcyhhLCBnYXApO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZ0dhcCA+IDAgPyBhLmNvbmNhdChbaV0pIDogYTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kTG9vcFBvaW50cyhpbmRleGVzLCBlZGdlKSB7XG4gICAgdmFyIGlzU3RhcnRFZGdlID0gZWRnZSA9PT0gJ3N0YXJ0JztcbiAgICB2YXIgb2Zmc2V0ID0gaXNTdGFydEVkZ2UgPyAtY29udGVudFNpemUgOiBjb250ZW50U2l6ZTtcbiAgICB2YXIgc2xpZGVCb3VuZHMgPSBzbGlkZXNJblZpZXcuZmluZFNsaWRlQm91bmRzKG9mZnNldCk7XG4gICAgcmV0dXJuIGluZGV4ZXMubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdmFyIGluaXRpYWwgPSBpc1N0YXJ0RWRnZSA/IDAgOiAtY29udGVudFNpemU7XG4gICAgICB2YXIgYWx0ZXJlZCA9IGlzU3RhcnRFZGdlID8gY29udGVudFNpemUgOiAwO1xuICAgICAgdmFyIGJvdW5kcyA9IHNsaWRlQm91bmRzLmZpbHRlcihmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5pbmRleCA9PT0gaW5kZXg7XG4gICAgICB9KVswXTtcbiAgICAgIHZhciBwb2ludCA9IGJvdW5kc1tpc1N0YXJ0RWRnZSA/ICdlbmQnIDogJ3N0YXJ0J107XG5cbiAgICAgIHZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxMb2NhdGlvbi5nZXQoKSA+IHBvaW50ID8gaW5pdGlhbCA6IGFsdGVyZWQ7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIGdldFRhcmdldDogZ2V0VGFyZ2V0LFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGxvY2F0aW9uOiAtMVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UG9pbnRzKCkge1xuICAgIHZhciBnYXAgPSBzY3JvbGxTbmFwc1swXSAtIDE7XG4gICAgdmFyIGluZGV4ZXMgPSBzbGlkZXNJbkdhcChkZXNjSXRlbXMsIGdhcCk7XG4gICAgcmV0dXJuIGZpbmRMb29wUG9pbnRzKGluZGV4ZXMsICdlbmQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZFBvaW50cygpIHtcbiAgICB2YXIgZ2FwID0gdmlld1NpemUgLSBzY3JvbGxTbmFwc1swXSAtIDE7XG4gICAgdmFyIGluZGV4ZXMgPSBzbGlkZXNJbkdhcChhc2NJdGVtcywgZ2FwKTtcbiAgICByZXR1cm4gZmluZExvb3BQb2ludHMoaW5kZXhlcywgJ3N0YXJ0Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5Mb29wKCkge1xuICAgIHJldHVybiBsb29wUG9pbnRzLmV2ZXJ5KGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICB2YXIgb3RoZXJJbmRleGVzID0gYXNjSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICE9PSBpbmRleDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlbW92ZVNsaWRlU2l6ZXMob3RoZXJJbmRleGVzLCB2aWV3U2l6ZSkgPD0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3Aoc2xpZGVzKSB7XG4gICAgbG9vcFBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChsb29wUG9pbnQpIHtcbiAgICAgIHZhciBnZXRUYXJnZXQgPSBsb29wUG9pbnQuZ2V0VGFyZ2V0LFxuICAgICAgICAgIGxvY2F0aW9uID0gbG9vcFBvaW50LmxvY2F0aW9uLFxuICAgICAgICAgIGluZGV4ID0gbG9vcFBvaW50LmluZGV4O1xuICAgICAgdmFyIHRhcmdldCA9IGdldFRhcmdldCgpO1xuXG4gICAgICBpZiAodGFyZ2V0ICE9PSBsb2NhdGlvbikge1xuICAgICAgICBzbGlkZXNbaW5kZXhdLnN0eWxlW2xvb3BTdHlsZV0gPSBkaXJlY3Rpb24uYXBwbHlUbyh0YXJnZXQpICsgXCIlXCI7XG4gICAgICAgIGxvb3BQb2ludC5sb2NhdGlvbiA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKHNsaWRlcykge1xuICAgIGxvb3BQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgc2xpZGVzW2luZGV4XS5zdHlsZVtsb29wU3R5bGVdID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjYW5Mb29wOiBjYW5Mb29wLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBsb29wOiBsb29wLFxuICAgIGxvb3BQb2ludHM6IGxvb3BQb2ludHNcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlRm9jdXMocGFyYW1zKSB7XG4gIHZhciBzY3JvbGxUbyA9IHBhcmFtcy5zY3JvbGxUbyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsID0gcGFyYW1zLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgcm9vdCA9IHBhcmFtcy5yb290O1xuICB2YXIgZXZlbnRTdG9yZSA9IEV2ZW50U3RvcmUoKTtcbiAgdmFyIHJlbW92ZUFsbEV2ZW50cyA9IGV2ZW50U3RvcmUucmVtb3ZlQWxsO1xuICB2YXIgbGFzdFRhYlByZXNzVGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJUYWJQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlICE9PSA5KSByZXR1cm47XG4gICAgbGFzdFRhYlByZXNzVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRm9jdXNFdmVudChzbGlkZSwgaW5kZXgpIHtcbiAgICB2YXIgZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHZhciBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgZGlmZlRpbWUgPSBub3dUaW1lIC0gbGFzdFRhYlByZXNzVGltZTtcbiAgICAgIGlmIChkaWZmVGltZSA+IDEwKSByZXR1cm47XG4gICAgICByb290LnNjcm9sbExlZnQgPSAwO1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgc2Nyb2xsVG8uaW5kZXgoc2VsZWN0ZWRJbmRleCwgMCk7XG4gICAgfTtcblxuICAgIGV2ZW50U3RvcmUuYWRkKHNsaWRlLCAnZm9jdXMnLCBmb2N1cywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBY3RpdmF0aW9uRXZlbnRzKHNsaWRlcykge1xuICAgIGV2ZW50U3RvcmUuYWRkKGRvY3VtZW50LCAna2V5ZG93bicsIHJlZ2lzdGVyVGFiUHJlc3MsIGZhbHNlKTtcbiAgICBzbGlkZXMuZm9yRWFjaChhZGRGb2N1c0V2ZW50KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZEFjdGl2YXRpb25FdmVudHM6IGFkZEFjdGl2YXRpb25FdmVudHMsXG4gICAgcmVtb3ZlQWxsRXZlbnRzOiByZW1vdmVBbGxFdmVudHNcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlc0luVmlldyhwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgc2xpZGVTaXplcyA9IHBhcmFtcy5zbGlkZVNpemVzLFxuICAgICAgdmlld1NpemUgPSBwYXJhbXMudmlld1NpemU7XG4gIHZhciBpblZpZXdUaHJlc2hvbGQgPSBwYXJhbXMuaW5WaWV3VGhyZXNob2xkLFxuICAgICAgbG9vcCA9IHBhcmFtcy5sb29wO1xuICB2YXIgdGhyZXNob2xkID0gTWF0aC5taW4oTWF0aC5tYXgoaW5WaWV3VGhyZXNob2xkLCAwLjAxKSwgMC45OSk7XG4gIHZhciBzY3JvbGxTbmFwcyA9IGFycmF5S2V5cyhzbGlkZVNpemVzKS5tYXAoc2Nyb2xsU25hcCk7XG4gIHZhciBvZmZzZXRzID0gbG9vcCA/IFswLCBjb250ZW50U2l6ZSwgLWNvbnRlbnRTaXplXSA6IFswXTtcbiAgdmFyIHNsaWRlQm91bmRzID0gb2Zmc2V0cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGxvb3BPZmZzZXQpIHtcbiAgICByZXR1cm4gYS5jb25jYXQoZmluZFNsaWRlQm91bmRzKGxvb3BPZmZzZXQsIHRocmVzaG9sZCkpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsU25hcChpbmRleCkge1xuICAgIHZhciBzcGFuID0gc2xpZGVTaXplcy5zbGljZSgwLCBpbmRleCk7XG4gICAgcmV0dXJuIHNwYW4ucmVkdWNlKGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgICByZXR1cm4gYSAtIHM7XG4gICAgfSwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kU2xpZGVCb3VuZHMob2Zmc2V0LCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgdGhyZXNob2xkcyA9IHNsaWRlU2l6ZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcyAqICh0aHJlc2hvbGQgfHwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNjcm9sbFNuYXBzLm1hcChmdW5jdGlvbiAoc25hcCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzbmFwIC0gc2xpZGVTaXplc1tpbmRleF0gKyB0aHJlc2hvbGRzW2luZGV4XSArIG9mZnNldCxcbiAgICAgICAgZW5kOiBzbmFwICsgdmlld1NpemUgLSB0aHJlc2hvbGRzW2luZGV4XSArIG9mZnNldCxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2sobG9jYXRpb24pIHtcbiAgICByZXR1cm4gc2xpZGVCb3VuZHMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBzbGlkZUJvdW5kKSB7XG4gICAgICB2YXIgaW5kZXggPSBzbGlkZUJvdW5kLmluZGV4LFxuICAgICAgICAgIHN0YXJ0ID0gc2xpZGVCb3VuZC5zdGFydCxcbiAgICAgICAgICBlbmQgPSBzbGlkZUJvdW5kLmVuZDtcbiAgICAgIHZhciBpbkxpc3QgPSBsaXN0LmluZGV4T2YoaW5kZXgpICE9PSAtMTtcbiAgICAgIHZhciBpblZpZXcgPSBzdGFydCA8IGxvY2F0aW9uICYmIGVuZCA+IGxvY2F0aW9uO1xuICAgICAgcmV0dXJuICFpbkxpc3QgJiYgaW5WaWV3ID8gbGlzdC5jb25jYXQoW2luZGV4XSkgOiBsaXN0O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNoZWNrOiBjaGVjayxcbiAgICBmaW5kU2xpZGVCb3VuZHM6IGZpbmRTbGlkZUJvdW5kc1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gVHJhbnNsYXRlKHBhcmFtcykge1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzLFxuICAgICAgY29udGFpbmVyID0gcGFyYW1zLmNvbnRhaW5lcixcbiAgICAgIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XG4gIHZhciBjb250YWluZXJTdHlsZSA9IGNvbnRhaW5lci5zdHlsZTtcbiAgdmFyIHRyYW5zbGF0ZSA9IGF4aXMuc2Nyb2xsID09PSAneCcgPyB4IDogeTtcbiAgdmFyIHJvdW5kVG9Ud29EZWNpbWFscyA9IHJvdW5kVG9EZWNpbWFscygyKTtcbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIHZhciBsb2NhdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24geChuKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlM2QoXCIgKyBuICsgXCIlLDBweCwwcHgpXCI7XG4gIH1cblxuICBmdW5jdGlvbiB5KG4pIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUzZCgwcHgsXCIgKyBuICsgXCIlLDBweClcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvKHYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm91bmRUb1R3b0RlY2ltYWxzKHYuZ2V0KCkpO1xuICAgIGlmIChkaXNhYmxlZCB8fCBsb2NhdGlvbiA9PT0gdGFyZ2V0KSByZXR1cm47XG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLnRyYW5zZm9ybTtcbiAgICBjb250YWluZXJTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGUoZGlyZWN0aW9uLmFwcGx5VG8odGFyZ2V0KSk7XG4gICAgbG9jYXRpb24gPSB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBY3RpdmUoYWN0aXZlKSB7XG4gICAgZGlzYWJsZWQgPSAhYWN0aXZlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgY29udGFpbmVyU3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgbG9jYXRpb24gPSAwO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY2xlYXI6IGNsZWFyLFxuICAgIHRvOiB0byxcbiAgICB0b2dnbGVBY3RpdmU6IHRvZ2dsZUFjdGl2ZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRW5naW5lKHJvb3QsIGNvbnRhaW5lciwgc2xpZGVzLCBvcHRpb25zLCBldmVudHMpIHtcbiAgLy8gT3B0aW9uc1xuICB2YXIgYWxpZ24gPSBvcHRpb25zLmFsaWduLFxuICAgICAgc2Nyb2xsQXhpcyA9IG9wdGlvbnMuYXhpcyxcbiAgICAgIGNvbnRlbnREaXJlY3Rpb24gPSBvcHRpb25zLmRpcmVjdGlvbixcbiAgICAgIHN0YXJ0SW5kZXggPSBvcHRpb25zLnN0YXJ0SW5kZXgsXG4gICAgICBpblZpZXdUaHJlc2hvbGQgPSBvcHRpb25zLmluVmlld1RocmVzaG9sZCxcbiAgICAgIGxvb3AgPSBvcHRpb25zLmxvb3AsXG4gICAgICBzcGVlZCA9IG9wdGlvbnMuc3BlZWQsXG4gICAgICBkcmFnRnJlZSA9IG9wdGlvbnMuZHJhZ0ZyZWUsXG4gICAgICBzbGlkZXNUb1Njcm9sbCA9IG9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICBjb250YWluU2Nyb2xsID0gb3B0aW9ucy5jb250YWluU2Nyb2xsOyAvLyBNZWFzdXJlbWVudHNcblxuICB2YXIgYXhpcyA9IEF4aXMoc2Nyb2xsQXhpcyk7XG4gIHZhciBweFRvUGVyY2VudCA9IFB4VG9QZXJjZW50KGF4aXMubWVhc3VyZShjb250YWluZXIpKTtcbiAgdmFyIHZpZXdTaXplID0gcHhUb1BlcmNlbnQudG90YWxQZXJjZW50O1xuICB2YXIgc2xpZGVTaXplcyA9IHNsaWRlcy5tYXAoYXhpcy5tZWFzdXJlKS5tYXAocHhUb1BlcmNlbnQubWVhc3VyZSk7XG4gIHZhciBzbGlkZUluZGV4ZXMgPSBhcnJheUtleXMoc2xpZGVTaXplcyk7XG4gIHZhciBncm91cGVkU2l6ZXMgPSBncm91cEFycmF5KHNsaWRlU2l6ZXMsIHNsaWRlc1RvU2Nyb2xsKTtcbiAgdmFyIHNuYXBTaXplcyA9IGdyb3VwZWRTaXplcy5tYXAoZnVuY3Rpb24gKGcpIHtcbiAgICByZXR1cm4gZy5yZWR1Y2UoZnVuY3Rpb24gKGEsIHMpIHtcbiAgICAgIHJldHVybiBhICsgcztcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBjb250ZW50U2l6ZSA9IHNsaWRlU2l6ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgcmV0dXJuIGEgKyBzO1xuICB9LCAwKTtcbiAgdmFyIGFsaWdubWVudCA9IEFsaWdubWVudCh7XG4gICAgYWxpZ246IGFsaWduLFxuICAgIHZpZXdTaXplOiB2aWV3U2l6ZVxuICB9KTtcbiAgdmFyIHNjcm9sbFNuYXAgPSBTY3JvbGxTbmFwKHtcbiAgICBzbmFwU2l6ZXM6IHNuYXBTaXplcyxcbiAgICBhbGlnbm1lbnQ6IGFsaWdubWVudCxcbiAgICBsb29wOiBsb29wXG4gIH0pO1xuICB2YXIgZGVmYXVsdFNuYXBzID0gYXJyYXlLZXlzKHNuYXBTaXplcykubWFwKHNjcm9sbFNuYXAubWVhc3VyZSk7XG4gIHZhciBjb250YWluID0gU2Nyb2xsQ29udGFpbih7XG4gICAgYWxpZ25tZW50OiBhbGlnbm1lbnQsXG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgIHZpZXdTaXplOiB2aWV3U2l6ZVxuICB9KTtcbiAgdmFyIHNob3VsZENvbnRhaW4gPSAhbG9vcCAmJiBjb250YWluU2Nyb2xsICE9PSAnJztcbiAgdmFyIHRyaW1TbmFwcyA9IGNvbnRhaW5TY3JvbGwgPT09ICd0cmltU25hcHMnO1xuICB2YXIgY29udGFpbmVkU25hcHMgPSBjb250YWluLm1lYXN1cmUoZGVmYXVsdFNuYXBzLCB0cmltU25hcHMpO1xuICB2YXIgc2Nyb2xsU25hcHMgPSBzaG91bGRDb250YWluID8gY29udGFpbmVkU25hcHMgOiBkZWZhdWx0U25hcHM7XG4gIHZhciBzY3JvbGxMaW1pdCA9IFNjcm9sbExpbWl0KHtcbiAgICBsb29wOiBsb29wLFxuICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZVxuICB9KTtcbiAgdmFyIGxpbWl0ID0gc2Nyb2xsTGltaXQubWVhc3VyZShzY3JvbGxTbmFwcyk7XG4gIHZhciBkaXJlY3Rpb24gPSBEaXJlY3Rpb24oY29udGVudERpcmVjdGlvbik7IC8vIEluZGV4XG5cbiAgdmFyIGluZGV4TWF4ID0gTWF0aC5tYXgoMCwgc2Nyb2xsU25hcHMubGVuZ3RoIC0gMSk7XG4gIHZhciBpbmRleFNwYW4gPSBMaW1pdCh7XG4gICAgbWluOiAwLFxuICAgIG1heDogaW5kZXhNYXhcbiAgfSk7XG4gIHZhciBpbmRleCA9IENvdW50ZXIoe1xuICAgIGxpbWl0OiBpbmRleFNwYW4sXG4gICAgc3RhcnQ6IHN0YXJ0SW5kZXgsXG4gICAgbG9vcDogbG9vcFxuICB9KTtcbiAgdmFyIGluZGV4UHJldmlvdXMgPSBpbmRleC5jbG9uZSgpOyAvLyBEcmF3XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoIWxvb3ApIHtcbiAgICAgIGVuZ2luZS5zY3JvbGxCb3VuZHMuY29uc3RyYWluKHRhcmdldCwgZW5naW5lLmRyYWdIYW5kbGVyLnBvaW50ZXJEb3duKCkpO1xuICAgIH1cblxuICAgIGVuZ2luZS5zY3JvbGxCb2R5LnNlZWsodGFyZ2V0KS51cGRhdGUoKTtcbiAgICB2YXIgc2V0dGxlZCA9IGVuZ2luZS5zY3JvbGxCb2R5LnNldHRsZSh0YXJnZXQpO1xuXG4gICAgaWYgKHNldHRsZWQgJiYgIWVuZ2luZS5kcmFnSGFuZGxlci5wb2ludGVyRG93bigpKSB7XG4gICAgICBlbmdpbmUuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIGV2ZW50cy5lbWl0KCdzZXR0bGUnKTtcbiAgICB9XG5cbiAgICBpZiAoIXNldHRsZWQpIHtcbiAgICAgIGV2ZW50cy5lbWl0KCdzY3JvbGwnKTtcbiAgICB9XG5cbiAgICBpZiAobG9vcCkge1xuICAgICAgZW5naW5lLnNjcm9sbExvb3Blci5sb29wKGxvb3BWZWN0b3JzLCBlbmdpbmUuc2Nyb2xsQm9keS5kaXJlY3Rpb24oKSk7XG4gICAgICBlbmdpbmUuc2xpZGVMb29wZXIubG9vcChzbGlkZXMpO1xuICAgIH1cblxuICAgIGVuZ2luZS50cmFuc2xhdGUudG8obG9jYXRpb24pO1xuICAgIGVuZ2luZS5hbmltYXRpb24ucHJvY2VlZCgpO1xuICB9OyAvLyBTaGFyZWRcblxuXG4gIHZhciBhbmltYXRpb24gPSBBbmltYXRpb24odXBkYXRlKTtcbiAgdmFyIHN0YXJ0TG9jYXRpb24gPSBzY3JvbGxTbmFwc1tpbmRleC5nZXQoKV07XG4gIHZhciBsb2NhdGlvbiA9IFZlY3RvcjFEKHN0YXJ0TG9jYXRpb24pO1xuICB2YXIgdGFyZ2V0ID0gVmVjdG9yMUQoc3RhcnRMb2NhdGlvbik7XG4gIHZhciBsb29wVmVjdG9ycyA9IFtsb2NhdGlvbiwgdGFyZ2V0XTtcbiAgdmFyIHNjcm9sbEJvZHkgPSBTY3JvbGxCb2R5KHtcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgc3BlZWQ6IHNwZWVkLFxuICAgIG1hc3M6IDFcbiAgfSk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSBTY3JvbGxUYXJnZXQoe1xuICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZSxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgbGltaXQ6IGxpbWl0LFxuICAgIGxvb3A6IGxvb3AsXG4gICAgc2Nyb2xsU25hcHM6IHNjcm9sbFNuYXBzLFxuICAgIHRhcmdldDogdGFyZ2V0XG4gIH0pO1xuICB2YXIgc2Nyb2xsVG8gPSBTY3JvbGxUbyh7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgZXZlbnRzOiBldmVudHMsXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGluZGV4UHJldmlvdXM6IGluZGV4UHJldmlvdXMsXG4gICAgc2Nyb2xsVGFyZ2V0OiBzY3JvbGxUYXJnZXQsXG4gICAgdGFyZ2V0OiB0YXJnZXRcbiAgfSk7XG4gIHZhciBzbGlkZXNJblZpZXcgPSBTbGlkZXNJblZpZXcoe1xuICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZSxcbiAgICBpblZpZXdUaHJlc2hvbGQ6IGluVmlld1RocmVzaG9sZCxcbiAgICBsb29wOiBsb29wLFxuICAgIHNsaWRlU2l6ZXM6IHNsaWRlU2l6ZXMsXG4gICAgdmlld1NpemU6IHZpZXdTaXplXG4gIH0pOyAvLyBEcmFnSGFuZGxlclxuXG4gIHZhciBkcmFnSGFuZGxlciA9IERyYWdIYW5kbGVyKHtcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBheGlzOiBheGlzLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGRyYWdGcmVlOiBkcmFnRnJlZSxcbiAgICBkcmFnVHJhY2tlcjogRHJhZ1RyYWNrZXIoe1xuICAgICAgYXhpczogYXhpcyxcbiAgICAgIHB4VG9QZXJjZW50OiBweFRvUGVyY2VudFxuICAgIH0pLFxuICAgIHJvb3Q6IHJvb3QsXG4gICAgZXZlbnRzOiBldmVudHMsXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGxpbWl0OiBsaW1pdCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgc2Nyb2xsQm9keTogc2Nyb2xsQm9keSxcbiAgICBzY3JvbGxUbzogc2Nyb2xsVG8sXG4gICAgc2Nyb2xsVGFyZ2V0OiBzY3JvbGxUYXJnZXQsXG4gICAgdGFyZ2V0OiB0YXJnZXRcbiAgfSk7IC8vIFNsaWRlclxuXG4gIHZhciBlbmdpbmUgPSB7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgYXhpczogYXhpcyxcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICBkcmFnSGFuZGxlcjogZHJhZ0hhbmRsZXIsXG4gICAgcHhUb1BlcmNlbnQ6IHB4VG9QZXJjZW50LFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBpbmRleFByZXZpb3VzOiBpbmRleFByZXZpb3VzLFxuICAgIGxpbWl0OiBsaW1pdCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBzY3JvbGxCb2R5OiBzY3JvbGxCb2R5LFxuICAgIHNjcm9sbEJvdW5kczogU2Nyb2xsQm91bmRzKHtcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIHNjcm9sbEJvZHk6IHNjcm9sbEJvZHlcbiAgICB9KSxcbiAgICBzY3JvbGxMb29wZXI6IFNjcm9sbExvb3Blcih7XG4gICAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgICBsaW1pdDogbGltaXQsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBweFRvUGVyY2VudDogcHhUb1BlcmNlbnRcbiAgICB9KSxcbiAgICBzY3JvbGxQcm9ncmVzczogU2Nyb2xsUHJvZ3Jlc3Moe1xuICAgICAgbGltaXQ6IGxpbWl0XG4gICAgfSksXG4gICAgc2Nyb2xsU25hcHM6IHNjcm9sbFNuYXBzLFxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0LFxuICAgIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgICBzbGlkZUZvY3VzOiBTbGlkZUZvY3VzKHtcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICBzY3JvbGxUbzogc2Nyb2xsVG8sXG4gICAgICBzbGlkZXNUb1Njcm9sbDogc2xpZGVzVG9TY3JvbGxcbiAgICB9KSxcbiAgICBzbGlkZUxvb3BlcjogU2xpZGVMb29wZXIoe1xuICAgICAgYXhpczogYXhpcyxcbiAgICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgc2Nyb2xsU25hcHM6IHNjcm9sbFNuYXBzLFxuICAgICAgc2xpZGVTaXplczogc2xpZGVTaXplcyxcbiAgICAgIHNsaWRlc0luVmlldzogc2xpZGVzSW5WaWV3LFxuICAgICAgdmlld1NpemU6IHZpZXdTaXplXG4gICAgfSksXG4gICAgc2xpZGVzSW5WaWV3OiBzbGlkZXNJblZpZXcsXG4gICAgc2xpZGVJbmRleGVzOiBzbGlkZUluZGV4ZXMsXG4gICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgdHJhbnNsYXRlOiBUcmFuc2xhdGUoe1xuICAgICAgYXhpczogYXhpcyxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICB9KVxuICB9O1xuICByZXR1cm4gZW5naW5lO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRMaXN0ZW5lcnMoZXZ0KSB7XG4gICAgdmFyIGV2ZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzIHx8IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChldnQpIHtcbiAgICBnZXRMaXN0ZW5lcnMoZXZ0KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZShldnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gb24oZXZ0LCBjYikge1xuICAgIGxpc3RlbmVyc1tldnRdID0gZ2V0TGlzdGVuZXJzKGV2dCkuY29uY2F0KFtjYl0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmKGV2dCwgY2IpIHtcbiAgICBsaXN0ZW5lcnNbZXZ0XSA9IGdldExpc3RlbmVycyhldnQpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUgIT09IGNiO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgZW1pdDogZW1pdCxcbiAgICBvZmY6IG9mZixcbiAgICBvbjogb25cbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgYWxpZ246ICdjZW50ZXInLFxuICBheGlzOiAneCcsXG4gIGNvbnRhaW5TY3JvbGw6ICcnLFxuICBjb250YWluZXJTZWxlY3RvcjogJyonLFxuICBkaXJlY3Rpb246ICdsdHInLFxuICBkcmFnRnJlZTogZmFsc2UsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgZHJhZ2dhYmxlQ2xhc3M6ICdpcy1kcmFnZ2FibGUnLFxuICBkcmFnZ2luZ0NsYXNzOiAnaXMtZHJhZ2dpbmcnLFxuICBpblZpZXdUaHJlc2hvbGQ6IDAsXG4gIGxvb3A6IGZhbHNlLFxuICBzZWxlY3RlZENsYXNzOiAnaXMtc2VsZWN0ZWQnLFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgc3BlZWQ6IDEwLFxuICBzdGFydEluZGV4OiAwXG59O1xuXG5mdW5jdGlvbiBFbWJsYUNhcm91c2VsKHNsaWRlclJvb3QsIHVzZXJPcHRpb25zKSB7XG4gIHZhciBldmVudHMgPSBFdmVudEVtaXR0ZXIoKTtcbiAgdmFyIGV2ZW50U3RvcmUgPSBFdmVudFN0b3JlKCk7XG4gIHZhciBkZWJvdW5jZWRSZXNpemUgPSBkZWJvdW5jZShyZXNpemUsIDUwMCk7XG4gIHZhciByZUluaXQgPSByZUFjdGl2YXRlO1xuICB2YXIgb24gPSBldmVudHMub24sXG4gICAgICBvZmYgPSBldmVudHMub2ZmO1xuICB2YXIgZW5naW5lO1xuICB2YXIgYWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMpO1xuXG4gIHZhciByb290RWxlbWVudFNpemUgPSAwO1xuICB2YXIgY29udGFpbmVyO1xuICB2YXIgc2xpZGVzO1xuICBhY3RpdmF0ZSh1c2VyT3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gc3RvcmVFbGVtZW50cygpIHtcbiAgICBpZiAoIXNsaWRlclJvb3QpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByb290IG5vZGUg8J+YoicpO1xuICAgIHZhciBzZWxlY3RvciA9IG9wdGlvbnMuY29udGFpbmVyU2VsZWN0b3I7XG4gICAgdmFyIHNsaWRlckNvbnRhaW5lciA9IHNsaWRlclJvb3QucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKCFzbGlkZXJDb250YWluZXIpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjb250YWluZXIgbm9kZSDwn5iiJyk7XG4gICAgY29udGFpbmVyID0gc2xpZGVyQ29udGFpbmVyO1xuICAgIHNsaWRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbik7XG4gIH1cblxuICBmdW5jdGlvbiBhY3RpdmF0ZShwYXJ0aWFsT3B0aW9ucykge1xuICAgIHN0b3JlRWxlbWVudHMoKTtcbiAgICBvcHRpb25zID0gX2V4dGVuZHMob3B0aW9ucywgcGFydGlhbE9wdGlvbnMpO1xuICAgIGVuZ2luZSA9IEVuZ2luZShzbGlkZXJSb290LCBjb250YWluZXIsIHNsaWRlcywgb3B0aW9ucywgZXZlbnRzKTtcbiAgICByb290RWxlbWVudFNpemUgPSBlbmdpbmUuYXhpcy5tZWFzdXJlKHNsaWRlclJvb3QpO1xuICAgIGV2ZW50U3RvcmUuYWRkKHdpbmRvdywgJ3Jlc2l6ZScsIGRlYm91bmNlZFJlc2l6ZSk7XG4gICAgZW5naW5lLnRyYW5zbGF0ZS50byhlbmdpbmUubG9jYXRpb24pO1xuXG4gICAgaWYgKG9wdGlvbnMubG9vcCkge1xuICAgICAgaWYgKCFlbmdpbmUuc2xpZGVMb29wZXIuY2FuTG9vcCgpKSB7XG4gICAgICAgIGRlQWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlKHtcbiAgICAgICAgICBsb29wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZW5naW5lLnNsaWRlTG9vcGVyLmxvb3Aoc2xpZGVzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgZW5naW5lLmRyYWdIYW5kbGVyLmFkZEFjdGl2YXRpb25FdmVudHMoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlQ2xhc3MpIHtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVyUm9vdCwgb3B0aW9ucy5kcmFnZ2FibGVDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmRyYWdnaW5nQ2xhc3MpIHtcbiAgICAgICAgZXZlbnRzLm9uKCdwb2ludGVyRG93bicsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpLm9uKCdwb2ludGVyVXAnLCB0b2dnbGVEcmFnZ2luZ0NsYXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2xpZGVzLmxlbmd0aCkge1xuICAgICAgZW5naW5lLnNsaWRlRm9jdXMuYWRkQWN0aXZhdGlvbkV2ZW50cyhzbGlkZXMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNlbGVjdGVkQ2xhc3MpIHtcbiAgICAgIHRvZ2dsZVNlbGVjdGVkQ2xhc3MoKTtcbiAgICAgIGV2ZW50cy5vbignc2VsZWN0JywgdG9nZ2xlU2VsZWN0ZWRDbGFzcykub24oJ3BvaW50ZXJVcCcsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICghYWN0aXZhdGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5lbWl0KCdpbml0Jyk7XG4gICAgICB9LCAwKTtcbiAgICAgIGFjdGl2YXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRHJhZ2dpbmdDbGFzcyhldnQpIHtcbiAgICB2YXIgZHJhZ2dpbmdDbGFzcyA9IG9wdGlvbnMuZHJhZ2dpbmdDbGFzcztcbiAgICBpZiAoZXZ0ID09PSAncG9pbnRlckRvd24nKSBhZGRDbGFzcyhzbGlkZXJSb290LCBkcmFnZ2luZ0NsYXNzKTtlbHNlIHJlbW92ZUNsYXNzKHNsaWRlclJvb3QsIGRyYWdnaW5nQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2VsZWN0ZWRDbGFzcygpIHtcbiAgICB2YXIgc2VsZWN0ZWRDbGFzcyA9IG9wdGlvbnMuc2VsZWN0ZWRDbGFzcztcbiAgICB2YXIgaW5WaWV3ID0gc2xpZGVzSW5WaWV3KHRydWUpO1xuICAgIHZhciBub3RJblZpZXcgPSBzbGlkZXNOb3RJblZpZXcodHJ1ZSk7XG4gICAgbm90SW5WaWV3LmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiByZW1vdmVDbGFzcyhzbGlkZXNbaV0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH0pO1xuICAgIGluVmlldy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gYWRkQ2xhc3Moc2xpZGVzW2ldLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlQWN0aXZhdGUoKSB7XG4gICAgZW5naW5lLmRyYWdIYW5kbGVyLnJlbW92ZUFsbEV2ZW50cygpO1xuICAgIGVuZ2luZS5zbGlkZUZvY3VzLnJlbW92ZUFsbEV2ZW50cygpO1xuICAgIGVuZ2luZS5hbmltYXRpb24uc3RvcCgpO1xuICAgIGV2ZW50U3RvcmUucmVtb3ZlQWxsKCk7XG4gICAgZW5naW5lLnRyYW5zbGF0ZS5jbGVhcigpO1xuICAgIGVuZ2luZS5zbGlkZUxvb3Blci5jbGVhcihzbGlkZXMpO1xuICAgIHJlbW92ZUNsYXNzKHNsaWRlclJvb3QsIG9wdGlvbnMuZHJhZ2dhYmxlQ2xhc3MpO1xuICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlQ2xhc3Mocywgb3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICB9KTtcbiAgICBldmVudHMub2ZmKCdzZWxlY3QnLCB0b2dnbGVTZWxlY3RlZENsYXNzKTtcbiAgICBldmVudHMub2ZmKCdwb2ludGVyVXAnLCB0b2dnbGVTZWxlY3RlZENsYXNzKTtcbiAgICBldmVudHMub2ZmKCdwb2ludGVyRG93bicsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpO1xuICAgIGV2ZW50cy5vZmYoJ3BvaW50ZXJVcCcsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVBY3RpdmF0ZShwYXJ0aWFsT3B0aW9ucykge1xuICAgIGlmICghYWN0aXZhdGVkKSByZXR1cm47XG4gICAgdmFyIHN0YXJ0SW5kZXggPSBzZWxlY3RlZFNjcm9sbFNuYXAoKTtcblxuICAgIHZhciBuZXdPcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleFxuICAgIH0sIHBhcnRpYWxPcHRpb25zKTtcblxuICAgIGRlQWN0aXZhdGUoKTtcbiAgICBhY3RpdmF0ZShuZXdPcHRpb25zKTtcbiAgICBldmVudHMuZW1pdCgncmVJbml0Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICghYWN0aXZhdGVkKSByZXR1cm47XG4gICAgZGVBY3RpdmF0ZSgpO1xuICAgIGFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIGV2ZW50cy5lbWl0KCdkZXN0cm95Jyk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgaWYgKCFhY3RpdmF0ZWQpIHJldHVybjtcbiAgICB2YXIgbmV3Um9vdEVsZW1lbnRTaXplID0gZW5naW5lLmF4aXMubWVhc3VyZShzbGlkZXJSb290KTtcbiAgICBpZiAocm9vdEVsZW1lbnRTaXplICE9PSBuZXdSb290RWxlbWVudFNpemUpIHJlQWN0aXZhdGUoKTtcbiAgICBldmVudHMuZW1pdCgncmVzaXplJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZXNJblZpZXcodGFyZ2V0KSB7XG4gICAgdmFyIGxvY2F0aW9uID0gZW5naW5lW3RhcmdldCA/ICd0YXJnZXQnIDogJ2xvY2F0aW9uJ10uZ2V0KCk7XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLmxvb3AgPyAncmVtb3ZlT2Zmc2V0JyA6ICdjb25zdHJhaW4nO1xuICAgIHJldHVybiBlbmdpbmUuc2xpZGVzSW5WaWV3LmNoZWNrKGVuZ2luZS5saW1pdFt0eXBlXShsb2NhdGlvbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVzTm90SW5WaWV3KHRhcmdldCkge1xuICAgIHZhciBpblZpZXcgPSBzbGlkZXNJblZpZXcodGFyZ2V0KTtcbiAgICByZXR1cm4gZW5naW5lLnNsaWRlSW5kZXhlcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpblZpZXcuaW5kZXhPZihpKSA9PT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUbyhpbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgZW5naW5lLnNjcm9sbEJvZHkudXNlQmFzZU1hc3MoKS51c2VCYXNlU3BlZWQoKTtcbiAgICBpZiAoYWN0aXZhdGVkKSBlbmdpbmUuc2Nyb2xsVG8uaW5kZXgoaW5kZXgsIGRpcmVjdGlvbiB8fCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbE5leHQoKSB7XG4gICAgdmFyIG5leHQgPSBlbmdpbmUuaW5kZXguY2xvbmUoKS5hZGQoMSk7XG4gICAgc2Nyb2xsVG8obmV4dC5nZXQoKSwgLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsUHJldigpIHtcbiAgICB2YXIgcHJldiA9IGVuZ2luZS5pbmRleC5jbG9uZSgpLmFkZCgtMSk7XG4gICAgc2Nyb2xsVG8ocHJldi5nZXQoKSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5TY3JvbGxOZXh0KCkge1xuICAgIHZhciBuZXh0ID0gZW5naW5lLmluZGV4LmNsb25lKCkuYWRkKDEpO1xuICAgIHJldHVybiBuZXh0LmdldCgpICE9PSBzZWxlY3RlZFNjcm9sbFNuYXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblNjcm9sbFByZXYoKSB7XG4gICAgdmFyIHByZXYgPSBlbmdpbmUuaW5kZXguY2xvbmUoKS5hZGQoLTEpO1xuICAgIHJldHVybiBwcmV2LmdldCgpICE9PSBzZWxlY3RlZFNjcm9sbFNuYXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFNuYXBMaXN0KCkge1xuICAgIHJldHVybiBlbmdpbmUuc2Nyb2xsU25hcHMubWFwKGVuZ2luZS5zY3JvbGxQcm9ncmVzcy5nZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsUHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5zY3JvbGxQcm9ncmVzcy5nZXQoZW5naW5lLmxvY2F0aW9uLmdldCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdGVkU2Nyb2xsU25hcCgpIHtcbiAgICByZXR1cm4gZW5naW5lLmluZGV4LmdldCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmlvdXNTY3JvbGxTbmFwKCkge1xuICAgIHJldHVybiBlbmdpbmUuaW5kZXhQcmV2aW91cy5nZXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrQWxsb3dlZCgpIHtcbiAgICByZXR1cm4gZW5naW5lLmRyYWdIYW5kbGVyLmNsaWNrQWxsb3dlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGFuZ2Vyb3VzbHlHZXRFbmdpbmUoKSB7XG4gICAgcmV0dXJuIGVuZ2luZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5lck5vZGUoKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlTm9kZXMoKSB7XG4gICAgcmV0dXJuIHNsaWRlcztcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNhblNjcm9sbE5leHQ6IGNhblNjcm9sbE5leHQsXG4gICAgY2FuU2Nyb2xsUHJldjogY2FuU2Nyb2xsUHJldixcbiAgICBjbGlja0FsbG93ZWQ6IGNsaWNrQWxsb3dlZCxcbiAgICBjb250YWluZXJOb2RlOiBjb250YWluZXJOb2RlLFxuICAgIGRhbmdlcm91c2x5R2V0RW5naW5lOiBkYW5nZXJvdXNseUdldEVuZ2luZSxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIG9mZjogb2ZmLFxuICAgIG9uOiBvbixcbiAgICBwcmV2aW91c1Njcm9sbFNuYXA6IHByZXZpb3VzU2Nyb2xsU25hcCxcbiAgICByZUluaXQ6IHJlSW5pdCxcbiAgICBzY3JvbGxOZXh0OiBzY3JvbGxOZXh0LFxuICAgIHNjcm9sbFByZXY6IHNjcm9sbFByZXYsXG4gICAgc2Nyb2xsUHJvZ3Jlc3M6IHNjcm9sbFByb2dyZXNzLFxuICAgIHNjcm9sbFNuYXBMaXN0OiBzY3JvbGxTbmFwTGlzdCxcbiAgICBzY3JvbGxUbzogc2Nyb2xsVG8sXG4gICAgc2VsZWN0ZWRTY3JvbGxTbmFwOiBzZWxlY3RlZFNjcm9sbFNuYXAsXG4gICAgc2xpZGVOb2Rlczogc2xpZGVOb2RlcyxcbiAgICBzbGlkZXNJblZpZXc6IHNsaWRlc0luVmlldyxcbiAgICBzbGlkZXNOb3RJblZpZXc6IHNsaWRlc05vdEluVmlld1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1ibGFDYXJvdXNlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmxhLWNhcm91c2VsLmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=