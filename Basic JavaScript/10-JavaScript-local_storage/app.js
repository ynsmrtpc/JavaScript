// Local storage

// setItem

// localStorage.setItem("kareket", "burpee");
// localStorage.setItem("tekrar", 50);

// Clear Local Storage

// localStorage.clear();

// Local Storage Array Yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos", todos);   // string olarak alır fakat biz array olarak almak istiyoruz

// localStorage.setItem("todos", JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);
// localStorage.clear()

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));
}