/*// Destructing

// let number1, number2;

arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing
const [number1, number2] = arr;
console.log(number1, number2);
*/

// Obje Destructing

/*
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};

const { a: number1, c: number2, e: number3 } = numbers;
console.log(number1, number2, number3);
*/

// Fuction Destructing
/*
const getLangs = () => ["Python", "Java", "C++"];
const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);
*/

const person = {
    name: "Yunus Emre",
    year: 1998,
    salary: 3000,
    showInfos: () => console.log("Bilgiler gösteriliyor...")
}

const { name: isim, year: yil, salary: maas, showInfos: bilgileriGoster } = person;

bilgileriGoster();
console.log(isim, yil, maas);