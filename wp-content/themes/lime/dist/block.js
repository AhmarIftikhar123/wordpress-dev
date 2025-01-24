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

/***/ "./assets/src/js/block.js":
/*!********************************!*\
  !*** ./assets/src/js/block.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_block_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/block.scss */ \"./assets/src/sass/block.scss\");\n/* harmony import */ var _gutenberg_blocks_heading_with_icon_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/blocks/heading-with-icon/index */ \"./assets/src/js/gutenberg/blocks/heading-with-icon/index.js\");\n/* harmony import */ var _gutenberg_blocks_dost_and_donts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/blocks/dost-and-donts/index */ \"./assets/src/js/gutenberg/blocks/dost-and-donts/index.js\");\n\n\n// Gutenberg blocks\n\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/block.js?");

/***/ }),

/***/ "./assets/src/js/gutenberg/blocks/dost-and-donts/edit.js":
/*!***************************************************************!*\
  !*** ./assets/src/js/gutenberg/blocks/dost-and-donts/edit.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./assets/src/js/gutenberg/blocks/dost-and-donts/template.js\");\n\n\n\n// Define which blocks are allowed inside InnerBlocks\nconst ALLOWED_BLOCKS = [\"core/group\", \"core/columns\", \"core/column\", \"core/list\", \"yoyo-blocks/heading-with-icon\"];\n\n// Define the default block structure\nconst TEMPLATE = [[\"core/group\",\n// Use a core/group block\n{\n  className: \"yoyo-dos-and-donts__group\",\n  // Add a custom class\n  backgroundColor: \"vivid-red\"\n}, _template__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // Use the blockColumns structure\n]];\n\n// The Edit component\nconst Edit = () => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"yoyo-dos-and-donts\"\n  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {\n    allowedBlocks: ALLOWED_BLOCKS // Allow specific blocks\n    ,\n    templateLock: false // Lock the template to prevent changes\n    ,\n    template: TEMPLATE // Use the defined template\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/gutenberg/blocks/dost-and-donts/edit.js?");

/***/ }),

/***/ "./assets/src/js/gutenberg/blocks/dost-and-donts/index.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/gutenberg/blocks/dost-and-donts/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./assets/src/js/gutenberg/blocks/dost-and-donts/edit.js\");\n\n\n\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(\"yoyo-blocks/dos-and-donts\", {\n  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"Dos and Dont's\", \"YOYO-Tube\"),\n  icon: \"editor-table\",\n  category: \"Heading_Block\",\n  // Use a valid WordPress block category\n  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"Add heading and text\", \"YOYO-Tube\"),\n  example: {},\n  edit: _edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  save() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"yoyo-dos-and-donts\"\n    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/gutenberg/blocks/dost-and-donts/index.js?");

/***/ }),

/***/ "./assets/src/js/gutenberg/blocks/dost-and-donts/template.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/gutenberg/blocks/dost-and-donts/template.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst getBlockColumns = (optionVal, colClassName, heading) => {\n  return [\"core/column\", {\n    className: colClassName\n  }, [[\"yoyo-blocks/heading-with-icon\", {\n    className: \"yoyo-dos-and-donts__heading\",\n    option: optionVal,\n    content: heading\n  }], [\"core/list\", {\n    className: \"yoyo-dos-and-donts__list\"\n  }]]];\n};\nconst innerBlockColumns = [[\"core/columns\",\n// Use a core/columns block\n{\n  className: \"yoyo-dos-and-donts__cols\" // Add a custom class\n}, [getBlockColumns(\"dos\", \"yoyo-dos-and-donts__col-one\", \"DOS\"), getBlockColumns(\"donts\", \"yoyo-dos-and-donts__col-two\", \"DONTS\")]]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (innerBlockColumns);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/gutenberg/blocks/dost-and-donts/template.js?");

/***/ }),

/***/ "./assets/src/js/gutenberg/blocks/heading-with-icon/edit.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/gutenberg/blocks/heading-with-icon/edit.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-map */ \"./assets/src/js/gutenberg/blocks/heading-with-icon/icons-map.js\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * @typedef {import('@wordpress/element').WPElement} WPElement\n */\n\n\n\n\n\nconst Edit = _ref => {\n  let {\n    attributes,\n    setAttributes\n  } = _ref;\n  const {\n    content,\n    option\n  } = attributes;\n  const HeadingIcon = (0,_icons_map__WEBPACK_IMPORTED_MODULE_1__.getIconComponent)(option);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"yoyo-icon-heading\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"d-grid\"\n  }, /*#__PURE__*/React.createElement(HeadingIcon, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {\n    tagName: \"h4\",\n    className: \"yoyo-icon-heading\",\n    value: content,\n    onChange: newContent => setAttributes({\n      content: newContent\n    }),\n    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(\"Heading...\", \"YOYO-Tube\") // Translation text domain\n  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {\n    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(\"Icon\", \"YOYO-Tube\")\n  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(\"Select The Icon\", \"YOYO-Tube\"),\n    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(\"Control The Icon Selection\", \"YOYO-Tube\"),\n    options: [{\n      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(\"DOS\", \"YOYO-Tube\"),\n      value: \"DOS\"\n    }, {\n      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(\"DONTS\", \"YOYO-Tube\"),\n      value: \"DONTS\"\n    }],\n    selected: attributes.option,\n    onChange: value => setAttributes({\n      option: value\n    })\n  }))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/gutenberg/blocks/heading-with-icon/edit.js?");

