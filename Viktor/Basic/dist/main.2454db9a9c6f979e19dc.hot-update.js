"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_optimization_starter"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handlers */ \"./src/js/event-handlers.js\");\n\n\nwindow.addEventListener(\"load\", _event_handlers__WEBPACK_IMPORTED_MODULE_0__.onLoadEventHandler);\ndocument.addEventListener(\"change\", function (event) {\n  console.log(123);\n  if (event.target.classList.contains(\"new-todo\")) {\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.newTodoEventHandler)(event);\n  }\n});\ndocument.addEventListener(\"click\", function (event) {\n  if (event.target.classList.contains(\"delete\")) {\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.removeTodoEventHandler)(event);\n  }\n  if (event.target.classList.contains(\"real-checkbox\")) {\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.toggleTodoEventListener)(event);\n  }\n});\n\nthrow new Error(\"Wrong!\");\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7640b5cfe967296d11e")
/******/ })();
/******/ 
/******/ }
);