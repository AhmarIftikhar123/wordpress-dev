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

/***/ "./assets/src/js/author.js":
/*!*********************************!*\
  !*** ./assets/src/js/author.js ***!
  \*********************************/
/***/ (function() {

eval("(function ($) {\n  class Author {\n    constructor() {\n      this.authorProfileImgContainer = $(\"#author-profile-img span\");\n      this.authorFirstNameText = $(\"#author-firstname\").text();\n      this.authorLastNameText = $(\"#author-lastname\").text();\n      this.init();\n    }\n    init() {\n      if (!this.authorProfileImgContainer.length) {\n        return null;\n      }\n      let initials = this.authorFirstNameText.charAt(0) + this.authorLastNameText.charAt(0);\n      initials = initials ? initials : \"A\";\n\n      // Set the text.\n      this.authorProfileImgContainer.text(initials);\n    }\n  }\n  new Author();\n})(jQuery);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/author.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/js/author.js"]();
/******/ 	
/******/ })()
;