// mouse eventleri

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// *** Click Event

// title.addEventListener("click", run);

// function run(e) {
//     console.log(e.type);
// }

// *** Double Click Event

// title.addEventListener("dblclick", run);

// function run(e) {
//     console.log(e.type);
// }

// *** Mouse Down ---- Bastığın anda tetiklenir

// title.addEventListener("mousedown", run);

// function run(e) {
//     console.log(e.type);
// }

// *** Mouse Up  ---- Elini çektiğin anda tetiklenir

// title.addEventListener("mouseup", run);

// function run(e) {
//     console.log(e.type);
// }

/* *** Mouse Over ---- Üstüne gelince oluşan event, bir elementin içine girip 
o elementin içindekilerin üstüne gelince de tetiklenir*/

// title.addEventListener("mouseover", run);

// function run(e) {
//     console.log(e.type);
// }


// *** Mouse Over ---- Üstünden çıkınca oluşan event

// title.addEventListener("mouseout", run);

// function run(e) {
//     console.log(e.type);
// }

// *** Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter", run);
// bir elementin içine girip o elementin içindekilerin üstüne gelince tetiklenmez
cardBody.addEventListener("mouseleave", run);
/* bir elementin içine girip o elementin içindekilerin üstüne gelince tetiklenmez, 
sadece çıkınca 1 kere tetiklenir*/

function run(e) {
    console.log(e.type);
}