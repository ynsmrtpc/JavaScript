// Klavye Eventleri

// keypress

// document.addEventListener("keypress", run);

// function run(e) {                // harf ve rakamları gösterir sadece
//     // console.log("Naber");
//     console.log(e.which); // klavyeden basılan tuşun asci tablosundaki değeri gösteririr 
//     console.log(e.key); //  klavyeden basılan tuşun değerini gösterir
// }



// // keydown

// document.addEventListener("keydown", run); // tüm tuşları gösterir

// function run(e) {
//     console.log(e.key);
// }


//keyup

// document.addEventListener("keyup", run); // tuşu bıraktıktan sonra işleme geçer

// function run(e) {
//     console.log(e.key);
// }


const header = document.querySelector(".card_header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(event) {
    header.textContent = event.target.value;
    // document.getElementsByClassName(".card - header").innerText = "Todo List";

}