//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".Todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //Todo DIV CONTAINER

  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create ul
  const ul = document.createElement("ul");
  ul.classList.add("todo-items");
  todoDiv.appendChild(ul);

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-itemtext");
  ul.appendChild(newTodo);

  //Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  ul.appendChild(completedButton);

  //event listener for completed button

  completedButton.addEventListener("click", COMP);

  function COMP() {
    newTodo.classList.toggle("completed");

    //completedButton.remove();
    completedButton.style.display = "none";

    //trashButton.remove();
  }

  //Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  ul.appendChild(trashButton);

  //event listener for trash button

  trashButton.addEventListener("click", TRASH);

  function TRASH() {
    todoDiv.remove();
  }

  //Append to List
  todoList.appendChild(todoDiv);

  //Clear Todo Input Value
  todoInput.value = "";
}
