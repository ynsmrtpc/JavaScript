// Maps -- Her key'e karşılık gelen bir value'nun bulunması

let myMap = new Map();


const key1 = "Yunus";
const key2 = { a: 10, b: 20 };
const key3 = () => 2;


// set
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");

// get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
console.log(myMap);

console.clear();

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

cities.forEach(function(value, key) {
    console.log(key, value);
});

console.clear();

for (const [key, value] of cities) { // Destructing
    console.log(key, value);
}

console.clear();

// Map Keys
for (let key of cities.keys()) {
    console.log(key);
}

console.clear();

for (let value of cities.values()) {
    console.log(value);
}

console.clear();

// Arrayden Map Oluşturma
const array = [
    ["key1", "value1"],
    ["key2", "value2"]
];

const lastMap = new Map(array);
console.log(lastMap);

console.clear();

// Maplerden Array Oluşturma

const citie = new Map();

citie.set("Ankara", 5);
citie.set("İstanbul", 15);
citie.set("İzmir", 4);

const arr = Array.from(citie);
console.log(arr);