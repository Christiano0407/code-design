/* selectors */
const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);

/* Event Listener */
todoButton.addEventListener(`click`, addtodo);

/* Functions */
function addtodo(event) {
    event.preventDefault();
}