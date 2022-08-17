// Event Listeners ve Event Objesi Kullanma

const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(event) {
    console.log("submit eventi");
    event.preventDefault();
}

// filterInput.onfocus = function() {
//     console.log("naber");
// }

filterInput.addEventListener("focus", function(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.placeholder);
    // console.log(e.target.className);
    console.log("naber");
})