/***/ }),

/***/ "./assets/src/js/gutenberg/blocks/heading-with-icon/icons-map.js":
/*!***********************************************************************!*\
  !*** ./assets/src/js/gutenberg/blocks/heading-with-icon/icons-map.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getIconComponent: function() { return /* binding */ getIconComponent; }\n/* harmony export */ });\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icons */ \"./assets/src/js/icons/index.js\");\n\nconst getIconComponent = option => {\n  const iconMap = {\n    DOS: _icons__WEBPACK_IMPORTED_MODULE_0__.Check,\n    DONTS: _icons__WEBPACK_IMPORTED_MODULE_0__.Cross\n  };\n  // Fallback to a default icon if the option is invalid\n  return iconMap[option?.toUpperCase()] || (() => /*#__PURE__*/React.createElement(\"span\", null, \"No Icon\"));\n};\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/gutenberg/blocks/heading-with-icon/icons-map.js?");

/***/ }),

/***/ "./assets/src/js/gutenberg/blocks/heading-with-icon/index.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/gutenberg/blocks/heading-with-icon/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-map */ \"./assets/src/js/gutenberg/blocks/heading-with-icon/icons-map.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ \"./assets/src/js/gutenberg/blocks/heading-with-icon/edit.js\");\n\n\n\n\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(\"yoyo-blocks/heading-with-icon\", {\n  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"Heading with Icon\", \"YOYO-Tube\"),\n  icon: \"admin-customizer\",\n  category: \"Heading_Block\",\n  // Use a valid WordPress block category\n  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"This is a heading with icon.\", \"YOYO-Tube\"),\n  example: {},\n  attributes: {\n    option: {\n      type: \"string\",\n      default: \"DOS\"\n    },\n    content: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"h4\",\n      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"DOS\", \"YOYO-Tube\")\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  save(_ref) {\n    let {\n      attributes: {\n        content,\n        option\n      }\n    } = _ref;\n    const HeadingIcon = (0,_icons_map__WEBPACK_IMPORTED_MODULE_3__.getIconComponent)(option);\n    console.log(\"save\", content); // Debugging output\n\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"yoyo-icon-heading__heading\"\n    }, /*#__PURE__*/React.createElement(\"span\", {\n      className: \"d-grid\"\n    }, /*#__PURE__*/React.createElement(HeadingIcon, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {\n      tagName: \"h4\",\n      className: \"yoyo-icon-heading\",\n      value: content\n    }));\n  }\n});\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/gutenberg/blocks/heading-with-icon/index.js?");

/***/ }),

/***/ "./assets/src/js/icons/Check.js":
/*!**************************************!*\
  !*** ./assets/src/js/icons/Check.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nconst SvgCheck = props => /*#__PURE__*/React.createElement(\"svg\", _extends({\n  xmlns: \"http://www.w3.org/2000/svg\",\n  xmlSpace: \"preserve\",\n  width: 20,\n  height: 20,\n  viewBox: \"0 0 417.813 417\"\n}, props), /*#__PURE__*/React.createElement(\"path\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fill: \"#06ab1c\",\n  d: \"M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0\",\n  \"data-original\": \"#2196f3\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgCheck);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/icons/Check.js?");

/***/ }),

/***/ "./assets/src/js/icons/Cross.js":
/*!**************************************!*\
  !*** ./assets/src/js/icons/Cross.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nconst SvgCross = props => /*#__PURE__*/React.createElement(\"svg\", _extends({\n  xmlns: \"http://www.w3.org/2000/svg\",\n  xmlSpace: \"preserve\",\n  width: 20,\n  height: 20,\n  viewBox: \"0 0 123.05 123.05\"\n}, props), /*#__PURE__*/React.createElement(\"path\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fill: \"#e30101\",\n  d: \"m121.325 10.925-8.5-8.399c-2.3-2.3-6.1-2.3-8.5 0l-42.4 42.399L18.726 1.726c-2.301-2.301-6.101-2.301-8.5 0l-8.5 8.5c-2.301 2.3-2.301 6.1 0 8.5l43.1 43.1-42.3 42.5c-2.3 2.3-2.3 6.1 0 8.5l8.5 8.5c2.3 2.3 6.1 2.3 8.5 0l42.399-42.4 42.4 42.4c2.3 2.3 6.1 2.3 8.5 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.5l-42.5-42.4 42.4-42.399a6.13 6.13 0 0 0 .1-8.602\",\n  \"data-original\": \"#000000\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgCross);\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/icons/Cross.js?");

/***/ }),

/***/ "./assets/src/js/icons/index.js":
/*!**************************************!*\
  !*** ./assets/src/js/icons/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Check: function() { return /* reexport safe */ _Check__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   Cross: function() { return /* reexport safe */ _Cross__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Check */ \"./assets/src/js/icons/Check.js\");\n/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cross */ \"./assets/src/js/icons/Cross.js\");\n\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/js/icons/index.js?");

/***/ }),

/***/ "./assets/src/sass/block.scss":
/*!************************************!*\
  !*** ./assets/src/sass/block.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yoyo-tube/./assets/src/sass/block.scss?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/block.js");
/******/ 	
/******/ })()
;