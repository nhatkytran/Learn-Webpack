/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/todos.json
var todos_namespaceObject = JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false}]');
;// CONCATENATED MODULE: ./src/js/data.js


let data = todos_namespaceObject;

function getAllTodos() {
  return data;
}

function addTodo(todo) {
  data.push(todo);
}

function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}

function updateTodo(id, completed) {
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  data[itemIndex].completed = completed;
}

;// CONCATENATED MODULE: ./src/styles/notification.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var notification_module = ({"notification":"E0yvz8SDFF78Hbsu2uXH"});
;// CONCATENATED MODULE: ./images/checkmark.svg
var checkmark_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48cGF0aCBkPSJNMjYuOTggNS45OWExIDEgMCAwIDAtLjY4Ny4zMDNMMTEgMjEuNTg2bC02LjI5My02LjI5M2ExIDEgMCAxIDAtMS40MTQgMS40MTRsNyA3YTEgMSAwIDAgMCAxLjQxNCAwbDE2LTE2YTEgMSAwIDAgMC0uNzI3LTEuNzE3eiIvPjwvc3ZnPg==";
;// CONCATENATED MODULE: ./src/js/ui.js



function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="${checkmark_namespaceObject}" width="22" height="22"></img>
                    <input class="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
}

function showNotification() {
  const notification = `<div class="${notification_module.notification}">Todo item added</div>`;
  document.body.innerHTML += notification;
  setTimeout(() => {
    const notificationEl = document.querySelector(`.${notification_module.notification}`);
    notificationEl.parentNode.removeChild(notificationEl);
  }, 2000);
}

;// CONCATENATED MODULE: ./src/js/event-handlers.js



function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
  showNotification();
}

function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset.id ||
      element.parentNode.parentNode.dataset.id,
    10
  );
}

function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

function newTodoEventHandler(event) {
  let text = event.target.value;
  addTodo({
    id: Date.now(),
    text: text,
    completed: false,
  });
  renderTodos(getAllTodos());
  clearNewTodoInput();
}

function removeTodoEventHandler(event) {
  const id = getTodoId(event.target);
  removeTodo(id);
  renderTodos(getAllTodos());
}

function toggleTodoEventListener(event) {
  const id = getTodoId(event.target);
  const isCompleted = event.target.checked;
  updateTodo(id, isCompleted);
  renderTodos(getAllTodos());
}

;// CONCATENATED MODULE: ./src/js/index.js




window.addEventListener("load", onLoadEventHandler);
document.addEventListener("change", function (event) {
  if (event.target.classList.contains("new-todo")) {
    newTodoEventHandler(event);
  }
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    removeTodoEventHandler(event);
  }
  if (event.target.classList.contains("real-checkbox")) {
    toggleTodoEventListener(event);
  }
});

/******/ })()
;