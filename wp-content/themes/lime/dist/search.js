/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/search.js":
/*!*********************************!*\
  !*** ./assets/src/js/search.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/index */ \"./assets/src/js/search/index.js\");\n/* harmony import */ var _sass_search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/search.scss */ \"./assets/src/sass/search.scss\");\n\n\n// Import search.scss\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/search.js?");

/***/ }),

/***/ "./assets/src/js/search/index.js":
/*!***************************************!*\
  !*** ./assets/src/js/search/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./assets/src/js/utils/index.js\");\n\nclass AquilaCheckboxAccordion extends HTMLElement {\n  /**\r\n   * Constructor.\r\n   */\n  constructor() {\n    super();\n\n    // Elements.\n    this.filterKey = this.getAttribute(\"key\");\n    this.content = this.querySelector(\".checkbox-accordion__content\");\n    this.accordionHandle = this.querySelector(\".checkbox-accordion__handle\");\n    if (!this.accordionHandle || !this.content || !this.filterKey) {\n      return;\n    }\n    this.accordionHandle.addEventListener(\"click\", event => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toggleAccordionContent)(event, this, this.content));\n  }\n\n  /**\r\n   * Observe Attributes.\r\n   *\r\n   * @return {string[]} Attributes to be observed.\r\n   */\n  static get observedAttributes() {\n    return [\"active\"];\n  }\n\n  /**\r\n   * Attributes callback.\r\n   *\r\n   * Fired on attribute change.\r\n   *\r\n   * @param {string} name Attribute Name.\r\n   * @param {string} oldValue Attribute's Old Value.\r\n   * @param {string} newValue Attribute's New Value.\r\n   */\n  attributeChangedCallback(name, oldValue, newValue) {\n    /**\r\n     * If the state of this checkbox filter is open, then set then\r\n     * active state of this component to true, so it can be opened.\r\n     */\n    if (\"active\" === name) {\n      this.content.style.height = \"auto\";\n    } else {\n      this.content.style.height = \"0px\";\n    }\n  }\n}\nclass AquilaCheckboxAccordionChild extends HTMLElement {\n  /**\r\n   * Constructor.\r\n   */\n  constructor() {\n    super();\n    this.content = this.querySelector(\".checkbox-accordion__child-content\");\n    this.accordionHandle = this.querySelector(\".checkbox-accordion__child-handle-icon\");\n    this.inputEl = this.querySelector(\"input\");\n\n    // Subscribe to updates.\n    subscribe(this.update.bind(this));\n    if (this.accordionHandle && this.content) {\n      this.accordionHandle.addEventListener(\"click\", event => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toggleAccordionContent)(event, this, this.content));\n    }\n    if (this.inputEl) {\n      this.inputEl.addEventListener(\"click\", event => this.handleCheckboxInputClick(event));\n    }\n  }\n\n  /**\r\n   * Update the component.\r\n   *\r\n   * @param {Object} currentState Current state.\r\n   */\n  update() {\n    let currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    if (!this.inputEl) {\n      return;\n    }\n    const {\n      filters\n    } = currentState;\n    this.inputKey = this.inputEl.getAttribute(\"data-key\");\n    this.inputValue = this.inputEl.getAttribute(\"value\");\n    this.selectedFiltersForCurrentkey = filters[this.inputKey] || [];\n    this.parentEl = this.inputEl.closest(\".checkbox-accordion\") || {};\n    this.parentContentEl = this.inputEl.closest(\".checkbox-accordion__child-content\") || {};\n\n    /**\r\n     * If the current input value is amongst the selected filters, the check it.\r\n     * and set the attributes and styles to open the accordion.\r\n     */\n    if (this.selectedFiltersForCurrentkey.includes(parseInt(this.inputValue))) {\n      this.inputEl.checked = true;\n      this.parentEl.setAttribute(\"active\", true);\n      if (this.parentContentEl.style) {\n        this.parentContentEl.style.height = \"auto\";\n      }\n    } else {\n      this.inputEl.checked = false;\n      this.parentEl.removeAttribute(\"active\");\n    }\n  }\n\n  /**\r\n   * Handle Checkbox input click.\r\n   *\r\n   * @param event\r\n   */\n  handleCheckboxInputClick(event) {\n    const {\n      addFilter,\n      deleteFilter\n    } = getState();\n    const targetEl = event.target;\n    this.filterKey = targetEl.getAttribute(\"data-key\");\n    if (targetEl.checked) {\n      addFilter({\n        key: this.filterKey,\n        value: parseInt(targetEl.value)\n      });\n    } else {\n      deleteFilter({\n        key: this.filterKey,\n        value: parseInt(targetEl.value)\n      });\n    }\n  }\n}\nclass AquilaClearAllFilters extends HTMLElement {}\nclass AquilaFilters extends HTMLElement {}\nclass AquilaResultsCount extends HTMLElement {}\nclass AquilaResults extends HTMLElement {}\nclass AquilaLoadMore extends HTMLElement {}\nclass AquilaLoadingMore extends HTMLElement {}\nclass AquilaSearch extends HTMLElement {}\n\n/**\r\n * Initialize.\r\n */\ncustomElements.define(\"aquila-checkbox-accordion\", AquilaCheckboxAccordion);\ncustomElements.define(\"aquila-checkbox-accordion-child\", AquilaCheckboxAccordionChild);\ncustomElements.define(\"aquila-clear-all-filters\", AquilaClearAllFilters);\ncustomElements.define(\"aquila-filters\", AquilaFilters);\ncustomElements.define(\"aquila-results-count\", AquilaResultsCount);\ncustomElements.define(\"aquila-results\", AquilaResults);\ncustomElements.define(\"aquila-load-more\", AquilaLoadMore);\ncustomElements.define(\"aquila-loading-more\", AquilaLoadingMore);\ncustomElements.define(\"aquila-search\", AquilaSearch);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/search/index.js?");

/***/ }),

