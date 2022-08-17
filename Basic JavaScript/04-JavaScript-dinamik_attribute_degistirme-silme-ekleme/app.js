// Dinamik Attribute Değiştirme,Silme,Ekleme

const todoInput = document.getElementById("#todo");

let element;

element = todoInput;
element = todoInput.classList;

// todoInput.className = "form-control newClass";

todoInput.classList.add("newClass");
// todoInput.setAttribute("title", "Input");
// element = todoInput.hasAttribute("name");
// todoInput.removeAttribute("name");
// console.log(element);