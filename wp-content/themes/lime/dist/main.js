/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/carousel/index.js":
/*!*****************************************!*\
  !*** ./assets/src/js/carousel/index.js ***!
  \*****************************************/
/***/ (function() {

eval("(function ($) {\n  class SlickCarousel {\n    constructor() {\n      // Check if the carousel element exists\n      if ($(\".carousel\").length) {\n        $(\".carousel\").slick({\n          autoplay: true,\n          autoplaySpeed: 1000,\n          // Adjusted to 3 seconds\n          slidesToShow: 3,\n          // Default number of slides to show\n          slidesToScroll: 1,\n          // Default number of slides to scroll\n          responsive: [{\n            breakpoint: 1024,\n            settings: {\n              slidesToShow: 3,\n              slidesToScroll: 3,\n              infinite: true,\n              dots: true\n            }\n          }, {\n            breakpoint: 600,\n            settings: {\n              slidesToShow: 2,\n              slidesToScroll: 2\n            }\n          }, {\n            breakpoint: 480,\n            settings: {\n              slidesToShow: 1,\n              slidesToScroll: 1\n            }\n          }]\n        });\n      } else {\n        console.warn(\"No carousel element found.\");\n      }\n    }\n  }\n\n  // Initialize the carousel\n  new SlickCarousel();\n})(jQuery);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/carousel/index.js?");

/***/ }),

/***/ "./assets/src/js/main.js":
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./assets/src/sass/main.scss\");\n/* harmony import */ var _images_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/clock.png */ \"./assets/src/images/clock.png\");\n/* harmony import */ var _images_cover_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cover.jpg */ \"./assets/src/images/cover.jpg\");\n/* harmony import */ var _carousel_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/index */ \"./assets/src/js/carousel/index.js\");\n/* harmony import */ var _carousel_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_index__WEBPACK_IMPORTED_MODULE_3__);\n// import './clock';\n\n// scss files\n\n// Images\n\n\n// Carousel\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/main.js?");

/***/ }),

/***/ "./assets/src/images/clock.png":
/*!*************************************!*\
  !*** ./assets/src/images/clock.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../../clock.png\");\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/images/clock.png?");

/***/ }),

/***/ "./assets/src/images/cover.jpg":
/*!*************************************!*\
  !*** ./assets/src/images/cover.jpg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../../cover.jpg\");\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/images/cover.jpg?");

/***/ }),

/***/ "./assets/src/sass/main.scss":
/*!***********************************!*\
  !*** ./assets/src/sass/main.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/main.js");
/******/ 	
/******/ })()
;