/***/ "./assets/src/js/utils/index.js":
/*!**************************************!*\
  !*** ./assets/src/js/utils/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideElementDown: function() { return /* binding */ slideElementDown; },\n/* harmony export */   slideElementUp: function() { return /* binding */ slideElementUp; },\n/* harmony export */   toggleAccordionContent: function() { return /* binding */ toggleAccordionContent; }\n/* harmony export */ });\n/**\r\n * Toggle Accordion Content.\r\n *\r\n * @param {Event} event Event.\r\n * @param {Object} accordionEl Accordion Element\r\n * @param {Object} contentEl Content Element.\r\n *\r\n * @return {null} null\r\n */\nconst toggleAccordionContent = (event, accordionEl, contentEl) => {\n  event.preventDefault();\n  event.stopPropagation();\n  if (!accordionEl || !contentEl) {\n    return null;\n  }\n  accordionEl.toggleAttribute(\"active\");\n  if (!accordionEl.hasAttribute(\"active\")) {\n    slideElementUp(contentEl, 600);\n  } else {\n    slideElementDown(contentEl, 600);\n  }\n};\n\n/**\r\n * Slide element down.\r\n *\r\n * @param {Object} element Target element.\r\n * @param {number} duration Animation duration.\r\n * @param {Function} callback Callback function.\r\n */\nconst slideElementDown = function (element) {\n  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n  let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  element.style.height = `${element.scrollHeight}px`;\n  setTimeout(() => {\n    element.style.height = \"auto\";\n    if (callback) {\n      callback();\n    }\n  }, duration);\n};\n\n/**\r\n * Slide element up.\r\n *\r\n * @param {Object} element Target element.\r\n * @param {number} duration Animation duration.\r\n * @param {Function} callback Callback function.\r\n */\nconst slideElementUp = function (element) {\n  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n  let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  element.style.height = `${element.scrollHeight}px`;\n  element.offsetHeight; // eslint-disable-line\n  element.style.height = \"0px\";\n  setTimeout(() => {\n    element.style.height = null;\n    if (callback) {\n      callback();\n    }\n  }, duration);\n};\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/utils/index.js?");

/***/ }),

/***/ "./assets/src/sass/search.scss":
/*!*************************************!*\
  !*** ./assets/src/sass/search.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/sass/search.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/search.js");
/******/ 	
/******/ })()
;