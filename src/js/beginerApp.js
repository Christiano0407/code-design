/* selectors */
const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);

/* Event Listener */
todoButton.addEventListener(`click`, addtodo);

/* Functions */
function addtodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement(`li`);
    newTodo.innerText = `hey`;
    newTodo.classList.add(`todo-item`);
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement(`button`);
    completedButton.innerText = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
}