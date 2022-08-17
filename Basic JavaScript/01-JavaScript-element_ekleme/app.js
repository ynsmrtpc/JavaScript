// Yeni Element Oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr/";
newLink.target = "_blank";

// Text Contect

// cardbody.textContent = "asdsafsdfdsf";

//Text Node

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// console.log(cardbody);

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink);