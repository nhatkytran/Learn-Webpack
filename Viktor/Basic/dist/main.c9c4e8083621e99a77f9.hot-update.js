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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"getAllTodos\": () => (/* binding */ getAllTodos),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _todos_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos.json */ \"./src/todos.json\");\n\n\nlet data = _todos_json__WEBPACK_IMPORTED_MODULE_0__;\n\nfunction getAllTodos() {\n  return data;\n}\n\nfunction addTodo(todo) {\n  data.push(todo);\n}\n\nfunction removeTodo(id) {\n  data = data.filter(function (item) {\n    return item.id !== id;\n  });\n}\n\nfunction updateTodo(id, completed) {\n  const itemIndex = data.findIndex(function (value) {\n    return value.id === id;\n  });\n  data[itemIndex].completed = completed;\n}\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/data.js?");

/***/ }),

/***/ "./src/js/event-handlers.js":
/*!**********************************!*\
  !*** ./src/js/event-handlers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearNewTodoInput\": () => (/* binding */ clearNewTodoInput),\n/* harmony export */   \"getTodoId\": () => (/* binding */ getTodoId),\n/* harmony export */   \"newTodoEventHandler\": () => (/* binding */ newTodoEventHandler),\n/* harmony export */   \"onLoadEventHandler\": () => (/* binding */ onLoadEventHandler),\n/* harmony export */   \"removeTodoEventHandler\": () => (/* binding */ removeTodoEventHandler),\n/* harmony export */   \"toggleTodoEventListener\": () => (/* binding */ toggleTodoEventListener)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\n\n\nfunction clearNewTodoInput() {\n  document.querySelector(\".new-todo\").value = \"\";\n}\n\nfunction getTodoId(element) {\n  return parseInt(\n    element.dataset.id ||\n      element.parentNode.dataset.id ||\n      element.parentNode.parentNode.dataset.id,\n    10\n  );\n}\n\nfunction onLoadEventHandler() {\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_0__.getAllTodos)());\n}\n\nfunction newTodoEventHandler(event) {\n  let text = event.target.value;\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.addTodo)({\n    id: Date.now(),\n    text: text,\n    completed: false,\n  });\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_0__.getAllTodos)());\n  clearNewTodoInput();\n}\n\nfunction removeTodoEventHandler(event) {\n  const id = getTodoId(event.target);\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(id);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_0__.getAllTodos)());\n}\n\nfunction toggleTodoEventListener(event) {\n  const id = getTodoId(event.target);\n  const isCompleted = event.target.checked;\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(id, isCompleted);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTodos)((0,_data__WEBPACK_IMPORTED_MODULE_0__.getAllTodos)());\n}\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/event-handlers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handlers */ \"./src/js/event-handlers.js\");\n\n\nwindow.addEventListener(\"load\", _event_handlers__WEBPACK_IMPORTED_MODULE_0__.onLoadEventHandler);\ndocument.addEventListener(\"change\", function (event) {\n  console.log(123);\n  if (event.target.classList.contains(\"new-todo\")) {\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.newTodoEventHandler)(event);\n  }\n});\ndocument.addEventListener(\"click\", function (event) {\n  if (event.target.classList.contains(\"delete\")) {\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.removeTodoEventHandler)(event);\n  }\n  if (event.target.classList.contains(\"real-checkbox\")) {\n    (0,_event_handlers__WEBPACK_IMPORTED_MODULE_0__.toggleTodoEventListener)(event);\n  }\n});\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/index.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\nfunction renderTodos(todos) {\n  const renderedItemArray = todos.map(function (todo) {\n    const className = todo.completed ? \"completed\" : \"\";\n    const completionClass = todo.completed ? \"checked\" : \"\";\n    return `\n            <li data-id=\"${todo.id}\" class=\"${className}\">\n                <span class=\"custom-checkbox\">\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\n                    <input class=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\n                </span>\n                <label>${todo.text}</label>\n                <span class=\"delete\"></span>\n            </li>\n        `;\n  });\n  document.querySelector(\".todo-list\").innerHTML = renderedItemArray.join(\"\");\n}\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/ui.js?");

/***/ }),

/***/ "./src/todos.json":
/*!************************!*\
  !*** ./src/todos.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":1560865205317,\"text\":\"Buy eggs\",\"completed\":false},{\"id\":1560865205318,\"text\":\"Do 15 min exercise\",\"completed\":false}]');\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/todos.json?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5afd9f9d442000baef32")
/******/ })();
/******/ 
/******/ }
);