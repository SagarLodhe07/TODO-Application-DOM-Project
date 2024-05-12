//

const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  console.log(todos);
  return todos;
};

const addToDotoLocalStorage = (todo_TEXT) => {
  const todos = loadTodos();
  todos.todoList.push(todo_TEXT);
  localStorage.setItem("todos", JSON.stringify(todos));
};
const removeTodoFromLocalStorage = (todo_TEXT) => {
  const todos = loadTodos();
  todos.todoList = todos.todoList.filter((todo) => todo !== todo_TEXT);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addHTMLTag = (todo_TEXT) => {
  const taskList = document.getElementById("taskList");
  const todo = document.createElement("li");
  todo.textContent = todo_TEXT;
  taskList.appendChild(todo);

  const delete_Btn = document.createElement("button");
  delete_Btn.textContent = "Delete";
  delete_Btn.classList.add("delete_Btn");
  todo.appendChild(delete_Btn);

  delete_Btn.addEventListener("click", () => {
    removeTodoFromLocalStorage(todo_TEXT);
    taskList.removeChild(todo);
  });

};
document.addEventListener("DOMContentLoaded", () => {
  const todo_Input = document.getElementById("todo_Input");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    todo_TEXT = todo_Input.value;

    if (todo_TEXT == "") {
      alert("Please Enter Text");
    } else {
      // Function For Add Todo In Local Storage
      addToDotoLocalStorage(todo_TEXT);
      addHTMLTag(todo_TEXT);
      todo_Input.value = "";
    }
  });

  todo_Input.addEventListener("change", (event) => {
    const taskList = document.getElementById("taskList");
    const todo_TEXT = event.target.value;
    event.target.value = todo_TEXT.trim();
    console.log(event.target.value);
  });
  const todos = loadTodos();
  todos.todoList.forEach((todo) => {
    // const newTodoItem = document.createElement("li");
    // newTodoItem.textContent = todo;
    // taskList.appendChild(newTodoItem);
    addHTMLTag(todo);
  });
});
