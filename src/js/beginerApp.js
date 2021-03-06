/* selectors */
const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);

/* Event Listener */
todoButton.addEventListener(`click`, addtodo);

/* Functions */
function addtodo(event) {
    /* PREVENT FORM FROM SUBTIMMING */
    event.preventDefault();
   /*  TODO DIV */
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   /*  CREATE LI  */
    const newTodo = document.createElement(`li`);
    newTodo.innerText = todoInput.value;
    newTodo.classList.add(`todo-item`);
    todoDiv.appendChild(newTodo);
    /* CHECK MARK BUTTON */
    const completedButton = document.createElement(`button`);
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
   /*  CHECK TRASH BUTTON */
    const trashButton = document.createElement(`button`);
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  /*    APPEND TO LIST */
    todoList.appendChild(todoDiv);
   /*  CLEAR TODO INPUT VALUE */
   todoInput.value ="";
}