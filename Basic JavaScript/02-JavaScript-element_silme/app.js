// Element Silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Methodu

// todos[0].remove();
// todos[1].remove();
// todos[2].remove();
// todos[3].remove();

// Remove Child

todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[2]);