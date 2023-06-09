import styles from "../styles/notification.module.css";
import CheckmarkImage from "../../images/checkmark.svg";

export function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="${CheckmarkImage}" width="22" height="22"></img>
                    <input class="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
}

export function showNotification() {
  const notification = `<div class="${styles.notification}">Todo item added</div>`;
  document.body.innerHTML += notification;
  setTimeout(() => {
    const notificationEl = document.querySelector(`.${styles.notification}`);
    notificationEl.parentNode.removeChild(notificationEl);
  }, 2000);
}
