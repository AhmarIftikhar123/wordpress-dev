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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./assets/src/sass/main.scss\");\n/* harmony import */ var _images_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/clock.png */ \"./assets/src/images/clock.png\");\n/* harmony import */ var _images_cover_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cover.jpg */ \"./assets/src/images/cover.jpg\");\n/* harmony import */ var _carousel_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/index */ \"./assets/src/js/carousel/index.js\");\n/* harmony import */ var _carousel_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_index__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/loadmore */ \"./assets/src/js/posts/loadmore.js\");\n/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_posts_loadmore__WEBPACK_IMPORTED_MODULE_4__);\n// import './clock';\n\n// scss files\n\n// Images\n\n\n// Carousel\n\n// LoadMore posts \n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/main.js?");

/***/ }),

/***/ "./assets/src/js/posts/loadmore.js":
/*!*****************************************!*\
  !*** ./assets/src/js/posts/loadmore.js ***!
  \*****************************************/
/***/ (function() {

eval("(function ($) {\n  /**\r\n   * Class Loadmore.\r\n   */\n  class LoadMore {\n    /**\r\n     * Contructor.\r\n     */\n    constructor() {\n      this.ajaxUrl = siteConfig?.ajaxURL ?? \"\";\n      this.ajaxNonce = siteConfig?.ajax_nonce ?? \"\";\n      this.loadMoreBtn = $(\"#load-more\");\n      this.loadingTextEl = $(\"#loading-text\");\n      this.isRequestProcessing = false;\n      this.options = {\n        root: null,\n        rootMargin: \"0px\",\n        threshold: 1.0 // 1.0 means set isIntersecting to true when element comes in 100% view.\n      };\n      this.init();\n    }\n    init() {\n      if (!this.loadMoreBtn.length) {\n        return;\n      }\n      this.totalPagesCount = $(\"#post-pagination\").data(\"max-pages\");\n      /**\r\n       * Add the IntersectionObserver api, and listen to the load more intersection status.\r\n       * so that intersectionObserverCallback gets called if the element intersection status changes.\r\n       *\r\n       * @type {IntersectionObserver}\r\n       */\n      const observer = new IntersectionObserver(entries => this.intersectionObserverCallback(entries), this.options);\n      observer.observe(this.loadMoreBtn[0]);\n    }\n\n    /**\r\n     * Gets called on initial render with status 'isIntersecting' as false and then\r\n     * everytime element intersection status changes.\r\n     *\r\n     * @param {array} entries No of elements under observation.\r\n     *\r\n     */\n    intersectionObserverCallback(entries) {\n      // array of observing elements\n\n      // The logic is apply for each entry ( in this case it's just one loadmore button )\n      entries.forEach(entry => {\n        // If load more button in view.\n        if (entry?.isIntersecting) {\n          this.handleLoadMorePosts();\n        }\n      });\n    }\n\n    /**\r\n     * Load more posts.\r\n     *\r\n     * 1.Make an ajax request, by incrementing the page no. by one on each request.\r\n     * 2.Append new/more posts to the existing content.\r\n     * 3.If the response is 0 ( which means no more posts available ), remove the load-more button from DOM.\r\n     * Once the load-more button gets removed, the IntersectionObserverAPI callback will not be triggered, which means\r\n     * there will be no further ajax request since there won't be any more posts available.\r\n     *\r\n     * @return null\r\n     */\n    handleLoadMorePosts() {\n      // Get page no from data attribute of load-more button.\n      const page = this.loadMoreBtn.data(\"page\");\n      if (!page || this.isRequestProcessing) {\n        return null;\n      }\n      const nextPage = parseInt(page) + 1; // Increment page count by one.\n      this.isRequestProcessing = true;\n      $.ajax({\n        url: this.ajaxUrl,\n        type: \"post\",\n        data: {\n          page: page,\n          action: \"load_more\",\n          ajax_nonce: this.ajaxNonce\n        },\n        success: response => {\n          if (response.length !== 0) {\n            // Update the DATA attribute on the Page.\n            this.loadMoreBtn.data(\"page\", nextPage);\n            //append the data\n            $(\"#load-more-content\").append(response);\n            this.removeLoadMoreIfOnLastPage(nextPage);\n            this.isRequestProcessing = false;\n          } else {\n            this.loadMoreBtn.remove();\n          }\n        },\n        error: response => {\n          console.warn(response);\n          // this.isRequestProcessing = false;\n        }\n      });\n    }\n\n    /**\r\n     * Remove Load more Button If on last page.\r\n     *\r\n     * @param {int} nextPage New Page.\r\n     */\n    removeLoadMoreIfOnLastPage(nextPage) {\n      if (nextPage + 1 > this.totalPagesCount) {\n        this.loadMoreBtn.remove();\n      }\n    }\n  }\n  new LoadMore();\n})(jQuery);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/posts/loadmore.js?");

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