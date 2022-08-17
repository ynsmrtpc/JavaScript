const $ = (id) => document.getElementById(id);

const imgUrl = $('imgUrl');
const img = $('img');
const addBtn = $('imgUrl')
const body = document.body

body.addEventListener('click', addProduct)

function addProduct(e) {
    img.src = imgUrl.value.trim();
    e.preventDefault();
}