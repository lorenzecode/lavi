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

/***/ "../src/assets/js/pages/espaco.js":
/*!****************************************!*\
  !*** ../src/assets/js/pages/espaco.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_0_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/_0-menu */ "../src/assets/js/functions/_0-menu.js");
/* harmony import */ var _functions_3_thumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/_3-thumb */ "../src/assets/js/functions/_3-thumb.js");



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
/*!**********************************************!*\
  !*** multi ../src/assets/js/pages/espaco.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ti5\Desktop\LORENZE\lavi\src\assets\js\pages\espaco.js */"../src/assets/js/pages/espaco.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvZnVuY3Rpb25zL18wLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvZnVuY3Rpb25zL18zLXRodW1iLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL3BhZ2VzL2VzcGFjby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwvZW1ibGEtY2Fyb3VzZWwuZXNtLmpzIl0sIm5hbWVzIjpbIndyYXBNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmlld1BvcnRNZW51IiwiQlJFQUtQT0lOVCIsIm9wdGlvbnNNZW51IiwiZHJhZ2dhYmxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5TY3JvbGwiLCJlbWJsYU1lbnUiLCJFbWJsYUNhcm91c2VsIiwib24iLCJyZUluaXQiLCJvblRodW1iQ2xpY2siLCJtYWluQ2Fyb3VzZWwiLCJ0aHVtYkNhcm91c2VsIiwiaW5kZXgiLCJjbGlja0FsbG93ZWQiLCJzY3JvbGxUbyIsImZvbGxvd01haW5DYXJvdXNlbCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsInNlbGVjdFRodW1iQnRuIiwicHJldmlvdXMiLCJwcmV2aW91c1Njcm9sbFNuYXAiLCJzZWxlY3RlZCIsInNsaWRlTm9kZXMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJtYWluQ2Fyb3VzZWxXcmFwIiwiZ2V0RWxlbWVudEJ5SWQiLCJtYWluQ2Fyb3VzZWxWaWV3Iiwic2VsZWN0ZWRDbGFzcyIsImxvb3AiLCJ0aHVtYkNhcm91c2VsV3JhcCIsInRodW1iQ2Fyb3VzZWxWaWV3IiwiZm9yRWFjaCIsInRodW1iTm9kZSIsIm9uQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwic3luY1RodW1iQ2Fyb3VzZWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBakI7QUFDQSxJQUFNQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixtQkFBdkIsQ0FBckI7QUFDQSxJQUFNRSxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJDLFdBQVMsRUFBRUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CSixVQURiO0FBRWxCSyxlQUFhLEVBQUU7QUFGRyxDQUFwQjtBQUlBLElBQU1DLFNBQVMsR0FBR0MsaUZBQWEsQ0FBQ1IsWUFBRCxFQUFlRSxXQUFmLENBQS9CO0FBQ0FLLFNBQVMsQ0FBQ0UsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBTTtBQUMzQixNQUFNTixTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkosVUFBdEM7QUFDQU0sV0FBUyxDQUFDRyxNQUFWLENBQWlCO0FBQUVQLGFBQVMsRUFBVEE7QUFBRixHQUFqQjtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxZQUFELEVBQWVDLGFBQWYsRUFBOEJDLEtBQTlCO0FBQUEsU0FBd0MsWUFBTTtBQUN4RSxRQUFJLENBQUNELGFBQWEsQ0FBQ0UsWUFBZCxFQUFMLEVBQW1DO0FBQ25DSCxnQkFBWSxDQUFDSSxRQUFiLENBQXNCRixLQUF0QjtBQUNELEdBSDJCO0FBQUEsQ0FBckI7QUFLQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNMLFlBQUQsRUFBZUMsYUFBZjtBQUFBLFNBQWlDLFlBQU07QUFDdkVBLGlCQUFhLENBQUNHLFFBQWQsQ0FBdUJKLFlBQVksQ0FBQ00sa0JBQWIsRUFBdkI7QUFDQUMsa0JBQWMsQ0FBQ1AsWUFBRCxFQUFlQyxhQUFmLENBQWQ7QUFDRCxHQUhpQztBQUFBLENBQTNCOztBQUtQLElBQU1NLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1AsWUFBRCxFQUFlQyxhQUFmLEVBQWlDO0FBQ3RELE1BQU1PLFFBQVEsR0FBR1IsWUFBWSxDQUFDUyxrQkFBYixFQUFqQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1YsWUFBWSxDQUFDTSxrQkFBYixFQUFqQjtBQUNBTCxlQUFhLENBQUNVLFVBQWQsR0FBMkJILFFBQTNCLEVBQXFDSSxTQUFyQyxDQUErQ0MsTUFBL0MsQ0FBc0QsYUFBdEQ7QUFDQVosZUFBYSxDQUFDVSxVQUFkLEdBQTJCRCxRQUEzQixFQUFxQ0UsU0FBckMsQ0FBK0NFLEdBQS9DLENBQW1ELGFBQW5EO0FBQ0QsQ0FMRCxDLENBT0E7OztBQUNBLElBQU1DLGdCQUFnQixHQUFHN0IsUUFBUSxDQUFDOEIsY0FBVCxDQUF3QixlQUF4QixDQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHRixnQkFBZ0IsQ0FBQzVCLGFBQWpCLENBQStCLG1CQUEvQixDQUF6QjtBQUNBLElBQU1hLFlBQVksR0FBR0osaUZBQWEsQ0FBQ3FCLGdCQUFELEVBQW1CO0FBQ25EQyxlQUFhLEVBQUUsRUFEb0M7QUFFbkRDLE1BQUksRUFBRTtBQUY2QyxDQUFuQixDQUFsQztBQUtBLElBQU1DLGlCQUFpQixHQUFHbEMsUUFBUSxDQUFDOEIsY0FBVCxDQUF3QixnQkFBeEIsQ0FBMUI7QUFDQSxJQUFNSyxpQkFBaUIsR0FBR0QsaUJBQWlCLENBQUNqQyxhQUFsQixDQUFnQyxtQkFBaEMsQ0FBMUI7QUFDQSxJQUFNYyxhQUFhLEdBQUdMLGlGQUFhLENBQUN5QixpQkFBRCxFQUFvQjtBQUNyREgsZUFBYSxFQUFFLEVBRHNDO0FBRXJEeEIsZUFBYSxFQUFFO0FBRnNDLENBQXBCLENBQW5DO0FBS0FPLGFBQWEsQ0FBQ1UsVUFBZCxHQUEyQlcsT0FBM0IsQ0FBbUMsVUFBQ0MsU0FBRCxFQUFZckIsS0FBWixFQUFzQjtBQUN2RCxNQUFNc0IsT0FBTyxHQUFHekIsWUFBWSxDQUFDQyxZQUFELEVBQWVDLGFBQWYsRUFBOEJDLEtBQTlCLENBQTVCO0FBQ0FxQixXQUFTLENBQUNFLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DRCxPQUFwQyxFQUE2QyxLQUE3QztBQUNELENBSEQ7QUFLQSxJQUFNRSxpQkFBaUIsR0FBR3JCLGtCQUFrQixDQUFDTCxZQUFELEVBQWVDLGFBQWYsQ0FBNUM7QUFDQUQsWUFBWSxDQUFDSCxFQUFiLENBQWdCLFFBQWhCLEVBQTBCNkIsaUJBQTFCO0FBQ0F6QixhQUFhLENBQUNKLEVBQWQsQ0FBaUIsTUFBakIsRUFBeUI2QixpQkFBekIsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw0RUFBYSxFQUFDO0FBQzdCIiwiZmlsZSI6ImVzcGFjby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJy4uLy4uLy4uLy4uL2d1bHAvbm9kZV9tb2R1bGVzL2VtYmxhLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IHdyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2wtbWVudScpO1xyXG5jb25zdCB2aWV3UG9ydE1lbnUgPSB3cmFwTWVudS5xdWVyeVNlbGVjdG9yKCcubC1lbWJsYS12aWV3cG9ydCcpO1xyXG5jb25zdCBCUkVBS1BPSU5UID0gNzY4O1xyXG5jb25zdCBvcHRpb25zTWVudSA9IHtcclxuICBkcmFnZ2FibGU6IHdpbmRvdy5pbm5lcldpZHRoIDwgQlJFQUtQT0lOVCxcclxuICBjb250YWluU2Nyb2xsOiAndHJpbVNuYXBzJyxcclxufTtcclxuY29uc3QgZW1ibGFNZW51ID0gRW1ibGFDYXJvdXNlbCh2aWV3UG9ydE1lbnUsIG9wdGlvbnNNZW51KTtcclxuZW1ibGFNZW51Lm9uKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgY29uc3QgZHJhZ2dhYmxlID0gd2luZG93LmlubmVyV2lkdGggPCBCUkVBS1BPSU5UO1xyXG4gIGVtYmxhTWVudS5yZUluaXQoeyBkcmFnZ2FibGUgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi8uLi9ndWxwL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCc7XHJcblxyXG4vLyBUaHVtYlxyXG5leHBvcnQgY29uc3Qgb25UaHVtYkNsaWNrID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCwgaW5kZXgpID0+ICgpID0+IHtcclxuICBpZiAoIXRodW1iQ2Fyb3VzZWwuY2xpY2tBbGxvd2VkKCkpIHJldHVybjtcclxuICBtYWluQ2Fyb3VzZWwuc2Nyb2xsVG8oaW5kZXgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd01haW5DYXJvdXNlbCA9IChtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwpID0+ICgpID0+IHtcclxuICB0aHVtYkNhcm91c2VsLnNjcm9sbFRvKG1haW5DYXJvdXNlbC5zZWxlY3RlZFNjcm9sbFNuYXAoKSk7XHJcbiAgc2VsZWN0VGh1bWJCdG4obWFpbkNhcm91c2VsLCB0aHVtYkNhcm91c2VsKTtcclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdFRodW1iQnRuID0gKG1haW5DYXJvdXNlbCwgdGh1bWJDYXJvdXNlbCkgPT4ge1xyXG4gIGNvbnN0IHByZXZpb3VzID0gbWFpbkNhcm91c2VsLnByZXZpb3VzU2Nyb2xsU25hcCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gbWFpbkNhcm91c2VsLnNlbGVjdGVkU2Nyb2xsU25hcCgpO1xyXG4gIHRodW1iQ2Fyb3VzZWwuc2xpZGVOb2RlcygpW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zZWxlY3RlZCcpO1xyXG4gIHRodW1iQ2Fyb3VzZWwuc2xpZGVOb2RlcygpW3NlbGVjdGVkXS5jbGFzc0xpc3QuYWRkKCdpcy1zZWxlY3RlZCcpO1xyXG59O1xyXG5cclxuLy8gRW1ibGFcclxuY29uc3QgbWFpbkNhcm91c2VsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNhcm91c2VsJyk7XHJcbmNvbnN0IG1haW5DYXJvdXNlbFZpZXcgPSBtYWluQ2Fyb3VzZWxXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5sLWVtYmxhLXZpZXdwb3J0Jyk7XHJcbmNvbnN0IG1haW5DYXJvdXNlbCA9IEVtYmxhQ2Fyb3VzZWwobWFpbkNhcm91c2VsVmlldywge1xyXG4gIHNlbGVjdGVkQ2xhc3M6ICcnLFxyXG4gIGxvb3A6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IHRodW1iQ2Fyb3VzZWxXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW1iLWNhcm91c2VsJyk7XHJcbmNvbnN0IHRodW1iQ2Fyb3VzZWxWaWV3ID0gdGh1bWJDYXJvdXNlbFdyYXAucXVlcnlTZWxlY3RvcignLmwtZW1ibGEtdmlld3BvcnQnKTtcclxuY29uc3QgdGh1bWJDYXJvdXNlbCA9IEVtYmxhQ2Fyb3VzZWwodGh1bWJDYXJvdXNlbFZpZXcsIHtcclxuICBzZWxlY3RlZENsYXNzOiAnJyxcclxuICBjb250YWluU2Nyb2xsOiAna2VlcFNuYXBzJyxcclxufSk7XHJcblxyXG50aHVtYkNhcm91c2VsLnNsaWRlTm9kZXMoKS5mb3JFYWNoKCh0aHVtYk5vZGUsIGluZGV4KSA9PiB7XHJcbiAgY29uc3Qgb25DbGljayA9IG9uVGh1bWJDbGljayhtYWluQ2Fyb3VzZWwsIHRodW1iQ2Fyb3VzZWwsIGluZGV4KTtcclxuICB0aHVtYk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrLCBmYWxzZSk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3luY1RodW1iQ2Fyb3VzZWwgPSBmb2xsb3dNYWluQ2Fyb3VzZWwobWFpbkNhcm91c2VsLCB0aHVtYkNhcm91c2VsKTtcclxubWFpbkNhcm91c2VsLm9uKCdzZWxlY3QnLCBzeW5jVGh1bWJDYXJvdXNlbCk7XHJcbnRodW1iQ2Fyb3VzZWwub24oJ2luaXQnLCBzeW5jVGh1bWJDYXJvdXNlbCk7XHJcbiIsImltcG9ydCBtZW51IGZyb20gJy4uL2Z1bmN0aW9ucy9fMC1tZW51JztcclxuaW1wb3J0IHRodW1iIGZyb20gJy4uL2Z1bmN0aW9ucy9fMy10aHVtYic7XHJcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIEFsaWdubWVudChwYXJhbXMpIHtcbiAgdmFyIHZpZXdTaXplID0gcGFyYW1zLnZpZXdTaXplLFxuICAgICAgYWxpZ24gPSBwYXJhbXMuYWxpZ247XG4gIHZhciBwcmVkZWZpbmVkID0ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjZW50ZXI6IGNlbnRlcixcbiAgICBlbmQ6IGVuZFxuICB9O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudGVyKG4pIHtcbiAgICByZXR1cm4gZW5kKG4pIC8gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZChuKSB7XG4gICAgcmV0dXJuIHZpZXdTaXplIC0gbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHZpZXdTaXplICogTnVtYmVyKGFsaWduKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUobikge1xuICAgIGlmICh0eXBlb2YgYWxpZ24gPT09ICdudW1iZXInKSByZXR1cm4gcGVyY2VudCgpO1xuICAgIHJldHVybiBwcmVkZWZpbmVkW2FsaWduXShuKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIG1lYXN1cmU6IG1lYXN1cmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbihjYWxsYmFjaykge1xuICB2YXIgYW5pbWF0aW9uRnJhbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGlmQW5pbWF0aW5nKGFjdGl2ZSwgY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFjdGl2ZSA9PT0gISFhbmltYXRpb25GcmFtZSkgY2IoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICBhbmltYXRpb25GcmFtZSA9IDA7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBwcm9jZWVkOiBpZkFuaW1hdGluZyh0cnVlLCBzdGFydCksXG4gICAgc3RhcnQ6IGlmQW5pbWF0aW5nKGZhbHNlLCBzdGFydCksXG4gICAgc3RvcDogaWZBbmltYXRpbmcodHJ1ZSwgc3RvcClcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIEF4aXMoYXhpcykge1xuICB2YXIgc2Nyb2xsID0gYXhpcyA9PT0gJ3knID8gJ3knIDogJ3gnO1xuICB2YXIgY3Jvc3MgPSBheGlzID09PSAneScgPyAneCcgOiAneSc7XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShub2RlKSB7XG4gICAgdmFyIF9hID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfYS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbCA9PT0gJ3gnID8gd2lkdGggOiBoZWlnaHQ7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjcm9zczogY3Jvc3MsXG4gICAgbWVhc3VyZTogbWVhc3VyZSxcbiAgICBzY3JvbGw6IHNjcm9sbFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gbWFwKHZhbHVlLCBpU3RhcnQsIGlTdG9wLCBvU3RhcnQsIG9TdG9wKSB7XG4gIHJldHVybiBvU3RhcnQgKyAob1N0b3AgLSBvU3RhcnQpICogKCh2YWx1ZSAtIGlTdGFydCkgLyAoaVN0b3AgLSBpU3RhcnQpKTtcbn1cbmZ1bmN0aW9uIG1hdGhTaWduKG4pIHtcbiAgcmV0dXJuICFuID8gMCA6IG4gLyBNYXRoLmFicyhuKTtcbn1cbmZ1bmN0aW9uIGRlbHRhQWJzKHZhbHVlQiwgdmFsdWVBKSB7XG4gIHJldHVybiBNYXRoLmFicyh2YWx1ZUIgLSB2YWx1ZUEpO1xufVxuZnVuY3Rpb24gZmFjdG9yQWJzKHZhbHVlQiwgdmFsdWVBKSB7XG4gIGlmICh2YWx1ZUIgPT09IDAgfHwgdmFsdWVBID09PSAwKSByZXR1cm4gMDtcbiAgaWYgKE1hdGguYWJzKHZhbHVlQikgPD0gTWF0aC5hYnModmFsdWVBKSkgcmV0dXJuIDA7XG4gIHZhciBkaWZmID0gZGVsdGFBYnMoTWF0aC5hYnModmFsdWVCKSwgTWF0aC5hYnModmFsdWVBKSk7XG4gIHJldHVybiBNYXRoLmFicyhkaWZmIC8gdmFsdWVCKTtcbn1cbmZ1bmN0aW9uIHJvdW5kVG9EZWNpbWFscyhkZWNpbWFsUG9pbnRzKSB7XG4gIHZhciBwb3cgPSBNYXRoLnBvdygxMCwgZGVjaW1hbFBvaW50cyk7XG4gIHJldHVybiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4gKiBwb3cpIC8gcG93O1xuICB9O1xufVxuZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lKSB8fCAwO1xuICB9O1xufVxuZnVuY3Rpb24gZ3JvdXBBcnJheShhcnJheSwgc2l6ZSkge1xuICB2YXIgZ3JvdXBzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGdyb3Vwcy5wdXNoKGFycmF5LnNsaWNlKGksIGkgKyBzaXplKSk7XG4gIH1cblxuICByZXR1cm4gZ3JvdXBzO1xufVxuZnVuY3Rpb24gYXJyYXlLZXlzKGFycmF5KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhcnJheSkubWFwKE51bWJlcik7XG59XG5mdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgdmFyIGNsID0gbm9kZS5jbGFzc0xpc3Q7XG4gIGlmIChjbGFzc05hbWUgJiYgY2wuY29udGFpbnMoY2xhc3NOYW1lKSkgY2wucmVtb3ZlKGNsYXNzTmFtZSk7XG59XG5mdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgdmFyIGNsID0gbm9kZS5jbGFzc0xpc3Q7XG4gIGlmIChjbGFzc05hbWUgJiYgIWNsLmNvbnRhaW5zKGNsYXNzTmFtZSkpIGNsLmFkZChjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBDb3VudGVyKHBhcmFtcykge1xuICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQsXG4gICAgICBsaW1pdCA9IHBhcmFtcy5saW1pdCxcbiAgICAgIGxvb3AgPSBwYXJhbXMubG9vcDtcbiAgdmFyIG1pbiA9IGxpbWl0Lm1pbixcbiAgICAgIG1heCA9IGxpbWl0Lm1heDtcbiAgdmFyIHR5cGUgPSBsb29wID8gJ2xvb3AnIDogJ2NvbnN0cmFpbic7XG4gIHZhciB3aXRoaW5MaW1pdCA9IGxpbWl0W3R5cGVdO1xuICB2YXIgY291bnRlciA9IHdpdGhpbkxpbWl0KHN0YXJ0KTtcblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXQobikge1xuICAgIGNvdW50ZXIgPSB3aXRoaW5MaW1pdChuKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChuKSB7XG4gICAgaWYgKG4gIT09IDApIHtcbiAgICAgIHZhciBzaWduID0gbWF0aFNpZ24obik7XG4gICAgICBzZXQoZ2V0KCkgKyBzaWduKTtcbiAgICAgIHJldHVybiBhZGQobiArIHNpZ24gKiAtMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gQ291bnRlcih7XG4gICAgICBzdGFydDogZ2V0KCksXG4gICAgICBsaW1pdDogbGltaXQsXG4gICAgICBsb29wOiBsb29wXG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGQ6IGFkZCxcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgZ2V0OiBnZXQsXG4gICAgbWF4OiBtYXgsXG4gICAgbWluOiBtaW4sXG4gICAgc2V0OiBzZXRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIERpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgdmFyIHNpZ24gPSBkaXJlY3Rpb24gPT09ICdydGwnID8gLTEgOiAxO1xuXG4gIGZ1bmN0aW9uIGFwcGx5VG8obikge1xuICAgIHJldHVybiBuICogc2lnbjtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFwcGx5VG86IGFwcGx5VG9cbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIEV2ZW50U3RvcmUoKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQobm9kZSwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgbGlzdGVuZXJzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChyZW1vdmUpIHtcbiAgICAgIHJldHVybiByZW1vdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZDogYWRkLFxuICAgIHJlbW92ZUFsbDogcmVtb3ZlQWxsXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBWZWN0b3IxRCh2YWx1ZSkge1xuICB2YXIgdmVjdG9yID0gdmFsdWU7XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBzZXQobikge1xuICAgIHZlY3RvciA9IHJlYWROdW1iZXIobik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQobikge1xuICAgIHZlY3RvciArPSByZWFkTnVtYmVyKG4pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VidHJhY3Qobikge1xuICAgIHZlY3RvciAtPSByZWFkTnVtYmVyKG4pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gbXVsdGlwbHkobikge1xuICAgIHZlY3RvciAqPSBuO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gZGl2aWRlKG4pIHtcbiAgICB2ZWN0b3IgLz0gbjtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgICBpZiAodmVjdG9yICE9PSAwKSBkaXZpZGUodmVjdG9yKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWROdW1iZXIobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogbi5nZXQoKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZDogYWRkLFxuICAgIGRpdmlkZTogZGl2aWRlLFxuICAgIGdldDogZ2V0LFxuICAgIG11bHRpcGx5OiBtdWx0aXBseSxcbiAgICBub3JtYWxpemU6IG5vcm1hbGl6ZSxcbiAgICBzZXQ6IHNldCxcbiAgICBzdWJ0cmFjdDogc3VidHJhY3RcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIERyYWdIYW5kbGVyKHBhcmFtcykge1xuICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRhcmdldCxcbiAgICAgIHNjcm9sbEJvZHkgPSBwYXJhbXMuc2Nyb2xsQm9keSxcbiAgICAgIGRyYWdGcmVlID0gcGFyYW1zLmRyYWdGcmVlLFxuICAgICAgYW5pbWF0aW9uID0gcGFyYW1zLmFuaW1hdGlvbixcbiAgICAgIGF4aXMgPSBwYXJhbXMuYXhpcyxcbiAgICAgIHNjcm9sbFRvID0gcGFyYW1zLnNjcm9sbFRvO1xuICB2YXIgcm9vdCA9IHBhcmFtcy5yb290LFxuICAgICAgZHJhZ1RyYWNrZXIgPSBwYXJhbXMuZHJhZ1RyYWNrZXIsXG4gICAgICBsb2NhdGlvbiA9IHBhcmFtcy5sb2NhdGlvbixcbiAgICAgIGV2ZW50cyA9IHBhcmFtcy5ldmVudHMsXG4gICAgICBsaW1pdCA9IHBhcmFtcy5saW1pdCxcbiAgICAgIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XG4gIHZhciBzY3JvbGxBeGlzID0gYXhpcy5zY3JvbGwsXG4gICAgICBjcm9zc0F4aXMgPSBheGlzLmNyb3NzO1xuICB2YXIgZm9jdXNOb2RlcyA9IFsnSU5QVVQnLCAnU0VMRUNUJywgJ1RFWFRBUkVBJ107XG4gIHZhciBzdGFydFNjcm9sbCA9IFZlY3RvcjFEKDApO1xuICB2YXIgc3RhcnRDcm9zcyA9IFZlY3RvcjFEKDApO1xuICB2YXIgZHJhZ1N0YXJ0UG9pbnQgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGFjdGl2YXRpb25FdmVudHMgPSBFdmVudFN0b3JlKCk7XG4gIHZhciBpbnRlcmFjdGlvbkV2ZW50cyA9IEV2ZW50U3RvcmUoKTtcbiAgdmFyIHNuYXBGb3JjZUJvb3N0ID0ge1xuICAgIG1vdXNlOiAyLjUsXG4gICAgdG91Y2g6IDMuNVxuICB9O1xuICB2YXIgZnJlZUZvcmNlQm9vc3QgPSB7XG4gICAgbW91c2U6IDUsXG4gICAgdG91Y2g6IDdcbiAgfTtcbiAgdmFyIGJhc2VTcGVlZCA9IGRyYWdGcmVlID8gNSA6IDEyO1xuICB2YXIgZHJhZ1RocmVzaG9sZCA9IDQ7XG4gIHZhciBwb2ludGVySXNEb3duID0gZmFsc2U7XG4gIHZhciBwcmV2ZW50U2Nyb2xsID0gZmFsc2U7XG4gIHZhciBwcmV2ZW50Q2xpY2sgPSBmYWxzZTtcbiAgdmFyIGlzTW91c2UgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBhZGRBY3RpdmF0aW9uRXZlbnRzKCkge1xuICAgIHZhciBub2RlID0gcm9vdDtcbiAgICBhY3RpdmF0aW9uRXZlbnRzLmFkZChub2RlLCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KS5hZGQobm9kZSwgJ3RvdWNoZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KS5hZGQobm9kZSwgJ3RvdWNoc3RhcnQnLCBkb3duKS5hZGQobm9kZSwgJ21vdXNlZG93bicsIGRvd24pLmFkZChub2RlLCAndG91Y2hjYW5jZWwnLCB1cCkuYWRkKG5vZGUsICdjb250ZXh0bWVudScsIHVwKS5hZGQobm9kZSwgJ2NsaWNrJywgY2xpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25FdmVudHMoKSB7XG4gICAgdmFyIG5vZGUgPSAhaXNNb3VzZSA/IHJvb3QgOiBkb2N1bWVudDtcbiAgICBpbnRlcmFjdGlvbkV2ZW50cy5hZGQobm9kZSwgJ3RvdWNobW92ZScsIG1vdmUpLmFkZChub2RlLCAndG91Y2hlbmQnLCB1cCkuYWRkKG5vZGUsICdtb3VzZW1vdmUnLCBtb3ZlKS5hZGQobm9kZSwgJ21vdXNldXAnLCB1cCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbGxFdmVudHMoKSB7XG4gICAgYWN0aXZhdGlvbkV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgICBpbnRlcmFjdGlvbkV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRm9jdXNOb2RlKG5vZGUpIHtcbiAgICB2YXIgbmFtZSA9IG5vZGUubm9kZU5hbWUgfHwgJyc7XG4gICAgcmV0dXJuIGZvY3VzTm9kZXMuaW5kZXhPZihuYW1lKSA+IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yY2VCb29zdCgpIHtcbiAgICB2YXIgYm9vc3QgPSBkcmFnRnJlZSA/IGZyZWVGb3JjZUJvb3N0IDogc25hcEZvcmNlQm9vc3Q7XG4gICAgdmFyIHR5cGUgPSBpc01vdXNlID8gJ21vdXNlJyA6ICd0b3VjaCc7XG4gICAgcmV0dXJuIGJvb3N0W3R5cGVdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsb3dlZEZvcmNlKGZvcmNlKSB7XG4gICAgdmFyIHNjcm9sbFRhcmdldCA9IHBhcmFtcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgIGluZGV4ID0gcGFyYW1zLmluZGV4O1xuICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBzY3JvbGxUYXJnZXQuYnlEaXN0YW5jZSgwLCBmYWxzZSk7XG4gICAgdmFyIHRhcmdldENoYW5nZWQgPSBjdXJyZW50TG9jYXRpb24uaW5kZXggIT09IGluZGV4LmdldCgpO1xuICAgIHZhciBzZWVrTmV4dCA9ICF0YXJnZXRDaGFuZ2VkICYmIE1hdGguYWJzKGZvcmNlKSA+IGRyYWdUaHJlc2hvbGQ7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gZm9yY2UgKyBsb2NhdGlvbi5nZXQoKTtcblxuICAgIGlmIChzZWVrTmV4dCAmJiAhZHJhZ0ZyZWUgJiYgIWxpbWl0LnJlYWNoZWRBbnkoZGVzdGluYXRpb24pKSB7XG4gICAgICB2YXIgbmV4dCA9IGluZGV4LmNsb25lKCkuYWRkKG1hdGhTaWduKGZvcmNlKSAqIC0xKTtcbiAgICAgIHJldHVybiBzY3JvbGxUYXJnZXQuYnlJbmRleChuZXh0LmdldCgpLCAwKS5kaXN0YW5jZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsVGFyZ2V0LmJ5RGlzdGFuY2UoZm9yY2UsICFkcmFnRnJlZSkuZGlzdGFuY2U7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGV2dCkge1xuICAgIGlzTW91c2UgPSBldnQudHlwZSA9PT0gJ21vdXNlZG93bic7XG4gICAgaWYgKGlzTW91c2UgJiYgZXZ0LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuICAgIHZhciBpc01vdmluZyA9IGRlbHRhQWJzKHRhcmdldC5nZXQoKSwgbG9jYXRpb24uZ2V0KCkpID49IDI7XG4gICAgdmFyIGNsZWFyUHJldmVudENsaWNrID0gaXNNb3VzZSB8fCAhaXNNb3Zpbmc7XG4gICAgdmFyIGlzTm90Rm9jdXNOb2RlID0gIWlzRm9jdXNOb2RlKGV2dC50YXJnZXQpO1xuICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGlzTW92aW5nIHx8IGlzTW91c2UgJiYgaXNOb3RGb2N1c05vZGU7XG4gICAgcG9pbnRlcklzRG93biA9IHRydWU7XG4gICAgZHJhZ1RyYWNrZXIucG9pbnRlckRvd24oZXZ0KTtcbiAgICBkcmFnU3RhcnRQb2ludC5zZXQodGFyZ2V0KTtcbiAgICB0YXJnZXQuc2V0KGxvY2F0aW9uKTtcbiAgICBzY3JvbGxCb2R5LnVzZUJhc2VNYXNzKCkudXNlU3BlZWQoODApO1xuICAgIGFkZEludGVyYWN0aW9uRXZlbnRzKCk7XG4gICAgc3RhcnRTY3JvbGwuc2V0KGRyYWdUcmFja2VyLnJlYWRQb2ludChldnQsIHNjcm9sbEF4aXMpKTtcbiAgICBzdGFydENyb3NzLnNldChkcmFnVHJhY2tlci5yZWFkUG9pbnQoZXZ0LCBjcm9zc0F4aXMpKTtcbiAgICBldmVudHMuZW1pdCgncG9pbnRlckRvd24nKTtcbiAgICBpZiAoY2xlYXJQcmV2ZW50Q2xpY2spIHByZXZlbnRDbGljayA9IGZhbHNlO1xuICAgIGlmIChwcmV2ZW50RGVmYXVsdCkgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGV2dCkge1xuICAgIGlmICghcHJldmVudFNjcm9sbCAmJiAhaXNNb3VzZSkge1xuICAgICAgaWYgKCFldnQuY2FuY2VsYWJsZSkgcmV0dXJuIHVwKCk7XG4gICAgICB2YXIgbW92ZVNjcm9sbCA9IGRyYWdUcmFja2VyLnJlYWRQb2ludChldnQsIHNjcm9sbEF4aXMpLmdldCgpO1xuICAgICAgdmFyIG1vdmVDcm9zcyA9IGRyYWdUcmFja2VyLnJlYWRQb2ludChldnQsIGNyb3NzQXhpcykuZ2V0KCk7XG4gICAgICB2YXIgZGlmZlNjcm9sbCA9IGRlbHRhQWJzKG1vdmVTY3JvbGwsIHN0YXJ0U2Nyb2xsLmdldCgpKTtcbiAgICAgIHZhciBkaWZmQ3Jvc3MgPSBkZWx0YUFicyhtb3ZlQ3Jvc3MsIHN0YXJ0Q3Jvc3MuZ2V0KCkpO1xuICAgICAgcHJldmVudFNjcm9sbCA9IGRpZmZTY3JvbGwgPiBkaWZmQ3Jvc3M7XG4gICAgICBpZiAoIXByZXZlbnRTY3JvbGwgJiYgIXByZXZlbnRDbGljaykgcmV0dXJuIHVwKCk7XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBkcmFnVHJhY2tlci5wb2ludGVyTW92ZShldnQpO1xuICAgIGlmICghcHJldmVudENsaWNrICYmIGRpZmYpIHByZXZlbnRDbGljayA9IHRydWU7XG4gICAgYW5pbWF0aW9uLnN0YXJ0KCk7XG4gICAgdGFyZ2V0LmFkZChkaXJlY3Rpb24uYXBwbHlUbyhkaWZmKSk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cCgpIHtcbiAgICB2YXIgcmF3Rm9yY2UgPSBkcmFnVHJhY2tlci5wb2ludGVyVXAoKSAqIGZvcmNlQm9vc3QoKTtcbiAgICB2YXIgZm9yY2UgPSBhbGxvd2VkRm9yY2UoZGlyZWN0aW9uLmFwcGx5VG8ocmF3Rm9yY2UpKTtcbiAgICB2YXIgc3BlZWRGYWN0b3IgPSBmYWN0b3JBYnMocmF3Rm9yY2UsIGZvcmNlKTtcbiAgICB2YXIgaXNNb3ZpbmcgPSBkZWx0YUFicyh0YXJnZXQuZ2V0KCksIGRyYWdTdGFydFBvaW50LmdldCgpKSA+PSAwLjU7XG4gICAgaWYgKGlzTW92aW5nICYmICFpc01vdXNlKSBwcmV2ZW50Q2xpY2sgPSB0cnVlO1xuICAgIHByZXZlbnRTY3JvbGwgPSBmYWxzZTtcbiAgICBwb2ludGVySXNEb3duID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25FdmVudHMucmVtb3ZlQWxsKCk7XG4gICAgc2Nyb2xsQm9keS51c2VTcGVlZChiYXNlU3BlZWQgKyBiYXNlU3BlZWQgKiBzcGVlZEZhY3Rvcik7XG4gICAgc2Nyb2xsVG8uZGlzdGFuY2UoZm9yY2UsICFkcmFnRnJlZSk7XG4gICAgaXNNb3VzZSA9IGZhbHNlO1xuICAgIGV2ZW50cy5lbWl0KCdwb2ludGVyVXAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrKGV2dCkge1xuICAgIGlmIChwcmV2ZW50Q2xpY2spIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tBbGxvd2VkKCkge1xuICAgIHJldHVybiAhcHJldmVudENsaWNrO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlckRvd24oKSB7XG4gICAgcmV0dXJuIHBvaW50ZXJJc0Rvd247XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGRBY3RpdmF0aW9uRXZlbnRzOiBhZGRBY3RpdmF0aW9uRXZlbnRzLFxuICAgIGNsaWNrQWxsb3dlZDogY2xpY2tBbGxvd2VkLFxuICAgIHBvaW50ZXJEb3duOiBwb2ludGVyRG93bixcbiAgICByZW1vdmVBbGxFdmVudHM6IHJlbW92ZUFsbEV2ZW50c1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRHJhZ1RyYWNrZXIocGFyYW1zKSB7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXMsXG4gICAgICBweFRvUGVyY2VudCA9IHBhcmFtcy5weFRvUGVyY2VudDtcbiAgdmFyIHNjcm9sbEF4aXMgPSBheGlzLnNjcm9sbDtcbiAgdmFyIGNvb3JkcyA9IHtcbiAgICB4OiAnY2xpZW50WCcsXG4gICAgeTogJ2NsaWVudFknXG4gIH07XG4gIHZhciBzdGFydERyYWcgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGRpZmZEcmFnID0gVmVjdG9yMUQoMCk7XG4gIHZhciBsYXN0RHJhZyA9IFZlY3RvcjFEKDApO1xuICB2YXIgcG9pbnRWYWx1ZSA9IFZlY3RvcjFEKDApO1xuICB2YXIgdHJhY2tJbnRlcnZhbCA9IDEwO1xuICB2YXIgdHJhY2tMZW5ndGggPSA1O1xuICB2YXIgdHJhY2tUaW1lID0gMTAwO1xuICB2YXIgdHJhY2tQb2ludHMgPSBbXTtcbiAgdmFyIGxhc3RNb3ZlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgaXNNb3VzZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHJlYWRQb2ludChldnQsIHR5cGUpIHtcbiAgICBpc01vdXNlID0gIWV2dC50b3VjaGVzO1xuICAgIHZhciBjID0gY29vcmRzW3R5cGVdO1xuICAgIHZhciB2YWx1ZSA9IGlzTW91c2UgPyBldnRbY10gOiBldnQudG91Y2hlc1swXVtjXTtcbiAgICByZXR1cm4gcG9pbnRWYWx1ZS5zZXQodmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlckRvd24oZXZ0KSB7XG4gICAgdmFyIHBvaW50ID0gcmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcyk7XG4gICAgc3RhcnREcmFnLnNldChwb2ludCk7XG4gICAgbGFzdERyYWcuc2V0KHBvaW50KTtcbiAgICByZXR1cm4gcHhUb1BlcmNlbnQubWVhc3VyZShzdGFydERyYWcuZ2V0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlck1vdmUoZXZ0KSB7XG4gICAgdmFyIHBvaW50ID0gcmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcyk7XG4gICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGlmZlRpbWUgPSBub3dUaW1lIC0gbGFzdE1vdmVUaW1lO1xuXG4gICAgaWYgKGRpZmZUaW1lID49IHRyYWNrSW50ZXJ2YWwpIHtcbiAgICAgIGlmIChkaWZmVGltZSA+PSB0cmFja1RpbWUpIHRyYWNrUG9pbnRzID0gW107XG4gICAgICB0cmFja1BvaW50cy5wdXNoKHBvaW50LmdldCgpKTtcbiAgICAgIGxhc3RNb3ZlVGltZSA9IG5vd1RpbWU7XG4gICAgfVxuXG4gICAgZGlmZkRyYWcuc2V0KHBvaW50KS5zdWJ0cmFjdChsYXN0RHJhZyk7XG4gICAgbGFzdERyYWcuc2V0KHBvaW50KTtcbiAgICByZXR1cm4gcHhUb1BlcmNlbnQubWVhc3VyZShkaWZmRHJhZy5nZXQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyVXAoKSB7XG4gICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGlmZlRpbWUgPSBub3dUaW1lIC0gbGFzdE1vdmVUaW1lO1xuICAgIHZhciBjdXJyZW50UG9pbnQgPSBsYXN0RHJhZy5nZXQoKTtcbiAgICB2YXIgZm9yY2UgPSB0cmFja1BvaW50cy5zbGljZSgtdHJhY2tMZW5ndGgpLm1hcChmdW5jdGlvbiAodHJhY2tQb2ludCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRQb2ludCAtIHRyYWNrUG9pbnQ7XG4gICAgfSkuc29ydChmdW5jdGlvbiAocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMocDEpIDwgTWF0aC5hYnMocDIpID8gMSA6IC0xO1xuICAgIH0pWzBdO1xuICAgIGxhc3REcmFnLnNldChkaWZmVGltZSA+IHRyYWNrVGltZSB8fCAhZm9yY2UgPyAwIDogZm9yY2UpO1xuICAgIHRyYWNrUG9pbnRzID0gW107XG4gICAgcmV0dXJuIHB4VG9QZXJjZW50Lm1lYXN1cmUobGFzdERyYWcuZ2V0KCkpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgcG9pbnRlckRvd246IHBvaW50ZXJEb3duLFxuICAgIHBvaW50ZXJNb3ZlOiBwb2ludGVyTW92ZSxcbiAgICBwb2ludGVyVXA6IHBvaW50ZXJVcCxcbiAgICByZWFkUG9pbnQ6IHJlYWRQb2ludFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gTGltaXQocGFyYW1zKSB7XG4gIHZhciBtaW4gPSBwYXJhbXMubWluLFxuICAgICAgbWF4ID0gcGFyYW1zLm1heDtcbiAgdmFyIGxlbmd0aCA9IE1hdGguYWJzKG1pbiAtIG1heCk7XG5cbiAgZnVuY3Rpb24gcmVhY2hlZE1pbihuKSB7XG4gICAgcmV0dXJuIG4gPCBtaW47XG4gIH1cblxuICBmdW5jdGlvbiByZWFjaGVkTWF4KG4pIHtcbiAgICByZXR1cm4gbiA+IG1heDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWNoZWRBbnkobikge1xuICAgIHJldHVybiByZWFjaGVkTWluKG4pIHx8IHJlYWNoZWRNYXgobik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVPZmZzZXQobikge1xuICAgIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIG47XG5cbiAgICB3aGlsZSAocmVhY2hlZE1pbihuKSkge1xuICAgICAgbiArPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgd2hpbGUgKHJlYWNoZWRNYXgobikpIHtcbiAgICAgIG4gLT0gbGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBuO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcChuKSB7XG4gICAgaWYgKCFyZWFjaGVkQW55KG4pKSByZXR1cm4gbjtcbiAgICByZXR1cm4gcmVhY2hlZE1pbihuKSA/IG1heCA6IG1pbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cmFpbihuKSB7XG4gICAgaWYgKCFyZWFjaGVkQW55KG4pKSByZXR1cm4gbjtcbiAgICByZXR1cm4gcmVhY2hlZE1pbihuKSA/IG1pbiA6IG1heDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNvbnN0cmFpbjogY29uc3RyYWluLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGxvb3A6IGxvb3AsXG4gICAgbWF4OiBtYXgsXG4gICAgbWluOiBtaW4sXG4gICAgcmVhY2hlZEFueTogcmVhY2hlZEFueSxcbiAgICByZWFjaGVkTWF4OiByZWFjaGVkTWF4LFxuICAgIHJlYWNoZWRNaW46IHJlYWNoZWRNaW4sXG4gICAgcmVtb3ZlT2Zmc2V0OiByZW1vdmVPZmZzZXRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFB4VG9QZXJjZW50KHZpZXdJblB4KSB7XG4gIHZhciB0b3RhbFBlcmNlbnQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShuKSB7XG4gICAgcmV0dXJuIG4gLyB2aWV3SW5QeCAqIHRvdGFsUGVyY2VudDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIG1lYXN1cmU6IG1lYXN1cmUsXG4gICAgdG90YWxQZXJjZW50OiB0b3RhbFBlcmNlbnRcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbEJvZHkocGFyYW1zKSB7XG4gIHZhciBsb2NhdGlvbiA9IHBhcmFtcy5sb2NhdGlvbixcbiAgICAgIGJhc2VTcGVlZCA9IHBhcmFtcy5zcGVlZCxcbiAgICAgIGJhc2VNYXNzID0gcGFyYW1zLm1hc3M7XG4gIHZhciByb3VuZFRvVHdvRGVjaW1hbHMgPSByb3VuZFRvRGVjaW1hbHMoMik7XG4gIHZhciB2ZWxvY2l0eSA9IFZlY3RvcjFEKDApO1xuICB2YXIgYWNjZWxlcmF0aW9uID0gVmVjdG9yMUQoMCk7XG4gIHZhciBhdHRyYWN0aW9uID0gVmVjdG9yMUQoMCk7XG4gIHZhciBhdHRyYWN0aW9uRGlyZWN0aW9uID0gMDtcbiAgdmFyIHNwZWVkID0gYmFzZVNwZWVkO1xuICB2YXIgbWFzcyA9IGJhc2VNYXNzO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2ZWxvY2l0eS5hZGQoYWNjZWxlcmF0aW9uKTtcbiAgICBsb2NhdGlvbi5hZGQodmVsb2NpdHkpO1xuICAgIGFjY2VsZXJhdGlvbi5tdWx0aXBseSgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Rm9yY2Uodikge1xuICAgIHYuZGl2aWRlKG1hc3MpO1xuICAgIGFjY2VsZXJhdGlvbi5hZGQodik7XG4gIH1cblxuICBmdW5jdGlvbiBzZWVrKHYpIHtcbiAgICBhdHRyYWN0aW9uLnNldCh2KS5zdWJ0cmFjdChsb2NhdGlvbik7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGF0dHJhY3Rpb24uZ2V0KCk7XG4gICAgdmFyIG0gPSBtYXAobWFnbml0dWRlLCAwLCAxMDAsIDAsIHNwZWVkKTtcbiAgICBhdHRyYWN0aW9uRGlyZWN0aW9uID0gbWF0aFNpZ24oYXR0cmFjdGlvbi5nZXQoKSk7XG4gICAgYXR0cmFjdGlvbi5ub3JtYWxpemUoKS5tdWx0aXBseShtKS5zdWJ0cmFjdCh2ZWxvY2l0eSk7XG4gICAgYXBwbHlGb3JjZShhdHRyYWN0aW9uKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh2KSB7XG4gICAgdmFyIGRpZmYgPSB2LmdldCgpIC0gbG9jYXRpb24uZ2V0KCk7XG4gICAgdmFyIGRpZmZSb3VuZGVkID0gcm91bmRUb1R3b0RlY2ltYWxzKGRpZmYpO1xuICAgIHZhciBoYXNTZXR0bGVkID0gIWRpZmZSb3VuZGVkO1xuICAgIGlmIChoYXNTZXR0bGVkKSBsb2NhdGlvbi5zZXQodik7XG4gICAgcmV0dXJuIGhhc1NldHRsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIGF0dHJhY3Rpb25EaXJlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiB1c2VTcGVlZChuKSB7XG4gICAgc3BlZWQgPSBuO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlTWFzcyhuKSB7XG4gICAgbWFzcyA9IG47XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VCYXNlU3BlZWQoKSB7XG4gICAgcmV0dXJuIHVzZVNwZWVkKGJhc2VTcGVlZCk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VCYXNlTWFzcygpIHtcbiAgICByZXR1cm4gdXNlTWFzcyhiYXNlTWFzcyk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICBzZWVrOiBzZWVrLFxuICAgIHNldHRsZTogc2V0dGxlLFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHVzZUJhc2VNYXNzOiB1c2VCYXNlTWFzcyxcbiAgICB1c2VCYXNlU3BlZWQ6IHVzZUJhc2VTcGVlZCxcbiAgICB1c2VNYXNzOiB1c2VNYXNzLFxuICAgIHVzZVNwZWVkOiB1c2VTcGVlZFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsQm91bmRzKHBhcmFtcykge1xuICB2YXIgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBsb2NhdGlvbiA9IHBhcmFtcy5sb2NhdGlvbixcbiAgICAgIHNjcm9sbEJvZHkgPSBwYXJhbXMuc2Nyb2xsQm9keTtcbiAgdmFyIHB1bGxCYWNrVGhyZXNob2xkID0gMTA7XG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNob3VsZENvbnN0cmFpbih0YXJnZXQpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWxpbWl0LnJlYWNoZWRBbnkodGFyZ2V0LmdldCgpKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghbGltaXQucmVhY2hlZEFueShsb2NhdGlvbi5nZXQoKSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cmFpbih0YXJnZXQsIHBvaW50ZXJEb3duKSB7XG4gICAgaWYgKCFzaG91bGRDb25zdHJhaW4odGFyZ2V0KSkgcmV0dXJuO1xuICAgIHZhciBmcmljdGlvbiA9IHBvaW50ZXJEb3duID8gMC43IDogMC40O1xuICAgIHZhciBkaWZmVG9UYXJnZXQgPSB0YXJnZXQuZ2V0KCkgLSBsb2NhdGlvbi5nZXQoKTtcbiAgICB0YXJnZXQuc3VidHJhY3QoZGlmZlRvVGFyZ2V0ICogZnJpY3Rpb24pO1xuXG4gICAgaWYgKCFwb2ludGVyRG93biAmJiBNYXRoLmFicyhkaWZmVG9UYXJnZXQpIDwgcHVsbEJhY2tUaHJlc2hvbGQpIHtcbiAgICAgIHRhcmdldC5zZXQobGltaXQuY29uc3RyYWluKHRhcmdldC5nZXQoKSkpO1xuICAgICAgc2Nyb2xsQm9keS51c2VTcGVlZCgxMCkudXNlTWFzcygzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBY3RpdmUoYWN0aXZlKSB7XG4gICAgZGlzYWJsZWQgPSAhYWN0aXZlO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY29uc3RyYWluOiBjb25zdHJhaW4sXG4gICAgdG9nZ2xlQWN0aXZlOiB0b2dnbGVBY3RpdmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbENvbnRhaW4ocGFyYW1zKSB7XG4gIHZhciBhbGlnbm1lbnQgPSBwYXJhbXMuYWxpZ25tZW50LFxuICAgICAgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemUsXG4gICAgICB2aWV3U2l6ZSA9IHBhcmFtcy52aWV3U2l6ZTtcbiAgdmFyIHNjcm9sbEJvdW5kcyA9IExpbWl0KHtcbiAgICBtaW46IC1jb250ZW50U2l6ZSArIHZpZXdTaXplLFxuICAgIG1heDogMFxuICB9KTtcbiAgdmFyIGFsaWduZWRXaXRoaW5WaWV3ID0gW2FsaWdubWVudC5tZWFzdXJlKGNvbnRlbnRTaXplKV07XG4gIHZhciBjb250ZW50RXhjZWVkc1ZpZXcgPSBjb250ZW50U2l6ZSA+IHZpZXdTaXplO1xuXG4gIGZ1bmN0aW9uIGZpbmREdXBsaWNhdGVzKHNjcm9sbFNuYXBzKSB7XG4gICAgdmFyIHN0YXJ0U25hcCA9IHNjcm9sbFNuYXBzWzBdO1xuICAgIHZhciBlbmRTbmFwID0gc2Nyb2xsU25hcHNbc2Nyb2xsU25hcHMubGVuZ3RoIC0gMV07XG4gICAgdmFyIG1pbiA9IHNjcm9sbFNuYXBzLmxhc3RJbmRleE9mKHN0YXJ0U25hcCkgKyAxO1xuICAgIHZhciBtYXggPSBzY3JvbGxTbmFwcy5pbmRleE9mKGVuZFNuYXApO1xuICAgIHJldHVybiBMaW1pdCh7XG4gICAgICBtaW46IG1pbixcbiAgICAgIG1heDogbWF4XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtZWFzdXJlKHNjcm9sbFNuYXBzLCB0cmltKSB7XG4gICAgdmFyIGNvbnRhaW5lZFNuYXBzID0gc2Nyb2xsU25hcHMubWFwKHNjcm9sbEJvdW5kcy5jb25zdHJhaW4pO1xuXG4gICAgdmFyIF9hID0gZmluZER1cGxpY2F0ZXMoY29udGFpbmVkU25hcHMpLFxuICAgICAgICBtaW4gPSBfYS5taW4sXG4gICAgICAgIG1heCA9IF9hLm1heDtcblxuICAgIGlmICghY29udGVudEV4Y2VlZHNWaWV3KSByZXR1cm4gYWxpZ25lZFdpdGhpblZpZXc7XG4gICAgaWYgKCF0cmltKSByZXR1cm4gY29udGFpbmVkU25hcHM7XG4gICAgcmV0dXJuIGNvbnRhaW5lZFNuYXBzLnNsaWNlKG1pbiAtIDEsIG1heCArIDEpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbWVhc3VyZTogbWVhc3VyZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsTGltaXQocGFyYW1zKSB7XG4gIHZhciBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIGxvb3AgPSBwYXJhbXMubG9vcDtcblxuICBmdW5jdGlvbiBtZWFzdXJlKHNjcm9sbFNuYXBzKSB7XG4gICAgdmFyIHN0YXJ0U25hcCA9IHNjcm9sbFNuYXBzWzBdO1xuICAgIHZhciBlbmRTbmFwID0gc2Nyb2xsU25hcHNbc2Nyb2xsU25hcHMubGVuZ3RoIC0gMV07XG4gICAgdmFyIG1pbiA9IGxvb3AgPyBzdGFydFNuYXAgLSBjb250ZW50U2l6ZSA6IGVuZFNuYXA7XG4gICAgdmFyIG1heCA9IHN0YXJ0U25hcDtcbiAgICByZXR1cm4gTGltaXQoe1xuICAgICAgbWluOiBtaW4sXG4gICAgICBtYXg6IG1heFxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbWVhc3VyZTogbWVhc3VyZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsTG9vcGVyKHBhcmFtcykge1xuICB2YXIgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemUsXG4gICAgICBsb2NhdGlvbiA9IHBhcmFtcy5sb2NhdGlvbixcbiAgICAgIGxpbWl0ID0gcGFyYW1zLmxpbWl0LFxuICAgICAgcHhUb1BlcmNlbnQgPSBwYXJhbXMucHhUb1BlcmNlbnQ7XG4gIHZhciBtaW4gPSBsaW1pdC5taW4gKyBweFRvUGVyY2VudC5tZWFzdXJlKDAuMSk7XG4gIHZhciBtYXggPSBsaW1pdC5tYXggKyBweFRvUGVyY2VudC5tZWFzdXJlKDAuMSk7XG5cbiAgdmFyIF9hID0gTGltaXQoe1xuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4XG4gIH0pLFxuICAgICAgcmVhY2hlZE1pbiA9IF9hLnJlYWNoZWRNaW4sXG4gICAgICByZWFjaGVkTWF4ID0gX2EucmVhY2hlZE1heDtcblxuICBmdW5jdGlvbiBzaG91bGRMb29wKGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHJldHVybiByZWFjaGVkTWF4KGxvY2F0aW9uLmdldCgpKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAtMSkgcmV0dXJuIHJlYWNoZWRNaW4obG9jYXRpb24uZ2V0KCkpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AodmVjdG9ycywgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFzaG91bGRMb29wKGRpcmVjdGlvbikpIHJldHVybjtcbiAgICB2YXIgbG9vcERpc3RhbmNlID0gY29udGVudFNpemUgKiAoZGlyZWN0aW9uICogLTEpO1xuICAgIHZlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHYuYWRkKGxvb3BEaXN0YW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBsb29wOiBsb29wXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxQcm9ncmVzcyhwYXJhbXMpIHtcbiAgdmFyIF9hID0gcGFyYW1zLmxpbWl0LFxuICAgICAgbWF4ID0gX2EubWF4LFxuICAgICAgc2Nyb2xsTGVuZ3RoID0gX2EubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldChuKSB7XG4gICAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IG4gLSBtYXg7XG4gICAgcmV0dXJuIGN1cnJlbnRMb2NhdGlvbiAvIC1zY3JvbGxMZW5ndGg7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBnZXQ6IGdldFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsU25hcChwYXJhbXMpIHtcbiAgdmFyIHNuYXBTaXplcyA9IHBhcmFtcy5zbmFwU2l6ZXMsXG4gICAgICBhbGlnbm1lbnQgPSBwYXJhbXMuYWxpZ25tZW50LFxuICAgICAgbG9vcCA9IHBhcmFtcy5sb29wO1xuICB2YXIgYWxpZ25tZW50cyA9IHNuYXBTaXplcy5tYXAoYWxpZ25tZW50Lm1lYXN1cmUpO1xuICB2YXIgZGlzdGFuY2VzQmV0d2VlbiA9IGRpc3RhbmNlc0JldHdlZW5TY3JvbGxTbmFwcygpO1xuXG4gIGZ1bmN0aW9uIGRpc3RhbmNlc0JldHdlZW5TY3JvbGxTbmFwcygpIHtcbiAgICB2YXIgbGltaXQgPSBMaW1pdCh7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IHNuYXBTaXplcy5sZW5ndGggLSAxXG4gICAgfSk7XG4gICAgdmFyIGNvdW50ZXIgPSBDb3VudGVyKHtcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgbG9vcDogbG9vcFxuICAgIH0pO1xuICAgIHJldHVybiBzbmFwU2l6ZXMubWFwKGZ1bmN0aW9uIChzaXplLCBpbmRleCkge1xuICAgICAgdmFyIG5leHQgPSBjb3VudGVyLnNldChpbmRleCArIDEpLmdldCgpO1xuICAgICAgcmV0dXJuIHNpemUgKyBhbGlnbm1lbnRzW2luZGV4XSAtIGFsaWdubWVudHNbbmV4dF07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtZWFzdXJlKGluZGV4KSB7XG4gICAgdmFyIHNpemVzID0gZGlzdGFuY2VzQmV0d2Vlbi5zbGljZSgwLCBpbmRleCk7XG4gICAgcmV0dXJuIHNpemVzLnJlZHVjZShmdW5jdGlvbiAoYSwgcykge1xuICAgICAgcmV0dXJuIGEgLSBzO1xuICAgIH0sIGFsaWdubWVudHNbMF0pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbWVhc3VyZTogbWVhc3VyZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsVGFyZ2V0KHBhcmFtcykge1xuICB2YXIgbG9vcCA9IHBhcmFtcy5sb29wLFxuICAgICAgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBzY3JvbGxTbmFwcyA9IHBhcmFtcy5zY3JvbGxTbmFwcyxcbiAgICAgIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplO1xuICB2YXIgcmVhY2hlZE1heCA9IGxpbWl0LnJlYWNoZWRNYXgsXG4gICAgICByZWFjaGVkQW55ID0gbGltaXQucmVhY2hlZEFueSxcbiAgICAgIHJlbW92ZU9mZnNldCA9IGxpbWl0LnJlbW92ZU9mZnNldDtcblxuICBmdW5jdGlvbiBtaW5EaXN0YW5jZShkMSwgZDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoZDEpIDwgTWF0aC5hYnMoZDIpID8gZDEgOiBkMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRUYXJnZXRTbmFwKHRhcmdldCkge1xuICAgIHZhciBkaXN0YW5jZSA9IHJlbW92ZU9mZnNldCh0YXJnZXQpO1xuICAgIHZhciBhc2NEaWZmc1RvU25hcHMgPSBzY3JvbGxTbmFwcy5tYXAoZnVuY3Rpb24gKHNjcm9sbFNuYXApIHtcbiAgICAgIHJldHVybiBzY3JvbGxTbmFwIC0gZGlzdGFuY2U7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChkaWZmVG9TbmFwKSB7XG4gICAgICByZXR1cm4gc2hvcnRjdXQoZGlmZlRvU25hcCwgMCk7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChkaWZmLCBpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaWZmOiBkaWZmLFxuICAgICAgICBpbmRleDogaVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChkMSwgZDIpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhkMS5kaWZmKSAtIE1hdGguYWJzKGQyLmRpZmYpO1xuICAgIH0pO1xuICAgIHZhciBpbmRleCA9IGFzY0RpZmZzVG9TbmFwc1swXS5pbmRleDtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3J0Y3V0KHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIHQxID0gdGFyZ2V0O1xuICAgIHZhciB0MiA9IHRhcmdldCArIGNvbnRlbnRTaXplO1xuICAgIHZhciB0MyA9IHRhcmdldCAtIGNvbnRlbnRTaXplO1xuICAgIGlmICghbG9vcCkgcmV0dXJuIHQxO1xuICAgIGlmICghZGlyZWN0aW9uKSByZXR1cm4gbWluRGlzdGFuY2UobWluRGlzdGFuY2UodDEsIHQyKSwgdDMpO1xuICAgIHZhciBzaG9ydGVzdCA9IG1pbkRpc3RhbmNlKHQxLCBkaXJlY3Rpb24gPT09IDEgPyB0MiA6IHQzKTtcbiAgICByZXR1cm4gTWF0aC5hYnMoc2hvcnRlc3QpICogZGlyZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZFRhcmdldEluZGV4KHRhcmdldCwgaW5kZXgpIHtcbiAgICB2YXIgcmVhY2hlZEJvdW5kID0gIWxvb3AgJiYgcmVhY2hlZEFueSh0YXJnZXQpO1xuICAgIGlmICghcmVhY2hlZEJvdW5kKSByZXR1cm4gaW5kZXg7XG4gICAgdmFyIF9hID0gcGFyYW1zLmluZGV4LFxuICAgICAgICBtaW4gPSBfYS5taW4sXG4gICAgICAgIG1heCA9IF9hLm1heDtcbiAgICByZXR1cm4gcmVhY2hlZE1heCh0YXJnZXQpID8gbWluIDogbWF4O1xuICB9XG5cbiAgZnVuY3Rpb24gYnlJbmRleChpbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIGRpZmZUb1NuYXAgPSBzY3JvbGxTbmFwc1tpbmRleF0gLSBwYXJhbXMudGFyZ2V0LmdldCgpO1xuICAgIHZhciBkaXN0YW5jZSA9IHNob3J0Y3V0KGRpZmZUb1NuYXAsIGRpcmVjdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBieURpc3RhbmNlKGRpc3RhbmNlLCBzbmFwKSB7XG4gICAgdmFyIHRhcmdldCA9IHBhcmFtcy50YXJnZXQuZ2V0KCkgKyBkaXN0YW5jZTtcbiAgICB2YXIgdGFyZ2V0U25hcCA9IGZpbmRUYXJnZXRTbmFwKHRhcmdldCk7XG4gICAgdmFyIGluZGV4ID0gZmluZFRhcmdldEluZGV4KHRhcmdldCwgdGFyZ2V0U25hcC5pbmRleCk7XG4gICAgdmFyIHJlYWNoZWRCb3VuZCA9ICFsb29wICYmIHJlYWNoZWRBbnkodGFyZ2V0KTtcbiAgICBpZiAoIXNuYXAgfHwgcmVhY2hlZEJvdW5kKSByZXR1cm4ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfTtcbiAgICB2YXIgZGlmZlRvU25hcCA9IHNjcm9sbFNuYXBzW2luZGV4XSAtIHRhcmdldFNuYXAuZGlzdGFuY2U7XG4gICAgdmFyIHNuYXBEaXN0YW5jZSA9IGRpc3RhbmNlICsgc2hvcnRjdXQoZGlmZlRvU25hcCwgMCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGRpc3RhbmNlOiBzbmFwRGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYnlEaXN0YW5jZTogYnlEaXN0YW5jZSxcbiAgICBieUluZGV4OiBieUluZGV4LFxuICAgIHNob3J0Y3V0OiBzaG9ydGN1dFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsVG8ocGFyYW1zKSB7XG4gIHZhciBpbmRleEN1cnJlbnQgPSBwYXJhbXMuaW5kZXgsXG4gICAgICBzY3JvbGxUYXJnZXQgPSBwYXJhbXMuc2Nyb2xsVGFyZ2V0LFxuICAgICAgYW5pbWF0aW9uID0gcGFyYW1zLmFuaW1hdGlvbjtcbiAgdmFyIGluZGV4UHJldmlvdXMgPSBwYXJhbXMuaW5kZXhQcmV2aW91cyxcbiAgICAgIGV2ZW50cyA9IHBhcmFtcy5ldmVudHMsXG4gICAgICB0YXJnZXREaXN0YW5jZSA9IHBhcmFtcy50YXJnZXQ7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0KSB7XG4gICAgdmFyIGRpc3RhbmNlRGlmZiA9IHRhcmdldC5kaXN0YW5jZTtcbiAgICB2YXIgaW5kZXhEaWZmID0gdGFyZ2V0LmluZGV4ICE9PSBpbmRleEN1cnJlbnQuZ2V0KCk7XG5cbiAgICBpZiAoZGlzdGFuY2VEaWZmKSB7XG4gICAgICBhbmltYXRpb24uc3RhcnQoKTtcbiAgICAgIHRhcmdldERpc3RhbmNlLmFkZChkaXN0YW5jZURpZmYpO1xuICAgIH1cblxuICAgIGlmIChpbmRleERpZmYpIHtcbiAgICAgIGluZGV4UHJldmlvdXMuc2V0KGluZGV4Q3VycmVudC5nZXQoKSk7XG4gICAgICBpbmRleEN1cnJlbnQuc2V0KHRhcmdldC5pbmRleCk7XG4gICAgICBldmVudHMuZW1pdCgnc2VsZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzdGFuY2Uobiwgc25hcCkge1xuICAgIHZhciB0YXJnZXQgPSBzY3JvbGxUYXJnZXQuYnlEaXN0YW5jZShuLCBzbmFwKTtcbiAgICBzY3JvbGxUbyh0YXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXgobiwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gaW5kZXhDdXJyZW50LmNsb25lKCkuc2V0KG4pO1xuICAgIHZhciB0YXJnZXQgPSBzY3JvbGxUYXJnZXQuYnlJbmRleCh0YXJnZXRJbmRleC5nZXQoKSwgZGlyZWN0aW9uKTtcbiAgICBzY3JvbGxUbyh0YXJnZXQpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgIGluZGV4OiBpbmRleFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2xpZGVMb29wZXIocGFyYW1zKSB7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXMsXG4gICAgICBzY3JvbGxMb2NhdGlvbiA9IHBhcmFtcy5sb2NhdGlvbixcbiAgICAgIHNsaWRlc0luVmlldyA9IHBhcmFtcy5zbGlkZXNJblZpZXcsXG4gICAgICBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xuICB2YXIgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemUsXG4gICAgICB2aWV3U2l6ZSA9IHBhcmFtcy52aWV3U2l6ZSxcbiAgICAgIHNsaWRlU2l6ZXMgPSBwYXJhbXMuc2xpZGVTaXplcyxcbiAgICAgIHNjcm9sbFNuYXBzID0gcGFyYW1zLnNjcm9sbFNuYXBzO1xuICB2YXIgYXNjSXRlbXMgPSBhcnJheUtleXMoc2xpZGVTaXplcyk7XG4gIHZhciBkZXNjSXRlbXMgPSBhcnJheUtleXMoc2xpZGVTaXplcykucmV2ZXJzZSgpO1xuICB2YXIgbG9vcFBvaW50cyA9IHN0YXJ0UG9pbnRzKCkuY29uY2F0KGVuZFBvaW50cygpKTtcbiAgdmFyIGxvb3BTdHlsZSA9IGF4aXMuc2Nyb2xsID09PSAneCcgPyAnbGVmdCcgOiAndG9wJztcblxuICBmdW5jdGlvbiByZW1vdmVTbGlkZVNpemVzKGluZGV4ZXMsIGZyb20pIHtcbiAgICByZXR1cm4gaW5kZXhlcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgIHJldHVybiBhIC0gc2xpZGVTaXplc1tpXTtcbiAgICB9LCBmcm9tKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlc0luR2FwKGluZGV4ZXMsIGdhcCkge1xuICAgIHJldHVybiBpbmRleGVzLnJlZHVjZShmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgdmFyIHJlbWFpbmluZ0dhcCA9IHJlbW92ZVNsaWRlU2l6ZXMoYSwgZ2FwKTtcbiAgICAgIHJldHVybiByZW1haW5pbmdHYXAgPiAwID8gYS5jb25jYXQoW2ldKSA6IGE7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZExvb3BQb2ludHMoaW5kZXhlcywgZWRnZSkge1xuICAgIHZhciBpc1N0YXJ0RWRnZSA9IGVkZ2UgPT09ICdzdGFydCc7XG4gICAgdmFyIG9mZnNldCA9IGlzU3RhcnRFZGdlID8gLWNvbnRlbnRTaXplIDogY29udGVudFNpemU7XG4gICAgdmFyIHNsaWRlQm91bmRzID0gc2xpZGVzSW5WaWV3LmZpbmRTbGlkZUJvdW5kcyhvZmZzZXQpO1xuICAgIHJldHVybiBpbmRleGVzLm1hcChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHZhciBpbml0aWFsID0gaXNTdGFydEVkZ2UgPyAwIDogLWNvbnRlbnRTaXplO1xuICAgICAgdmFyIGFsdGVyZWQgPSBpc1N0YXJ0RWRnZSA/IGNvbnRlbnRTaXplIDogMDtcbiAgICAgIHZhciBib3VuZHMgPSBzbGlkZUJvdW5kcy5maWx0ZXIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXggPT09IGluZGV4O1xuICAgICAgfSlbMF07XG4gICAgICB2YXIgcG9pbnQgPSBib3VuZHNbaXNTdGFydEVkZ2UgPyAnZW5kJyA6ICdzdGFydCddO1xuXG4gICAgICB2YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsTG9jYXRpb24uZ2V0KCkgPiBwb2ludCA/IGluaXRpYWwgOiBhbHRlcmVkO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBnZXRUYXJnZXQ6IGdldFRhcmdldCxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBsb2NhdGlvbjogLTFcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFBvaW50cygpIHtcbiAgICB2YXIgZ2FwID0gc2Nyb2xsU25hcHNbMF0gLSAxO1xuICAgIHZhciBpbmRleGVzID0gc2xpZGVzSW5HYXAoZGVzY0l0ZW1zLCBnYXApO1xuICAgIHJldHVybiBmaW5kTG9vcFBvaW50cyhpbmRleGVzLCAnZW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRQb2ludHMoKSB7XG4gICAgdmFyIGdhcCA9IHZpZXdTaXplIC0gc2Nyb2xsU25hcHNbMF0gLSAxO1xuICAgIHZhciBpbmRleGVzID0gc2xpZGVzSW5HYXAoYXNjSXRlbXMsIGdhcCk7XG4gICAgcmV0dXJuIGZpbmRMb29wUG9pbnRzKGluZGV4ZXMsICdzdGFydCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuTG9vcCgpIHtcbiAgICByZXR1cm4gbG9vcFBvaW50cy5ldmVyeShmdW5jdGlvbiAoX2EpIHtcbiAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgdmFyIG90aGVySW5kZXhlcyA9IGFzY0l0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXg7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZW1vdmVTbGlkZVNpemVzKG90aGVySW5kZXhlcywgdmlld1NpemUpIDw9IDA7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKHNsaWRlcykge1xuICAgIGxvb3BQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAobG9vcFBvaW50KSB7XG4gICAgICB2YXIgZ2V0VGFyZ2V0ID0gbG9vcFBvaW50LmdldFRhcmdldCxcbiAgICAgICAgICBsb2NhdGlvbiA9IGxvb3BQb2ludC5sb2NhdGlvbixcbiAgICAgICAgICBpbmRleCA9IGxvb3BQb2ludC5pbmRleDtcbiAgICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoKTtcblxuICAgICAgaWYgKHRhcmdldCAhPT0gbG9jYXRpb24pIHtcbiAgICAgICAgc2xpZGVzW2luZGV4XS5zdHlsZVtsb29wU3R5bGVdID0gZGlyZWN0aW9uLmFwcGx5VG8odGFyZ2V0KSArIFwiJVwiO1xuICAgICAgICBsb29wUG9pbnQubG9jYXRpb24gPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihzbGlkZXMpIHtcbiAgICBsb29wUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICB2YXIgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgIHNsaWRlc1tpbmRleF0uc3R5bGVbbG9vcFN0eWxlXSA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY2FuTG9vcDogY2FuTG9vcCxcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgbG9vcDogbG9vcCxcbiAgICBsb29wUG9pbnRzOiBsb29wUG9pbnRzXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTbGlkZUZvY3VzKHBhcmFtcykge1xuICB2YXIgc2Nyb2xsVG8gPSBwYXJhbXMuc2Nyb2xsVG8sXG4gICAgICBzbGlkZXNUb1Njcm9sbCA9IHBhcmFtcy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgIHJvb3QgPSBwYXJhbXMucm9vdDtcbiAgdmFyIGV2ZW50U3RvcmUgPSBFdmVudFN0b3JlKCk7XG4gIHZhciByZW1vdmVBbGxFdmVudHMgPSBldmVudFN0b3JlLnJlbW92ZUFsbDtcbiAgdmFyIGxhc3RUYWJQcmVzc1RpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVGFiUHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSAhPT0gOSkgcmV0dXJuO1xuICAgIGxhc3RUYWJQcmVzc1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEZvY3VzRXZlbnQoc2xpZGUsIGluZGV4KSB7XG4gICAgdmFyIGZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICB2YXIgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIGRpZmZUaW1lID0gbm93VGltZSAtIGxhc3RUYWJQcmVzc1RpbWU7XG4gICAgICBpZiAoZGlmZlRpbWUgPiAxMCkgcmV0dXJuO1xuICAgICAgcm9vdC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgIHNjcm9sbFRvLmluZGV4KHNlbGVjdGVkSW5kZXgsIDApO1xuICAgIH07XG5cbiAgICBldmVudFN0b3JlLmFkZChzbGlkZSwgJ2ZvY3VzJywgZm9jdXMsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQWN0aXZhdGlvbkV2ZW50cyhzbGlkZXMpIHtcbiAgICBldmVudFN0b3JlLmFkZChkb2N1bWVudCwgJ2tleWRvd24nLCByZWdpc3RlclRhYlByZXNzLCBmYWxzZSk7XG4gICAgc2xpZGVzLmZvckVhY2goYWRkRm9jdXNFdmVudCk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGRBY3RpdmF0aW9uRXZlbnRzOiBhZGRBY3RpdmF0aW9uRXZlbnRzLFxuICAgIHJlbW92ZUFsbEV2ZW50czogcmVtb3ZlQWxsRXZlbnRzXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTbGlkZXNJblZpZXcocGFyYW1zKSB7XG4gIHZhciBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIHNsaWRlU2l6ZXMgPSBwYXJhbXMuc2xpZGVTaXplcyxcbiAgICAgIHZpZXdTaXplID0gcGFyYW1zLnZpZXdTaXplO1xuICB2YXIgaW5WaWV3VGhyZXNob2xkID0gcGFyYW1zLmluVmlld1RocmVzaG9sZCxcbiAgICAgIGxvb3AgPSBwYXJhbXMubG9vcDtcbiAgdmFyIHRocmVzaG9sZCA9IE1hdGgubWluKE1hdGgubWF4KGluVmlld1RocmVzaG9sZCwgMC4wMSksIDAuOTkpO1xuICB2YXIgc2Nyb2xsU25hcHMgPSBhcnJheUtleXMoc2xpZGVTaXplcykubWFwKHNjcm9sbFNuYXApO1xuICB2YXIgb2Zmc2V0cyA9IGxvb3AgPyBbMCwgY29udGVudFNpemUsIC1jb250ZW50U2l6ZV0gOiBbMF07XG4gIHZhciBzbGlkZUJvdW5kcyA9IG9mZnNldHMucmVkdWNlKGZ1bmN0aW9uIChhLCBsb29wT2Zmc2V0KSB7XG4gICAgcmV0dXJuIGEuY29uY2F0KGZpbmRTbGlkZUJvdW5kcyhsb29wT2Zmc2V0LCB0aHJlc2hvbGQpKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbFNuYXAoaW5kZXgpIHtcbiAgICB2YXIgc3BhbiA9IHNsaWRlU2l6ZXMuc2xpY2UoMCwgaW5kZXgpO1xuICAgIHJldHVybiBzcGFuLnJlZHVjZShmdW5jdGlvbiAoYSwgcykge1xuICAgICAgcmV0dXJuIGEgLSBzO1xuICAgIH0sIDApO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZFNsaWRlQm91bmRzKG9mZnNldCwgdGhyZXNob2xkKSB7XG4gICAgdmFyIHRocmVzaG9sZHMgPSBzbGlkZVNpemVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHMgKiAodGhyZXNob2xkIHx8IDApO1xuICAgIH0pO1xuICAgIHJldHVybiBzY3JvbGxTbmFwcy5tYXAoZnVuY3Rpb24gKHNuYXAsIGluZGV4KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc25hcCAtIHNsaWRlU2l6ZXNbaW5kZXhdICsgdGhyZXNob2xkc1tpbmRleF0gKyBvZmZzZXQsXG4gICAgICAgIGVuZDogc25hcCArIHZpZXdTaXplIC0gdGhyZXNob2xkc1tpbmRleF0gKyBvZmZzZXQsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIHNsaWRlQm91bmRzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgc2xpZGVCb3VuZCkge1xuICAgICAgdmFyIGluZGV4ID0gc2xpZGVCb3VuZC5pbmRleCxcbiAgICAgICAgICBzdGFydCA9IHNsaWRlQm91bmQuc3RhcnQsXG4gICAgICAgICAgZW5kID0gc2xpZGVCb3VuZC5lbmQ7XG4gICAgICB2YXIgaW5MaXN0ID0gbGlzdC5pbmRleE9mKGluZGV4KSAhPT0gLTE7XG4gICAgICB2YXIgaW5WaWV3ID0gc3RhcnQgPCBsb2NhdGlvbiAmJiBlbmQgPiBsb2NhdGlvbjtcbiAgICAgIHJldHVybiAhaW5MaXN0ICYmIGluVmlldyA/IGxpc3QuY29uY2F0KFtpbmRleF0pIDogbGlzdDtcbiAgICB9LCBbXSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjaGVjazogY2hlY2ssXG4gICAgZmluZFNsaWRlQm91bmRzOiBmaW5kU2xpZGVCb3VuZHNcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZShwYXJhbXMpIHtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcyxcbiAgICAgIGNvbnRhaW5lciA9IHBhcmFtcy5jb250YWluZXIsXG4gICAgICBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xuICB2YXIgY29udGFpbmVyU3R5bGUgPSBjb250YWluZXIuc3R5bGU7XG4gIHZhciB0cmFuc2xhdGUgPSBheGlzLnNjcm9sbCA9PT0gJ3gnID8geCA6IHk7XG4gIHZhciByb3VuZFRvVHdvRGVjaW1hbHMgPSByb3VuZFRvRGVjaW1hbHMoMik7XG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICB2YXIgbG9jYXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIHgobikge1xuICAgIHJldHVybiBcInRyYW5zbGF0ZTNkKFwiICsgbiArIFwiJSwwcHgsMHB4KVwiO1xuICB9XG5cbiAgZnVuY3Rpb24geShuKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlM2QoMHB4LFwiICsgbiArIFwiJSwwcHgpXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0byh2KSB7XG4gICAgdmFyIHRhcmdldCA9IHJvdW5kVG9Ud29EZWNpbWFscyh2LmdldCgpKTtcbiAgICBpZiAoZGlzYWJsZWQgfHwgbG9jYXRpb24gPT09IHRhcmdldCkgcmV0dXJuO1xuICAgIGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS50cmFuc2Zvcm07XG4gICAgY29udGFpbmVyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlKGRpcmVjdGlvbi5hcHBseVRvKHRhcmdldCkpO1xuICAgIGxvY2F0aW9uID0gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGFjdGl2ZSkge1xuICAgIGRpc2FibGVkID0gIWFjdGl2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGNvbnRhaW5lclN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIGxvY2F0aW9uID0gMDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNsZWFyOiBjbGVhcixcbiAgICB0bzogdG8sXG4gICAgdG9nZ2xlQWN0aXZlOiB0b2dnbGVBY3RpdmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIEVuZ2luZShyb290LCBjb250YWluZXIsIHNsaWRlcywgb3B0aW9ucywgZXZlbnRzKSB7XG4gIC8vIE9wdGlvbnNcbiAgdmFyIGFsaWduID0gb3B0aW9ucy5hbGlnbixcbiAgICAgIHNjcm9sbEF4aXMgPSBvcHRpb25zLmF4aXMsXG4gICAgICBjb250ZW50RGlyZWN0aW9uID0gb3B0aW9ucy5kaXJlY3Rpb24sXG4gICAgICBzdGFydEluZGV4ID0gb3B0aW9ucy5zdGFydEluZGV4LFxuICAgICAgaW5WaWV3VGhyZXNob2xkID0gb3B0aW9ucy5pblZpZXdUaHJlc2hvbGQsXG4gICAgICBsb29wID0gb3B0aW9ucy5sb29wLFxuICAgICAgc3BlZWQgPSBvcHRpb25zLnNwZWVkLFxuICAgICAgZHJhZ0ZyZWUgPSBvcHRpb25zLmRyYWdGcmVlLFxuICAgICAgc2xpZGVzVG9TY3JvbGwgPSBvcHRpb25zLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgY29udGFpblNjcm9sbCA9IG9wdGlvbnMuY29udGFpblNjcm9sbDsgLy8gTWVhc3VyZW1lbnRzXG5cbiAgdmFyIGF4aXMgPSBBeGlzKHNjcm9sbEF4aXMpO1xuICB2YXIgcHhUb1BlcmNlbnQgPSBQeFRvUGVyY2VudChheGlzLm1lYXN1cmUoY29udGFpbmVyKSk7XG4gIHZhciB2aWV3U2l6ZSA9IHB4VG9QZXJjZW50LnRvdGFsUGVyY2VudDtcbiAgdmFyIHNsaWRlU2l6ZXMgPSBzbGlkZXMubWFwKGF4aXMubWVhc3VyZSkubWFwKHB4VG9QZXJjZW50Lm1lYXN1cmUpO1xuICB2YXIgc2xpZGVJbmRleGVzID0gYXJyYXlLZXlzKHNsaWRlU2l6ZXMpO1xuICB2YXIgZ3JvdXBlZFNpemVzID0gZ3JvdXBBcnJheShzbGlkZVNpemVzLCBzbGlkZXNUb1Njcm9sbCk7XG4gIHZhciBzbmFwU2l6ZXMgPSBncm91cGVkU2l6ZXMubWFwKGZ1bmN0aW9uIChnKSB7XG4gICAgcmV0dXJuIGcucmVkdWNlKGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgICByZXR1cm4gYSArIHM7XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgY29udGVudFNpemUgPSBzbGlkZVNpemVzLnJlZHVjZShmdW5jdGlvbiAoYSwgcykge1xuICAgIHJldHVybiBhICsgcztcbiAgfSwgMCk7XG4gIHZhciBhbGlnbm1lbnQgPSBBbGlnbm1lbnQoe1xuICAgIGFsaWduOiBhbGlnbixcbiAgICB2aWV3U2l6ZTogdmlld1NpemVcbiAgfSk7XG4gIHZhciBzY3JvbGxTbmFwID0gU2Nyb2xsU25hcCh7XG4gICAgc25hcFNpemVzOiBzbmFwU2l6ZXMsXG4gICAgYWxpZ25tZW50OiBhbGlnbm1lbnQsXG4gICAgbG9vcDogbG9vcFxuICB9KTtcbiAgdmFyIGRlZmF1bHRTbmFwcyA9IGFycmF5S2V5cyhzbmFwU2l6ZXMpLm1hcChzY3JvbGxTbmFwLm1lYXN1cmUpO1xuICB2YXIgY29udGFpbiA9IFNjcm9sbENvbnRhaW4oe1xuICAgIGFsaWdubWVudDogYWxpZ25tZW50LFxuICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZSxcbiAgICB2aWV3U2l6ZTogdmlld1NpemVcbiAgfSk7XG4gIHZhciBzaG91bGRDb250YWluID0gIWxvb3AgJiYgY29udGFpblNjcm9sbCAhPT0gJyc7XG4gIHZhciB0cmltU25hcHMgPSBjb250YWluU2Nyb2xsID09PSAndHJpbVNuYXBzJztcbiAgdmFyIGNvbnRhaW5lZFNuYXBzID0gY29udGFpbi5tZWFzdXJlKGRlZmF1bHRTbmFwcywgdHJpbVNuYXBzKTtcbiAgdmFyIHNjcm9sbFNuYXBzID0gc2hvdWxkQ29udGFpbiA/IGNvbnRhaW5lZFNuYXBzIDogZGVmYXVsdFNuYXBzO1xuICB2YXIgc2Nyb2xsTGltaXQgPSBTY3JvbGxMaW1pdCh7XG4gICAgbG9vcDogbG9vcCxcbiAgICBjb250ZW50U2l6ZTogY29udGVudFNpemVcbiAgfSk7XG4gIHZhciBsaW1pdCA9IHNjcm9sbExpbWl0Lm1lYXN1cmUoc2Nyb2xsU25hcHMpO1xuICB2YXIgZGlyZWN0aW9uID0gRGlyZWN0aW9uKGNvbnRlbnREaXJlY3Rpb24pOyAvLyBJbmRleFxuXG4gIHZhciBpbmRleE1heCA9IE1hdGgubWF4KDAsIHNjcm9sbFNuYXBzLmxlbmd0aCAtIDEpO1xuICB2YXIgaW5kZXhTcGFuID0gTGltaXQoe1xuICAgIG1pbjogMCxcbiAgICBtYXg6IGluZGV4TWF4XG4gIH0pO1xuICB2YXIgaW5kZXggPSBDb3VudGVyKHtcbiAgICBsaW1pdDogaW5kZXhTcGFuLFxuICAgIHN0YXJ0OiBzdGFydEluZGV4LFxuICAgIGxvb3A6IGxvb3BcbiAgfSk7XG4gIHZhciBpbmRleFByZXZpb3VzID0gaW5kZXguY2xvbmUoKTsgLy8gRHJhd1xuXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKCFsb29wKSB7XG4gICAgICBlbmdpbmUuc2Nyb2xsQm91bmRzLmNvbnN0cmFpbih0YXJnZXQsIGVuZ2luZS5kcmFnSGFuZGxlci5wb2ludGVyRG93bigpKTtcbiAgICB9XG5cbiAgICBlbmdpbmUuc2Nyb2xsQm9keS5zZWVrKHRhcmdldCkudXBkYXRlKCk7XG4gICAgdmFyIHNldHRsZWQgPSBlbmdpbmUuc2Nyb2xsQm9keS5zZXR0bGUodGFyZ2V0KTtcblxuICAgIGlmIChzZXR0bGVkICYmICFlbmdpbmUuZHJhZ0hhbmRsZXIucG9pbnRlckRvd24oKSkge1xuICAgICAgZW5naW5lLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICBldmVudHMuZW1pdCgnc2V0dGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFzZXR0bGVkKSB7XG4gICAgICBldmVudHMuZW1pdCgnc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGVuZ2luZS5zY3JvbGxMb29wZXIubG9vcChsb29wVmVjdG9ycywgZW5naW5lLnNjcm9sbEJvZHkuZGlyZWN0aW9uKCkpO1xuICAgICAgZW5naW5lLnNsaWRlTG9vcGVyLmxvb3Aoc2xpZGVzKTtcbiAgICB9XG5cbiAgICBlbmdpbmUudHJhbnNsYXRlLnRvKGxvY2F0aW9uKTtcbiAgICBlbmdpbmUuYW5pbWF0aW9uLnByb2NlZWQoKTtcbiAgfTsgLy8gU2hhcmVkXG5cblxuICB2YXIgYW5pbWF0aW9uID0gQW5pbWF0aW9uKHVwZGF0ZSk7XG4gIHZhciBzdGFydExvY2F0aW9uID0gc2Nyb2xsU25hcHNbaW5kZXguZ2V0KCldO1xuICB2YXIgbG9jYXRpb24gPSBWZWN0b3IxRChzdGFydExvY2F0aW9uKTtcbiAgdmFyIHRhcmdldCA9IFZlY3RvcjFEKHN0YXJ0TG9jYXRpb24pO1xuICB2YXIgbG9vcFZlY3RvcnMgPSBbbG9jYXRpb24sIHRhcmdldF07XG4gIHZhciBzY3JvbGxCb2R5ID0gU2Nyb2xsQm9keSh7XG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIHNwZWVkOiBzcGVlZCxcbiAgICBtYXNzOiAxXG4gIH0pO1xuICB2YXIgc2Nyb2xsVGFyZ2V0ID0gU2Nyb2xsVGFyZ2V0KHtcbiAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGxpbWl0OiBsaW1pdCxcbiAgICBsb29wOiBsb29wLFxuICAgIHNjcm9sbFNuYXBzOiBzY3JvbGxTbmFwcyxcbiAgICB0YXJnZXQ6IHRhcmdldFxuICB9KTtcbiAgdmFyIHNjcm9sbFRvID0gU2Nyb2xsVG8oe1xuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIGV2ZW50czogZXZlbnRzLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBpbmRleFByZXZpb3VzOiBpbmRleFByZXZpb3VzLFxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0LFxuICAgIHRhcmdldDogdGFyZ2V0XG4gIH0pO1xuICB2YXIgc2xpZGVzSW5WaWV3ID0gU2xpZGVzSW5WaWV3KHtcbiAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgaW5WaWV3VGhyZXNob2xkOiBpblZpZXdUaHJlc2hvbGQsXG4gICAgbG9vcDogbG9vcCxcbiAgICBzbGlkZVNpemVzOiBzbGlkZVNpemVzLFxuICAgIHZpZXdTaXplOiB2aWV3U2l6ZVxuICB9KTsgLy8gRHJhZ0hhbmRsZXJcblxuICB2YXIgZHJhZ0hhbmRsZXIgPSBEcmFnSGFuZGxlcih7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgYXhpczogYXhpcyxcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICBkcmFnRnJlZTogZHJhZ0ZyZWUsXG4gICAgZHJhZ1RyYWNrZXI6IERyYWdUcmFja2VyKHtcbiAgICAgIGF4aXM6IGF4aXMsXG4gICAgICBweFRvUGVyY2VudDogcHhUb1BlcmNlbnRcbiAgICB9KSxcbiAgICByb290OiByb290LFxuICAgIGV2ZW50czogZXZlbnRzLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBsaW1pdDogbGltaXQsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIHNjcm9sbEJvZHk6IHNjcm9sbEJvZHksXG4gICAgc2Nyb2xsVG86IHNjcm9sbFRvLFxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0LFxuICAgIHRhcmdldDogdGFyZ2V0XG4gIH0pOyAvLyBTbGlkZXJcblxuICB2YXIgZW5naW5lID0ge1xuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIGF4aXM6IGF4aXMsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgZHJhZ0hhbmRsZXI6IGRyYWdIYW5kbGVyLFxuICAgIHB4VG9QZXJjZW50OiBweFRvUGVyY2VudCxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgaW5kZXhQcmV2aW91czogaW5kZXhQcmV2aW91cyxcbiAgICBsaW1pdDogbGltaXQsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgc2Nyb2xsQm9keTogc2Nyb2xsQm9keSxcbiAgICBzY3JvbGxCb3VuZHM6IFNjcm9sbEJvdW5kcyh7XG4gICAgICBsaW1pdDogbGltaXQsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBzY3JvbGxCb2R5OiBzY3JvbGxCb2R5XG4gICAgfSksXG4gICAgc2Nyb2xsTG9vcGVyOiBTY3JvbGxMb29wZXIoe1xuICAgICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgcHhUb1BlcmNlbnQ6IHB4VG9QZXJjZW50XG4gICAgfSksXG4gICAgc2Nyb2xsUHJvZ3Jlc3M6IFNjcm9sbFByb2dyZXNzKHtcbiAgICAgIGxpbWl0OiBsaW1pdFxuICAgIH0pLFxuICAgIHNjcm9sbFNuYXBzOiBzY3JvbGxTbmFwcyxcbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldCxcbiAgICBzY3JvbGxUbzogc2Nyb2xsVG8sXG4gICAgc2xpZGVGb2N1czogU2xpZGVGb2N1cyh7XG4gICAgICByb290OiByb290LFxuICAgICAgc2Nyb2xsVG86IHNjcm9sbFRvLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IHNsaWRlc1RvU2Nyb2xsXG4gICAgfSksXG4gICAgc2xpZGVMb29wZXI6IFNsaWRlTG9vcGVyKHtcbiAgICAgIGF4aXM6IGF4aXMsXG4gICAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIHNjcm9sbFNuYXBzOiBzY3JvbGxTbmFwcyxcbiAgICAgIHNsaWRlU2l6ZXM6IHNsaWRlU2l6ZXMsXG4gICAgICBzbGlkZXNJblZpZXc6IHNsaWRlc0luVmlldyxcbiAgICAgIHZpZXdTaXplOiB2aWV3U2l6ZVxuICAgIH0pLFxuICAgIHNsaWRlc0luVmlldzogc2xpZGVzSW5WaWV3LFxuICAgIHNsaWRlSW5kZXhlczogc2xpZGVJbmRleGVzLFxuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIHRyYW5zbGF0ZTogVHJhbnNsYXRlKHtcbiAgICAgIGF4aXM6IGF4aXMsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgfSlcbiAgfTtcbiAgcmV0dXJuIGVuZ2luZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB2YXIgbGlzdGVuZXJzID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKGV2dCkge1xuICAgIHZhciBldmVudExpc3RlbmVycyA9IGxpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiBldmVudExpc3RlbmVycyB8fCBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZ0KSB7XG4gICAgZ2V0TGlzdGVuZXJzKGV2dCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUoZXZ0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKGV2dCwgY2IpIHtcbiAgICBsaXN0ZW5lcnNbZXZ0XSA9IGdldExpc3RlbmVycyhldnQpLmNvbmNhdChbY2JdKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZihldnQsIGNiKSB7XG4gICAgbGlzdGVuZXJzW2V2dF0gPSBnZXRMaXN0ZW5lcnMoZXZ0KS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlICE9PSBjYjtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGVtaXQ6IGVtaXQsXG4gICAgb2ZmOiBvZmYsXG4gICAgb246IG9uXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGFsaWduOiAnY2VudGVyJyxcbiAgYXhpczogJ3gnLFxuICBjb250YWluU2Nyb2xsOiAnJyxcbiAgY29udGFpbmVyU2VsZWN0b3I6ICcqJyxcbiAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgZHJhZ0ZyZWU6IGZhbHNlLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIGRyYWdnYWJsZUNsYXNzOiAnaXMtZHJhZ2dhYmxlJyxcbiAgZHJhZ2dpbmdDbGFzczogJ2lzLWRyYWdnaW5nJyxcbiAgaW5WaWV3VGhyZXNob2xkOiAwLFxuICBsb29wOiBmYWxzZSxcbiAgc2VsZWN0ZWRDbGFzczogJ2lzLXNlbGVjdGVkJyxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIHNwZWVkOiAxMCxcbiAgc3RhcnRJbmRleDogMFxufTtcblxuZnVuY3Rpb24gRW1ibGFDYXJvdXNlbChzbGlkZXJSb290LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZXZlbnRzID0gRXZlbnRFbWl0dGVyKCk7XG4gIHZhciBldmVudFN0b3JlID0gRXZlbnRTdG9yZSgpO1xuICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2UocmVzaXplLCA1MDApO1xuICB2YXIgcmVJbml0ID0gcmVBY3RpdmF0ZTtcbiAgdmFyIG9uID0gZXZlbnRzLm9uLFxuICAgICAgb2ZmID0gZXZlbnRzLm9mZjtcbiAgdmFyIGVuZ2luZTtcbiAgdmFyIGFjdGl2YXRlZCA9IGZhbHNlO1xuXG4gIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zKTtcblxuICB2YXIgcm9vdEVsZW1lbnRTaXplID0gMDtcbiAgdmFyIGNvbnRhaW5lcjtcbiAgdmFyIHNsaWRlcztcbiAgYWN0aXZhdGUodXNlck9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIHN0b3JlRWxlbWVudHMoKSB7XG4gICAgaWYgKCFzbGlkZXJSb290KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgcm9vdCBub2RlIPCfmKInKTtcbiAgICB2YXIgc2VsZWN0b3IgPSBvcHRpb25zLmNvbnRhaW5lclNlbGVjdG9yO1xuICAgIHZhciBzbGlkZXJDb250YWluZXIgPSBzbGlkZXJSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmICghc2xpZGVyQ29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29udGFpbmVyIG5vZGUg8J+YoicpO1xuICAgIGNvbnRhaW5lciA9IHNsaWRlckNvbnRhaW5lcjtcbiAgICBzbGlkZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250YWluZXIuY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUocGFydGlhbE9wdGlvbnMpIHtcbiAgICBzdG9yZUVsZW1lbnRzKCk7XG4gICAgb3B0aW9ucyA9IF9leHRlbmRzKG9wdGlvbnMsIHBhcnRpYWxPcHRpb25zKTtcbiAgICBlbmdpbmUgPSBFbmdpbmUoc2xpZGVyUm9vdCwgY29udGFpbmVyLCBzbGlkZXMsIG9wdGlvbnMsIGV2ZW50cyk7XG4gICAgcm9vdEVsZW1lbnRTaXplID0gZW5naW5lLmF4aXMubWVhc3VyZShzbGlkZXJSb290KTtcbiAgICBldmVudFN0b3JlLmFkZCh3aW5kb3csICdyZXNpemUnLCBkZWJvdW5jZWRSZXNpemUpO1xuICAgIGVuZ2luZS50cmFuc2xhdGUudG8oZW5naW5lLmxvY2F0aW9uKTtcblxuICAgIGlmIChvcHRpb25zLmxvb3ApIHtcbiAgICAgIGlmICghZW5naW5lLnNsaWRlTG9vcGVyLmNhbkxvb3AoKSkge1xuICAgICAgICBkZUFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiBhY3RpdmF0ZSh7XG4gICAgICAgICAgbG9vcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGVuZ2luZS5zbGlkZUxvb3Blci5sb29wKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIGVuZ2luZS5kcmFnSGFuZGxlci5hZGRBY3RpdmF0aW9uRXZlbnRzKCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZUNsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKHNsaWRlclJvb3QsIG9wdGlvbnMuZHJhZ2dhYmxlQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5kcmFnZ2luZ0NsYXNzKSB7XG4gICAgICAgIGV2ZW50cy5vbigncG9pbnRlckRvd24nLCB0b2dnbGVEcmFnZ2luZ0NsYXNzKS5vbigncG9pbnRlclVwJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIGVuZ2luZS5zbGlkZUZvY3VzLmFkZEFjdGl2YXRpb25FdmVudHMoc2xpZGVzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zZWxlY3RlZENsYXNzKSB7XG4gICAgICB0b2dnbGVTZWxlY3RlZENsYXNzKCk7XG4gICAgICBldmVudHMub24oJ3NlbGVjdCcsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpLm9uKCdwb2ludGVyVXAnLCB0b2dnbGVTZWxlY3RlZENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2YXRlZCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudHMuZW1pdCgnaW5pdCcpO1xuICAgICAgfSwgMCk7XG4gICAgICBhY3RpdmF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZURyYWdnaW5nQ2xhc3MoZXZ0KSB7XG4gICAgdmFyIGRyYWdnaW5nQ2xhc3MgPSBvcHRpb25zLmRyYWdnaW5nQ2xhc3M7XG4gICAgaWYgKGV2dCA9PT0gJ3BvaW50ZXJEb3duJykgYWRkQ2xhc3Moc2xpZGVyUm9vdCwgZHJhZ2dpbmdDbGFzcyk7ZWxzZSByZW1vdmVDbGFzcyhzbGlkZXJSb290LCBkcmFnZ2luZ0NsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNlbGVjdGVkQ2xhc3MoKSB7XG4gICAgdmFyIHNlbGVjdGVkQ2xhc3MgPSBvcHRpb25zLnNlbGVjdGVkQ2xhc3M7XG4gICAgdmFyIGluVmlldyA9IHNsaWRlc0luVmlldyh0cnVlKTtcbiAgICB2YXIgbm90SW5WaWV3ID0gc2xpZGVzTm90SW5WaWV3KHRydWUpO1xuICAgIG5vdEluVmlldy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlQ2xhc3Moc2xpZGVzW2ldLCBzZWxlY3RlZENsYXNzKTtcbiAgICB9KTtcbiAgICBpblZpZXcuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGFkZENsYXNzKHNsaWRlc1tpXSwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZUFjdGl2YXRlKCkge1xuICAgIGVuZ2luZS5kcmFnSGFuZGxlci5yZW1vdmVBbGxFdmVudHMoKTtcbiAgICBlbmdpbmUuc2xpZGVGb2N1cy5yZW1vdmVBbGxFdmVudHMoKTtcbiAgICBlbmdpbmUuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICBldmVudFN0b3JlLnJlbW92ZUFsbCgpO1xuICAgIGVuZ2luZS50cmFuc2xhdGUuY2xlYXIoKTtcbiAgICBlbmdpbmUuc2xpZGVMb29wZXIuY2xlYXIoc2xpZGVzKTtcbiAgICByZW1vdmVDbGFzcyhzbGlkZXJSb290LCBvcHRpb25zLmRyYWdnYWJsZUNsYXNzKTtcbiAgICBzbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKHMsIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgfSk7XG4gICAgZXZlbnRzLm9mZignc2VsZWN0JywgdG9nZ2xlU2VsZWN0ZWRDbGFzcyk7XG4gICAgZXZlbnRzLm9mZigncG9pbnRlclVwJywgdG9nZ2xlU2VsZWN0ZWRDbGFzcyk7XG4gICAgZXZlbnRzLm9mZigncG9pbnRlckRvd24nLCB0b2dnbGVEcmFnZ2luZ0NsYXNzKTtcbiAgICBldmVudHMub2ZmKCdwb2ludGVyVXAnLCB0b2dnbGVEcmFnZ2luZ0NsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlQWN0aXZhdGUocGFydGlhbE9wdGlvbnMpIHtcbiAgICBpZiAoIWFjdGl2YXRlZCkgcmV0dXJuO1xuICAgIHZhciBzdGFydEluZGV4ID0gc2VsZWN0ZWRTY3JvbGxTbmFwKCk7XG5cbiAgICB2YXIgbmV3T3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXhcbiAgICB9LCBwYXJ0aWFsT3B0aW9ucyk7XG5cbiAgICBkZUFjdGl2YXRlKCk7XG4gICAgYWN0aXZhdGUobmV3T3B0aW9ucyk7XG4gICAgZXZlbnRzLmVtaXQoJ3JlSW5pdCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAoIWFjdGl2YXRlZCkgcmV0dXJuO1xuICAgIGRlQWN0aXZhdGUoKTtcbiAgICBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBldmVudHMuZW1pdCgnZGVzdHJveScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgIGlmICghYWN0aXZhdGVkKSByZXR1cm47XG4gICAgdmFyIG5ld1Jvb3RFbGVtZW50U2l6ZSA9IGVuZ2luZS5heGlzLm1lYXN1cmUoc2xpZGVyUm9vdCk7XG4gICAgaWYgKHJvb3RFbGVtZW50U2l6ZSAhPT0gbmV3Um9vdEVsZW1lbnRTaXplKSByZUFjdGl2YXRlKCk7XG4gICAgZXZlbnRzLmVtaXQoJ3Jlc2l6ZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVzSW5WaWV3KHRhcmdldCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGVuZ2luZVt0YXJnZXQgPyAndGFyZ2V0JyA6ICdsb2NhdGlvbiddLmdldCgpO1xuICAgIHZhciB0eXBlID0gb3B0aW9ucy5sb29wID8gJ3JlbW92ZU9mZnNldCcgOiAnY29uc3RyYWluJztcbiAgICByZXR1cm4gZW5naW5lLnNsaWRlc0luVmlldy5jaGVjayhlbmdpbmUubGltaXRbdHlwZV0obG9jYXRpb24pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlc05vdEluVmlldyh0YXJnZXQpIHtcbiAgICB2YXIgaW5WaWV3ID0gc2xpZGVzSW5WaWV3KHRhcmdldCk7XG4gICAgcmV0dXJuIGVuZ2luZS5zbGlkZUluZGV4ZXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaW5WaWV3LmluZGV4T2YoaSkgPT09IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG8oaW5kZXgsIGRpcmVjdGlvbikge1xuICAgIGVuZ2luZS5zY3JvbGxCb2R5LnVzZUJhc2VNYXNzKCkudXNlQmFzZVNwZWVkKCk7XG4gICAgaWYgKGFjdGl2YXRlZCkgZW5naW5lLnNjcm9sbFRvLmluZGV4KGluZGV4LCBkaXJlY3Rpb24gfHwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxOZXh0KCkge1xuICAgIHZhciBuZXh0ID0gZW5naW5lLmluZGV4LmNsb25lKCkuYWRkKDEpO1xuICAgIHNjcm9sbFRvKG5leHQuZ2V0KCksIC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFByZXYoKSB7XG4gICAgdmFyIHByZXYgPSBlbmdpbmUuaW5kZXguY2xvbmUoKS5hZGQoLTEpO1xuICAgIHNjcm9sbFRvKHByZXYuZ2V0KCksIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU2Nyb2xsTmV4dCgpIHtcbiAgICB2YXIgbmV4dCA9IGVuZ2luZS5pbmRleC5jbG9uZSgpLmFkZCgxKTtcbiAgICByZXR1cm4gbmV4dC5nZXQoKSAhPT0gc2VsZWN0ZWRTY3JvbGxTbmFwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5TY3JvbGxQcmV2KCkge1xuICAgIHZhciBwcmV2ID0gZW5naW5lLmluZGV4LmNsb25lKCkuYWRkKC0xKTtcbiAgICByZXR1cm4gcHJldi5nZXQoKSAhPT0gc2VsZWN0ZWRTY3JvbGxTbmFwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxTbmFwTGlzdCgpIHtcbiAgICByZXR1cm4gZW5naW5lLnNjcm9sbFNuYXBzLm1hcChlbmdpbmUuc2Nyb2xsUHJvZ3Jlc3MuZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFByb2dyZXNzKCkge1xuICAgIHJldHVybiBlbmdpbmUuc2Nyb2xsUHJvZ3Jlc3MuZ2V0KGVuZ2luZS5sb2NhdGlvbi5nZXQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RlZFNjcm9sbFNuYXAoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5pbmRleC5nZXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZpb3VzU2Nyb2xsU25hcCgpIHtcbiAgICByZXR1cm4gZW5naW5lLmluZGV4UHJldmlvdXMuZ2V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0FsbG93ZWQoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5kcmFnSGFuZGxlci5jbGlja0FsbG93ZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhbmdlcm91c2x5R2V0RW5naW5lKCkge1xuICAgIHJldHVybiBlbmdpbmU7XG4gIH1cblxuICBmdW5jdGlvbiBjb250YWluZXJOb2RlKCkge1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZU5vZGVzKCkge1xuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjYW5TY3JvbGxOZXh0OiBjYW5TY3JvbGxOZXh0LFxuICAgIGNhblNjcm9sbFByZXY6IGNhblNjcm9sbFByZXYsXG4gICAgY2xpY2tBbGxvd2VkOiBjbGlja0FsbG93ZWQsXG4gICAgY29udGFpbmVyTm9kZTogY29udGFpbmVyTm9kZSxcbiAgICBkYW5nZXJvdXNseUdldEVuZ2luZTogZGFuZ2Vyb3VzbHlHZXRFbmdpbmUsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBvZmY6IG9mZixcbiAgICBvbjogb24sXG4gICAgcHJldmlvdXNTY3JvbGxTbmFwOiBwcmV2aW91c1Njcm9sbFNuYXAsXG4gICAgcmVJbml0OiByZUluaXQsXG4gICAgc2Nyb2xsTmV4dDogc2Nyb2xsTmV4dCxcbiAgICBzY3JvbGxQcmV2OiBzY3JvbGxQcmV2LFxuICAgIHNjcm9sbFByb2dyZXNzOiBzY3JvbGxQcm9ncmVzcyxcbiAgICBzY3JvbGxTbmFwTGlzdDogc2Nyb2xsU25hcExpc3QsXG4gICAgc2Nyb2xsVG86IHNjcm9sbFRvLFxuICAgIHNlbGVjdGVkU2Nyb2xsU25hcDogc2VsZWN0ZWRTY3JvbGxTbmFwLFxuICAgIHNsaWRlTm9kZXM6IHNsaWRlTm9kZXMsXG4gICAgc2xpZGVzSW5WaWV3OiBzbGlkZXNJblZpZXcsXG4gICAgc2xpZGVzTm90SW5WaWV3OiBzbGlkZXNOb3RJblZpZXdcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtYmxhQ2Fyb3VzZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJsYS1jYXJvdXNlbC5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9